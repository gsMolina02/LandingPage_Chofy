import { Target, Compass, Telescope, ShieldCheck, Handshake, Eye, Users, Leaf } from 'lucide-react';
import { Eyebrow, Reveal } from './ui';

const values = [
  { icon: ShieldCheck, title: 'Seguridad', text: 'Es lo primero en cada decisión.' },
  { icon: Handshake, title: 'Confianza', text: 'Perfiles revisados y calificaciones reales.' },
  { icon: Eye, title: 'Transparencia', text: 'Tarifas claras y reglas conocidas.' },
  { icon: Users, title: 'Comunidad', text: 'Personas que se cuidan entre sí.' },
  { icon: Leaf, title: 'Sostenibilidad', text: 'Menos autos vacíos en la carretera.' },
];

export default function About() {
  return (
    <section id="nosotros" className="relative overflow-hidden bg-mist py-24 sm:py-32">
      <div className="absolute -left-40 top-10 h-96 w-96 rounded-full bg-gold/10 blur-3xl" />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
          {/* Objetivo */}
          <Reveal>
            <Eyebrow>Nosotros</Eyebrow>
            <h2 className="mt-5 text-3xl font-extrabold leading-tight tracking-tight sm:text-4xl lg:text-[2.75rem]">
              Movemos personas, <span className="text-teal-light">conectamos ciudades</span>
            </h2>

            <div className="mt-8 rounded-3xl bg-white p-7 shadow-xl shadow-navy/5 ring-1 ring-line sm:p-8">
              <div className="flex items-center gap-3">
                <span className="grid h-11 w-11 place-items-center rounded-2xl bg-gold/15 text-[#9a7a35]">
                  <Target size={22} />
                </span>
                <h3 className="text-sm font-bold uppercase tracking-[0.16em] text-[#9a7a35]">Nuestro objetivo</h3>
              </div>
              <p className="mt-5 text-lg font-semibold leading-relaxed text-navy sm:text-xl">
                Hacer que viajar y enviar paquetes entre ciudades sea más seguro, económico y sostenible,
                aprovechando los asientos libres de quienes ya hacen ese recorrido.
              </p>
            </div>
          </Reveal>

          {/* Misión y visión */}
          <div className="grid gap-5 sm:grid-cols-2">
            <Reveal delay={0.1}>
              <article className="relative h-full overflow-hidden rounded-3xl bg-navy p-8 text-white shadow-2xl shadow-navy/25">
                <div className="absolute -right-16 -top-16 h-48 w-48 rounded-full bg-teal-light/40 blur-3xl" />
                <span className="relative grid h-14 w-14 place-items-center rounded-2xl bg-gold text-navy">
                  <Compass size={26} />
                </span>
                <h3 className="relative mt-6 text-2xl font-extrabold">Misión</h3>
                <p className="relative mt-3 leading-relaxed text-white/75">
                  Conectar a conductores y pasajeros que comparten el mismo camino mediante una plataforma
                  confiable, con identidades verificadas, comunicación en tiempo real y un equipo que cuida a la
                  comunidad, para que cada viaje sea seguro, accesible y eficiente.
                </p>
              </article>
            </Reveal>
            <Reveal delay={0.2} className="sm:translate-y-10">
              <article className="relative h-full overflow-hidden rounded-3xl bg-gradient-to-br from-teal to-teal-light p-8 text-white shadow-2xl shadow-teal/25">
                <div className="absolute -bottom-16 -left-16 h-48 w-48 rounded-full bg-gold/30 blur-3xl" />
                <span className="relative grid h-14 w-14 place-items-center rounded-2xl bg-white text-teal">
                  <Telescope size={26} />
                </span>
                <h3 className="relative mt-6 text-2xl font-extrabold">Visión</h3>
                <p className="relative mt-3 leading-relaxed text-white/80">
                  Ser la plataforma de referencia en Ecuador para compartir viajes y envíos entre ciudades,
                  reconocida por la confianza de su comunidad y por transformar la forma en que las personas se
                  movilizan.
                </p>
              </article>
            </Reveal>
          </div>
        </div>

        {/* Valores */}
        <Reveal className="mt-20 lg:mt-24">
          <h3 className="text-center text-sm font-bold uppercase tracking-[0.16em] text-slate-text">
            Nuestros valores
          </h3>
          <div className="mt-8 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-5">
            {values.map(({ icon: Icon, title, text }) => (
              <div
                key={title}
                className="group rounded-2xl bg-white p-5 text-center ring-1 ring-line transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-navy/8"
              >
                <span className="mx-auto grid h-12 w-12 place-items-center rounded-2xl bg-teal/10 text-teal transition-colors group-hover:bg-teal group-hover:text-white">
                  <Icon size={22} />
                </span>
                <p className="mt-4 font-bold">{title}</p>
                <p className="mt-1 text-xs leading-relaxed text-slate-text">{text}</p>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
