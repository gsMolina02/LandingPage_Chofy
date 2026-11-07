import { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { Button } from './ui';

const links = [
  { href: '#como-funciona', label: 'Cómo funciona' },
  { href: '#funciones', label: 'Funciones' },
  { href: '#seguridad', label: 'Seguridad' },
  { href: '#privacidad', label: 'Tus datos' },
  { href: '#conductores', label: 'Conductores' },
  { href: '#nosotros', label: 'Nosotros' },
  { href: '#faq', label: 'Preguntas' },
];

export function Logo({ light = false }: { light?: boolean }) {
  return (
    <a href="#inicio" className="flex items-center gap-3" aria-label="CHOFY, ir al inicio">
      <span className="grid h-11 w-11 place-items-center overflow-hidden rounded-xl bg-white shadow-md ring-1 ring-black/5">
        <img src="/logo.png" alt="" className="h-10 w-10 object-contain" />
      </span>
      <span className={`text-xl font-extrabold tracking-[0.14em] ${light ? 'text-white' : 'text-navy'}`}>CHOFY</span>
    </a>
  );
}

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const solid = scrolled || open;

  return (
    <motion.header
      initial={{ y: -80 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        solid ? 'bg-white/85 shadow-[0_8px_30px_rgba(11,31,58,0.08)] backdrop-blur-xl' : 'bg-transparent'
      }`}
    >
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <Logo light={!solid} />

        <nav className="hidden items-center gap-0.5 xl:flex" aria-label="Principal">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className={`rounded-full px-3.5 py-2 text-sm font-semibold transition-colors ${
                solid ? 'text-navy/75 hover:bg-mist hover:text-navy' : 'text-white/80 hover:bg-white/10 hover:text-white'
              }`}
            >
              {l.label}
            </a>
          ))}
          <Button href="#descargar" className="ml-3 !px-5 !py-2.5">
            Descargar app
          </Button>
        </nav>

        <button
          onClick={() => setOpen((v) => !v)}
          className={`grid h-11 w-11 place-items-center rounded-xl xl:hidden ${solid ? 'text-navy' : 'text-white'}`}
          aria-label={open ? 'Cerrar menú' : 'Abrir menú'}
          aria-expanded={open}
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.nav
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="overflow-hidden border-t border-line bg-white xl:hidden"
            aria-label="Principal móvil"
          >
            <div className="flex flex-col gap-1 px-4 py-4">
              {links.map((l) => (
                <a
                  key={l.href}
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="rounded-xl px-4 py-3 font-semibold text-navy hover:bg-mist"
                >
                  {l.label}
                </a>
              ))}
              <a
                href="#descargar"
                onClick={() => setOpen(false)}
                className="mt-2 rounded-full bg-gold px-4 py-3.5 text-center font-bold text-navy"
              >
                Descargar app
              </a>
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
