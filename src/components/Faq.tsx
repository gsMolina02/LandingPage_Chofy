import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { Plus } from 'lucide-react';
import { Reveal, SectionHead } from './ui';

const faqs = [
  {
    q: '¿Qué es CHOFY?',
    a: 'Es una app para compartir viajes entre ciudades. Los conductores publican los trayectos que ya van a hacer y los pasajeros reservan un asiento. También permite enviar encomiendas con esos mismos conductores.',
  },
  {
    q: '¿Cómo sé que el conductor es confiable?',
    a: 'Cada conductor registra su vehículo y documentos, que revisa nuestro equipo. Quienes completan la verificación de identidad muestran una insignia de verificado. Las calificaciones de otros pasajeros también te ayudan a decidir.',
  },
  {
    q: '¿Puedo enviar un paquete sin viajar?',
    a: 'Sí. Elige un viaje publicado que vaya a la ciudad de destino y crea una encomienda. Podrás ver si fue recogida, si está en ruta y cuándo se entregó.',
  },
  {
    q: '¿Cómo se calcula el precio?',
    a: 'Las tarifas consideran la distancia y el tiempo del trayecto, y distinguen entre viajes urbanos e interprovinciales. Siempre verás el valor antes de confirmar.',
  },
  {
    q: '¿Qué pasa si tengo un problema durante el viaje?',
    a: 'Puedes reportarlo desde la app. Nuestro equipo de moderación revisa cada reporte y puede suspender a quien incumpla las normas de la comunidad.',
  },
  {
    q: '¿Puedo pedir que borren mis datos?',
    a: 'Sí. Puedes solicitar el acceso, la corrección o la eliminación de tus datos personales en cualquier momento. Consulta la sección “Tus datos” y nuestra política de privacidad.',
  },
  {
    q: '¿En qué dispositivos funciona?',
    a: 'CHOFY está disponible para teléfonos Android y iOS.',
  },
];

export default function Faq() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section id="faq" className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <SectionHead eyebrow="Preguntas frecuentes" title="Resolvemos tus dudas" />

        <Reveal className="space-y-3">
          {faqs.map((f, i) => {
            const isOpen = open === i;
            return (
              <div
                key={f.q}
                className={`overflow-hidden rounded-2xl ring-1 transition-all duration-300 ${
                  isOpen ? 'bg-white shadow-xl shadow-navy/8 ring-teal/25' : 'bg-mist/60 ring-line'
                }`}
              >
                <button
                  onClick={() => setOpen(isOpen ? null : i)}
                  aria-expanded={isOpen}
                  className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left font-bold"
                >
                  {f.q}
                  <motion.span
                    animate={{ rotate: isOpen ? 45 : 0 }}
                    className={`grid h-8 w-8 shrink-0 place-items-center rounded-full transition-colors ${
                      isOpen ? 'bg-teal text-white' : 'bg-mist text-teal'
                    }`}
                  >
                    <Plus size={18} />
                  </motion.span>
                </button>
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                    >
                      <p className="px-6 pb-6 leading-relaxed text-slate-text">{f.a}</p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </Reveal>
      </div>
    </section>
  );
}
