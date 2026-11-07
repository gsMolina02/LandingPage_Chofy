import { motion } from 'framer-motion';
import { Reveal } from './ui';

function PlayIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-7 w-7" fill="currentColor" aria-hidden="true">
      <path d="M4 2.5l10.5 9.5L4 21.5c-.4-.2-.6-.6-.6-1.1V3.6c0-.5.2-.9.6-1.1zM15.6 13l2.6 2.4-11.6 6.4L15.6 13zM15.6 11L6.6 2.2l11.6 6.4L15.6 11zM19.4 9.3l2.2 1.2c.8.5.8 1.6 0 2.1l-2.2 1.2L16.6 12l2.8-2.7z" />
    </svg>
  );
}

function AppleIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-7 w-7" fill="currentColor" aria-hidden="true">
      <path d="M16.4 12.6c0-2.4 2-3.5 2-3.6-1.1-1.6-2.8-1.8-3.4-1.8-1.4-.1-2.8.9-3.5.9s-1.9-.9-3.1-.8c-1.6 0-3 .9-3.8 2.3-1.6 2.8-.4 7 1.2 9.3.8 1.1 1.7 2.4 2.9 2.3 1.2 0 1.6-.7 3-.7s1.8.7 3.1.7 2-1.1 2.8-2.3c.9-1.3 1.2-2.5 1.3-2.6-.1 0-2.5-.9-2.5-3.7zM14.1 5.6c.6-.8 1.1-1.9 1-3-.9 0-2.1.6-2.7 1.4-.6.7-1.1 1.8-1 2.9 1 .1 2.1-.5 2.7-1.3z" />
    </svg>
  );
}

const stores = [
  { name: 'Google Play', icon: PlayIcon },
  { name: 'App Store', icon: AppleIcon },
];

export default function Download() {
  return (
    <section id="descargar" className="bg-white pb-24 sm:pb-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal>
          <div className="relative overflow-hidden rounded-[2.5rem] bg-navy px-6 py-16 text-center text-white sm:px-12 sm:py-24">
            <div className="bg-grid absolute inset-0" />
            <div className="absolute left-1/2 top-0 h-80 w-[640px] -translate-x-1/2 rounded-full bg-teal-light/40 blur-[120px]" />
            <div className="absolute -bottom-20 right-10 h-64 w-64 rounded-full bg-gold/20 blur-[100px]" />

            <div className="relative">
              <h2 className="mx-auto max-w-2xl text-3xl font-extrabold leading-tight tracking-tight sm:text-5xl">
                Tu próximo destino está <span className="text-gradient-gold">a un toque</span>
              </h2>
              <p className="mx-auto mt-5 max-w-lg text-base text-white/65 sm:text-lg">
                Descarga CHOFY y empieza a viajar de forma más segura, cómoda e inteligente.
              </p>

              <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
                {stores.map(({ name, icon: Icon }) => (
                  <motion.a
                    key={name}
                    href="#"
                    whileHover={{ y: -3 }}
                    whileTap={{ scale: 0.97 }}
                    aria-label={`Próximamente en ${name}`}
                    className="flex w-56 items-center gap-3 rounded-2xl bg-white px-5 py-3.5 text-left text-navy shadow-xl shadow-black/20 transition-shadow hover:shadow-gold/30"
                  >
                    <Icon />
                    <span>
                      <span className="block text-[11px] font-medium text-slate-text">Próximamente en</span>
                      <span className="block text-lg font-bold leading-tight">{name}</span>
                    </span>
                  </motion.a>
                ))}
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
