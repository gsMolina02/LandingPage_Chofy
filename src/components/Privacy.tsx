import {
  UserRound,
  IdCard,
  MapPin,
  MessagesSquare,
  Star,
  Smartphone,
  KeyRound,
  TimerReset,
  LockKeyhole,
  UserCog,
  Ban,
  FileText,
  ArrowRight,
} from 'lucide-react';
import { Button, Reveal, SectionHead } from './ui';

const data = [
  {
    icon: UserRound,
    title: 'Datos de tu cuenta',
    what: 'Nombre, correo, teléfono y foto de perfil.',
    why: 'Crear tu cuenta, identificarte ante otros usuarios y enviarte códigos y avisos por correo.',
  },
  {
    icon: IdCard,
    title: 'Identidad y vehículo',
    what: 'Cédula y documentos del conductor y del vehículo. Si eliges Veriff, tu documento y una selfie.',
    why: 'Confirmar que quien conduce es quien dice ser. Veriff es opcional y procesa esa verificación en su propia plataforma.',
  },
  {
    icon: MapPin,
    title: 'Ubicación',
    what: 'Tu ubicación al buscar viajes cercanos y durante un viaje o encomienda en curso.',
    why: 'Mostrarte rutas disponibles y permitir el seguimiento del trayecto en el mapa.',
  },
  {
    icon: MessagesSquare,
    title: 'Mensajes',
    what: 'Las conversaciones del chat asociadas a cada reserva.',
    why: 'Que conductor y pasajeros puedan coordinar el punto de encuentro y los detalles del viaje.',
  },
  {
    icon: Star,
    title: 'Calificaciones y reportes',
    what: 'Las valoraciones que das y recibes, y los incidentes que reportas.',
    why: 'Mantener la confianza de la comunidad y que el equipo de moderación pueda actuar.',
  },
  {
    icon: Smartphone,
    title: 'Datos del dispositivo',
    what: 'Un identificador para notificaciones push.',
    why: 'Avisarte cuando aceptan tu solicitud, llega un mensaje o cambia una reserva.',
  },
];

const safeguards = [
  { icon: KeyRound, title: 'Contraseñas cifradas', text: 'Nunca guardamos tu contraseña en texto plano.' },
  { icon: TimerReset, title: 'Sesiones que caducan', text: 'Tu acceso usa tokens temporales que se renuevan.' },
  { icon: LockKeyhole, title: 'Guardado seguro', text: 'Tus credenciales se guardan cifradas en el teléfono.' },
  { icon: UserCog, title: 'Acceso restringido', text: 'Solo personal autorizado revisa documentos.' },
  { icon: Ban, title: 'No vendemos tus datos', text: 'Se usan solo para que CHOFY funcione.' },
];

const rights = ['Acceso', 'Rectificación', 'Eliminación', 'Oposición', 'Portabilidad'];

export default function Privacy() {
  return (
    <section id="privacidad" className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHead
          eyebrow="Tus datos"
          title={
            <>
              Así tratamos <span className="text-teal-light">tu información</span>
            </>
          }
          text="Recogemos solo lo necesario para que viajes con seguridad, te contamos para qué lo usamos y tú mantienes el control."
        />

        {/* Qué recogemos y para qué */}
        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {data.map(({ icon: Icon, title, what, why }, i) => (
            <Reveal key={title} delay={(i % 3) * 0.08}>
              <article className="flex h-full flex-col rounded-3xl bg-mist/70 p-7 ring-1 ring-line transition-all duration-300 hover:bg-white hover:shadow-2xl hover:shadow-navy/8">
                <div className="flex items-center gap-4">
                  <span className="grid h-12 w-12 shrink-0 place-items-center rounded-2xl bg-white text-teal shadow-sm ring-1 ring-line">
                    <Icon size={22} />
                  </span>
                  <h3 className="text-lg font-bold">{title}</h3>
                </div>
                <dl className="mt-5 space-y-4 text-sm leading-relaxed">
                  <div>
                    <dt className="text-xs font-bold uppercase tracking-[0.14em] text-slate-text">Qué recogemos</dt>
                    <dd className="mt-1 text-navy">{what}</dd>
                  </div>
                  <div className="border-t border-line pt-4">
                    <dt className="text-xs font-bold uppercase tracking-[0.14em] text-teal-light">Para qué</dt>
                    <dd className="mt-1 text-slate-text">{why}</dd>
                  </div>
                </dl>
              </article>
            </Reveal>
          ))}
        </div>

        {/* Cómo lo protegemos + derechos */}
        <div className="mt-8 grid gap-5 lg:grid-cols-[1.4fr_1fr]">
          <Reveal>
            <div className="relative h-full overflow-hidden rounded-3xl bg-navy p-8 text-white sm:p-10">
              <div className="bg-grid absolute inset-0" />
              <div className="absolute -right-20 -top-20 h-64 w-64 rounded-full bg-teal-light/40 blur-3xl" />
              <h3 className="relative text-2xl font-extrabold">Cómo los protegemos</h3>
              <ul className="relative mt-8 grid gap-6 sm:grid-cols-2">
                {safeguards.map(({ icon: Icon, title, text }) => (
                  <li key={title} className="flex gap-4">
                    <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-gold/15 text-gold">
                      <Icon size={20} />
                    </span>
                    <div>
                      <p className="font-bold">{title}</p>
                      <p className="mt-0.5 text-sm text-white/60">{text}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <div className="flex h-full flex-col rounded-3xl bg-gradient-to-br from-gold/20 via-gold/10 to-transparent p-8 ring-1 ring-gold/30 sm:p-10">
              <span className="grid h-12 w-12 place-items-center rounded-2xl bg-gold text-navy">
                <FileText size={22} />
              </span>
              <h3 className="mt-6 text-2xl font-extrabold">Tus derechos</h3>
              <p className="mt-3 text-sm leading-relaxed text-slate-text">
                Conforme a la Ley Orgánica de Protección de Datos Personales del Ecuador, puedes ejercer en
                cualquier momento tus derechos de:
              </p>
              <div className="mt-5 flex flex-wrap gap-2">
                {rights.map((r) => (
                  <span key={r} className="rounded-full bg-white px-3.5 py-1.5 text-xs font-bold text-navy ring-1 ring-gold/30">
                    {r}
                  </span>
                ))}
              </div>
              <div className="mt-auto pt-8">
                <Button href="#" variant="teal">
                  Política de privacidad <ArrowRight size={18} />
                </Button>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
