import { Logo } from './Navbar';

const cols = [
  {
    title: 'Producto',
    links: [
      { href: '#como-funciona', label: 'Cómo funciona' },
      { href: '#funciones', label: 'Funciones' },
      { href: '#seguridad', label: 'Seguridad' },
    ],
  },
  {
    title: 'Comunidad',
    links: [
      { href: '#nosotros', label: 'Nosotros' },
      { href: '#conductores', label: 'Conductores' },
      { href: '#faq', label: 'Preguntas frecuentes' },
      { href: '#descargar', label: 'Descargar' },
    ],
  },
  {
    title: 'Legal',
    links: [
      { href: '#privacidad', label: 'Tratamiento de datos' },
      { href: '#', label: 'Términos y condiciones' },
      { href: '#', label: 'Política de privacidad' },
    ],
  },
];

export default function Footer() {
  return (
    <footer className="bg-navy-900 text-white">
      <div className="mx-auto grid max-w-7xl gap-12 px-4 py-16 sm:px-6 lg:grid-cols-[1.2fr_2fr] lg:px-8">
        <div>
          <Logo light />
          <p className="mt-5 max-w-xs text-sm leading-relaxed text-white/55">
            Viaja seguro. Viaja inteligente. La forma confiable de compartir el camino entre ciudades.
          </p>
        </div>
        <div className="grid grid-cols-2 gap-8 sm:grid-cols-3">
          {cols.map((c) => (
            <div key={c.title}>
              <h4 className="text-xs font-bold uppercase tracking-[0.16em] text-gold">{c.title}</h4>
              <ul className="mt-5 space-y-3">
                {c.links.map((l) => (
                  <li key={l.label}>
                    <a href={l.href} className="text-sm text-white/65 transition-colors hover:text-white">
                      {l.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
      <div className="border-t border-white/10">
        <p className="mx-auto max-w-7xl px-4 py-6 text-sm text-white/45 sm:px-6 lg:px-8">
          © {new Date().getFullYear()} CHOFY. Todos los derechos reservados.
        </p>
      </div>
    </footer>
  );
}
