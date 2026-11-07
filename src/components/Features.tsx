import { Map, MessagesSquare, BellRing, Navigation, Star, Package } from 'lucide-react';
import { Reveal, SectionHead } from './ui';

const features = [
  { icon: Map, title: 'Rutas en el mapa', text: 'Encuentra viajes que pasan por tu zona y mira el recorrido completo antes de reservar.', tone: 'teal' },
  { icon: MessagesSquare, title: 'Chat en tiempo real', text: 'Habla con tu conductor o pasajeros dentro de la app para coordinar el punto de encuentro.', tone: 'gold' },
  { icon: BellRing, title: 'Notificaciones al instante', text: 'Entérate cuando aceptan tu solicitud, cuando alguien quiere unirse o si un viaje cambia.', tone: 'olive' },
  { icon: Navigation, title: 'Seguimiento del trayecto', text: 'Sigue la ubicación del vehículo durante el viaje y llega con tranquilidad.', tone: 'teal' },
  { icon: Star, title: 'Calificaciones', text: 'Pasajeros y conductores se califican tras cada viaje. La confianza se construye viaje a viaje.', tone: 'gold' },
  { icon: Package, title: 'Envío de encomiendas', text: '¿No viajas tú? Envía un paquete con un conductor que ya va hacia ese destino.', tone: 'olive' },
] as const;

const tones = {
  teal: 'bg-teal/10 text-teal group-hover:bg-teal group-hover:text-white',
  gold: 'bg-gold/15 text-[#9a7a35] group-hover:bg-gold group-hover:text-navy',
  olive: 'bg-olive/15 text-[#6c8230] group-hover:bg-olive group-hover:text-white',
};

export default function Features() {
  return (
    <section id="funciones" className="relative overflow-hidden bg-mist py-24 sm:py-32">
      <div className="absolute -right-40 top-20 h-96 w-96 rounded-full bg-teal-light/10 blur-3xl" />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHead
          eyebrow="Funciones"
          title={
            <>
              Todo lo que necesitas para <span className="text-teal-light">viajar acompañado</span>
            </>
          }
          text="Pensada para trayectos entre ciudades, con herramientas que dan tranquilidad a ambos lados del viaje."
        />

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {features.map(({ icon: Icon, title, text, tone }, i) => (
            <Reveal key={title} delay={(i % 3) * 0.08}>
              <article className="group h-full rounded-3xl bg-white p-8 ring-1 ring-line transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl hover:shadow-navy/8">
                <span className={`grid h-14 w-14 place-items-center rounded-2xl transition-colors duration-300 ${tones[tone]}`}>
                  <Icon size={26} />
                </span>
                <h3 className="mt-6 text-lg font-bold">{title}</h3>
                <p className="mt-2.5 text-sm leading-relaxed text-slate-text">{text}</p>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
