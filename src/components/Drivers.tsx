import { ArrowRight, UserRoundCheck, Calculator, BadgeCheck, Fuel } from 'lucide-react';
import { Button, Eyebrow, Reveal } from './ui';

const perks = [
  { icon: UserRoundCheck, title: 'Tú eliges', text: 'quién viaja contigo' },
  { icon: Calculator, title: 'Tarifas claras', text: 'por distancia y tiempo' },
  { icon: BadgeCheck, title: 'Insignia', text: 'de conductor verificado' },
];

export default function Drivers() {
  return (
    <section id="conductores" className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal>
          <div className="relative overflow-hidden rounded-[2.5rem] bg-gradient-to-br from-teal via-teal to-teal-light px-6 py-14 text-white shadow-2xl shadow-teal/30 sm:px-12 lg:px-16 lg:py-20">
            <div className="absolute -right-24 -top-24 h-96 w-96 rounded-full bg-gold/25 blur-3xl" />
            <div className="absolute -bottom-32 left-1/3 h-80 w-80 rounded-full bg-navy/40 blur-3xl" />

            <div className="relative grid items-center gap-12 lg:grid-cols-[1.3fr_0.7fr]">
              <div>
                <Eyebrow dark>Para conductores</Eyebrow>
                <h2 className="mt-5 text-3xl font-extrabold leading-tight tracking-tight sm:text-4xl lg:text-5xl">
                  ¿Ya haces ese viaje? <br className="hidden sm:block" />
                  <span className="text-gold">Compártelo.</span>
                </h2>
                <p className="mt-5 max-w-xl text-base leading-relaxed text-white/75 sm:text-lg">
                  Cubre los gastos de combustible y peajes llevando pasajeros o encomiendas en los asientos
                  que te sobran. Tú decides la ruta, el horario y a quién aceptas.
                </p>

                <div className="mt-9 grid gap-4 sm:grid-cols-3">
                  {perks.map(({ icon: Icon, title, text }) => (
                    <div key={title} className="rounded-2xl bg-white/10 p-4 ring-1 ring-white/15 backdrop-blur">
                      <Icon size={22} className="text-gold" />
                      <p className="mt-3 font-bold">{title}</p>
                      <p className="text-sm text-white/65">{text}</p>
                    </div>
                  ))}
                </div>

                <Button href="#descargar" className="mt-10">
                  Quiero ser conductor <ArrowRight size={18} />
                </Button>
              </div>

              <div className="relative mx-auto hidden lg:block">
                <div className="grid h-72 w-72 place-items-center rounded-full bg-white/10 ring-1 ring-white/20">
                  <div className="grid h-52 w-52 place-items-center rounded-full bg-white shadow-2xl">
                    <img src="/logo.png" alt="" className="w-40" />
                  </div>
                </div>
                <div className="absolute -bottom-2 -left-6 flex animate-float items-center gap-3 rounded-2xl bg-white p-3 pr-5 text-navy shadow-xl">
                  <span className="grid h-10 w-10 place-items-center rounded-xl bg-olive/15 text-[#6c8230]">
                    <Fuel size={20} />
                  </span>
                  <div>
                    <p className="text-sm font-bold">Gastos compartidos</p>
                    <p className="text-xs text-slate-text">en cada viaje</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
