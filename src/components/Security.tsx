import { ScanFace, CarFront, ShieldCheck, LockKeyhole } from 'lucide-react';
import { Eyebrow, Reveal } from './ui';

const items = [
  { icon: ScanFace, title: 'Verificación de identidad', text: 'Validación de documento y selfie con Veriff. Los perfiles verificados llevan insignia y aparecen primero en las búsquedas.' },
  { icon: CarFront, title: 'Vehículos revisados', text: 'Los documentos y fotos de cada vehículo pasan por la aprobación de nuestro equipo de administración.' },
  { icon: ShieldCheck, title: 'Reportes y moderación', text: 'Reporta cualquier incidente desde la app. Las cuentas que incumplen las normas se suspenden al momento.' },
  { icon: LockKeyhole, title: 'Datos protegidos', text: 'Sesiones seguras, verificación por código de correo y almacenamiento cifrado en tu dispositivo.' },
];

export default function Security() {
  return (
    <section id="seguridad" className="relative overflow-hidden bg-navy py-24 text-white sm:py-32">
      <div className="bg-grid absolute inset-0" />
      <div className="absolute -left-40 bottom-0 h-[480px] w-[480px] rounded-full bg-teal-light/30 blur-[130px]" />
      <div className="absolute -right-20 -top-20 h-80 w-80 rounded-full bg-gold/15 blur-[110px]" />

      <div className="relative mx-auto grid max-w-7xl gap-16 px-4 sm:px-6 lg:grid-cols-[0.85fr_1.15fr] lg:px-8">
        <Reveal className="lg:sticky lg:top-32 lg:self-start">
          <Eyebrow dark>Seguridad primero</Eyebrow>
          <h2 className="mt-5 text-3xl font-extrabold leading-tight tracking-tight sm:text-4xl lg:text-5xl">
            Confianza en <span className="text-gradient-gold">cada kilómetro</span>
          </h2>
          <p className="mt-5 text-base leading-relaxed text-white/65 sm:text-lg">
            La seguridad no es una función más: es la base de CHOFY. Por eso revisamos a cada conductor
            antes de que pueda publicar viajes, y acompañamos a nuestra comunidad durante todo el trayecto.
          </p>

          <div className="mt-10 inline-flex items-center gap-4 rounded-2xl bg-white/5 p-4 pr-6 ring-1 ring-white/10">
            <span className="grid h-12 w-12 place-items-center rounded-xl bg-gold text-navy">
              <ShieldCheck size={24} />
            </span>
            <div>
              <p className="font-bold">Insignia de verificado</p>
              <p className="text-sm text-white/55">Conductores con identidad confirmada</p>
            </div>
          </div>
        </Reveal>

        <div className="grid gap-5 sm:grid-cols-2">
          {items.map(({ icon: Icon, title, text }, i) => (
            <Reveal key={title} delay={i * 0.08} className={i % 2 === 1 ? 'sm:translate-y-10' : ''}>
              <article className="h-full rounded-3xl bg-white/[0.04] p-7 ring-1 ring-white/10 backdrop-blur transition-all duration-300 hover:bg-white/[0.08] hover:ring-gold/30">
                <span className="grid h-13 w-13 place-items-center rounded-2xl bg-gradient-to-br from-teal-light to-teal p-3 text-gold shadow-lg shadow-black/20">
                  <Icon size={26} />
                </span>
                <h3 className="mt-6 text-lg font-bold">{title}</h3>
                <p className="mt-2.5 text-sm leading-relaxed text-white/60">{text}</p>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
