import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { Search, Send, Star, UserCheck, MapPinned, CarFront } from 'lucide-react';
import { Reveal, SectionHead } from './ui';

const flows = {
  pasajero: [
    { icon: Search, title: 'Busca tu destino', text: 'Indica de dónde sales y a dónde vas. Verás en el mapa los viajes que pasan por tu ruta.' },
    { icon: Send, title: 'Elige y solicita', text: 'Compara horarios, asientos y la calificación del conductor. Envía tu solicitud y espera su aprobación.' },
    { icon: Star, title: 'Viaja y califica', text: 'Coordina por chat, sigue el trayecto en el mapa y, al llegar, califica tu experiencia.' },
  ],
  conductor: [
    { icon: UserCheck, title: 'Regístrate y verifica', text: 'Crea tu cuenta, registra tu vehículo y sube tus documentos. Nuestro equipo los revisa antes de activarte.' },
    { icon: MapPinned, title: 'Publica tu viaje', text: 'Traza tu ruta en el mapa, agrega paradas, fecha, hora y los asientos libres que quieres compartir.' },
    { icon: CarFront, title: 'Acepta y conduce', text: 'Revisa quién quiere unirse, acepta las solicitudes y comparte los gastos del camino.' },
  ],
} as const;

type Flow = keyof typeof flows;

export default function HowItWorks() {
  const [tab, setTab] = useState<Flow>('pasajero');

  return (
    <section id="como-funciona" className="relative bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHead
          eyebrow="Cómo funciona"
          title="Tu próximo viaje en tres pasos"
          text="Ya seas pasajero o conductor, CHOFY hace que compartir el camino sea simple."
        />

        <Reveal className="mb-14 flex justify-center">
          <div className="relative inline-flex rounded-full bg-mist p-1.5 ring-1 ring-line" role="tablist">
            {(Object.keys(flows) as Flow[]).map((key) => (
              <button
                key={key}
                role="tab"
                aria-selected={tab === key}
                onClick={() => setTab(key)}
                className={`relative z-10 rounded-full px-6 py-3 text-sm font-bold transition-colors sm:px-8 ${
                  tab === key ? 'text-white' : 'text-slate-text hover:text-navy'
                }`}
              >
                {tab === key && (
                  <motion.span
                    layoutId="tab-pill"
                    className="absolute inset-0 -z-10 rounded-full bg-teal shadow-lg shadow-teal/30"
                    transition={{ type: 'spring', stiffness: 400, damping: 32 }}
                  />
                )}
                {key === 'pasajero' ? 'Soy pasajero' : 'Soy conductor'}
              </button>
            ))}
          </div>
        </Reveal>

        <div className="relative">
          {/* Línea conectora */}
          <div className="absolute top-10 left-[16%] right-[16%] hidden h-px bg-gradient-to-r from-transparent via-gold/50 to-transparent md:block" />

          <AnimatePresence mode="wait">
            <motion.div
              key={tab}
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -16 }}
              transition={{ duration: 0.35 }}
              className="grid gap-6 md:grid-cols-3"
              role="tabpanel"
            >
              {flows[tab].map(({ icon: Icon, title, text }, i) => (
                <motion.article
                  key={title}
                  initial={{ opacity: 0, y: 24 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.1, duration: 0.5 }}
                  className="group relative rounded-3xl bg-white p-8 text-center ring-1 ring-line transition-all duration-300 hover:-translate-y-1.5 hover:shadow-2xl hover:shadow-navy/10 hover:ring-teal/20"
                >
                  <div className="relative mx-auto mb-6 grid h-20 w-20 place-items-center rounded-3xl bg-gradient-to-br from-navy to-teal text-gold shadow-xl shadow-teal/25 transition-transform duration-300 group-hover:scale-105">
                    <Icon size={32} />
                    <span className="absolute -right-2 -top-2 grid h-8 w-8 place-items-center rounded-full bg-gold text-xs font-extrabold text-navy ring-4 ring-white">
                      {i + 1}
                    </span>
                  </div>
                  <h3 className="text-lg font-bold">{title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-slate-text">{text}</p>
                </motion.article>
              ))}
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
