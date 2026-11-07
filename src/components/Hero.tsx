import { motion } from 'framer-motion';
import { ArrowRight, Check, ScanFace, Radio, ShieldCheck, Route } from 'lucide-react';
import { Button } from './ui';
import PhoneMockup from './PhoneMockup';

const checks = ['Conductores verificados', 'Chat en tiempo real', 'Seguimiento en el mapa'];

const trust = [
  { icon: ScanFace, title: 'Identidad', text: 'verificada con Veriff' },
  { icon: Radio, title: 'Tiempo real', text: 'chat y notificaciones' },
  { icon: ShieldCheck, title: 'Moderación', text: 'equipo que revisa reportes' },
  { icon: Route, title: 'Ciudad y provincia', text: 'viajes urbanos e interprovinciales' },
];

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  show: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: 0.1 + i * 0.12, duration: 0.7, ease: [0.22, 1, 0.36, 1] as const },
  }),
};

export default function Hero() {
  return (
    <section id="inicio" className="relative overflow-hidden bg-navy pt-32 pb-20 text-white lg:pt-40">
      {/* Fondo */}
      <div className="bg-grid absolute inset-0" />
      <div className="absolute -top-40 -left-40 h-[520px] w-[520px] rounded-full bg-teal-light/35 blur-[120px]" />
      <div className="absolute top-40 -right-32 h-[420px] w-[420px] rounded-full bg-gold/20 blur-[120px]" />
      <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-navy-900/60 to-transparent" />

      <div className="relative mx-auto grid max-w-7xl items-center gap-16 px-4 sm:px-6 lg:grid-cols-[1.1fr_0.9fr] lg:px-8">
        <div className="text-center lg:text-left">
          <motion.span
            variants={fadeUp}
            initial="hidden"
            animate="show"
            custom={0}
            className="inline-flex items-center gap-2 rounded-full bg-white/8 px-4 py-2 text-xs font-semibold text-white/85 ring-1 ring-white/15 backdrop-blur"
          >
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-olive opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-olive" />
            </span>
            Viajes compartidos entre ciudades
          </motion.span>

          <motion.h1
            variants={fadeUp}
            initial="hidden"
            animate="show"
            custom={1}
            className="mt-6 text-4xl font-extrabold leading-[1.05] tracking-tight sm:text-6xl lg:text-7xl"
          >
            Viaja seguro.
            <br />
            <span className="text-gradient-gold">Viaja inteligente.</span>
          </motion.h1>

          <motion.p
            variants={fadeUp}
            initial="hidden"
            animate="show"
            custom={2}
            className="mx-auto mt-6 max-w-xl text-base leading-relaxed text-white/70 sm:text-lg lg:mx-0"
          >
            CHOFY conecta a conductores que ya van a tu destino con pasajeros que buscan un viaje
            cómodo, económico y confiable. Y si no viajas tú, envía tus encomiendas con ellos.
          </motion.p>

          <motion.div
            variants={fadeUp}
            initial="hidden"
            animate="show"
            custom={3}
            className="mt-9 flex flex-col justify-center gap-3 sm:flex-row lg:justify-start"
          >
            <Button href="#descargar">Descargar CHOFY</Button>
            <Button href="#como-funciona" variant="ghost">
              Ver cómo funciona <ArrowRight size={18} />
            </Button>
          </motion.div>

          <motion.ul
            variants={fadeUp}
            initial="hidden"
            animate="show"
            custom={4}
            className="mt-9 flex flex-wrap justify-center gap-x-6 gap-y-3 text-sm font-medium text-white/75 lg:justify-start"
          >
            {checks.map((c) => (
              <li key={c} className="flex items-center gap-2">
                <span className="grid h-5 w-5 place-items-center rounded-full bg-olive/20 text-olive">
                  <Check size={13} strokeWidth={3} />
                </span>
                {c}
              </li>
            ))}
          </motion.ul>
        </div>

        <PhoneMockup />
      </div>

      {/* Franja de confianza */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.8, duration: 0.8 }}
        className="relative mx-auto mt-20 max-w-7xl px-4 sm:px-6 lg:px-8"
      >
        <div className="grid grid-cols-2 gap-px overflow-hidden rounded-3xl bg-white/10 ring-1 ring-white/10 backdrop-blur lg:grid-cols-4">
          {trust.map(({ icon: Icon, title, text }) => (
            <div key={title} className="flex items-center gap-4 bg-navy/60 p-5 sm:p-6">
              <span className="grid h-11 w-11 shrink-0 place-items-center rounded-2xl bg-gold/15 text-gold">
                <Icon size={22} />
              </span>
              <div>
                <p className="text-sm font-bold">{title}</p>
                <p className="text-xs text-white/55">{text}</p>
              </div>
            </div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
