# CHOFY — Landing page

Landing page de CHOFY hecha con **React 19 + TypeScript + Vite**, **Tailwind CSS 4**, **Framer Motion** (animaciones) y **Lucide** (íconos). Usa la paleta oficial de la app (`ChofyColors`) y la tipografía Montserrat.

## Comandos

```bash
npm install      # solo la primera vez
npm run dev      # desarrollo con recarga en vivo → http://localhost:5173
npm run build    # genera la versión de producción en dist/
npm run preview  # sirve dist/ localmente
```

La carpeta `dist/` es un sitio estático: se puede publicar en Vercel, Netlify o GitHub Pages.

## Estructura

```
public/logo.png            Logo de CHOFY
src/index.css              Paleta (tokens de Tailwind) y estilos globales
src/App.tsx                Orden de las secciones
src/components/
  ui.tsx                   Reveal (animación al hacer scroll), Button, Eyebrow, SectionHead
  Navbar.tsx               Barra superior fija + menú móvil
  Hero.tsx                 Portada + franja de confianza
  PhoneMockup.tsx          Teléfono ilustrado con la app
  HowItWorks.tsx           Pasos para pasajero / conductor (pestañas)
  Features.tsx             Funciones principales
  Parcels.tsx              Envío de encomiendas
  Security.tsx             Seguridad y verificación
  Privacy.tsx              Tratamiento de datos: qué se recoge, para qué, cómo se protege y derechos
  Drivers.tsx              Llamado a conductores
  About.tsx                Nosotros: objetivo, misión, visión y valores
  Faq.tsx                  Preguntas frecuentes
  Download.tsx             Descarga (Google Play / App Store)
  Footer.tsx               Pie de página
```

## Pendiente

- Enlaces reales de Google Play y App Store (en `Download.tsx` apuntan a `#`).
- Páginas de Términos y Política de privacidad (en `Footer.tsx` y `Privacy.tsx`).
- Validar con el equipo los textos de misión, visión y valores (`About.tsx`).
- Revisar con asesoría legal la sección de datos (`Privacy.tsx`), sobre todo "No vendemos tus datos" y la mención a la LOPDP.
