import { motion } from 'framer-motion';
import { Package, Check } from 'lucide-react';
import { Eyebrow, Reveal } from './ui';

const steps = [
  { title: 'Solicitud enviada', text: 'El conductor recibe tu pedido', state: 'done' },
  { title: 'Recogida', text: 'Tu paquete ya va en camino', state: 'done' },
  { title: 'En ruta', text: 'Síguelo en el mapa', state: 'current' },
  { title: 'Entregada', text: 'Recibes la confirmación', state: 'todo' },
] as const;

const perks = [
  'Sin necesidad de que viajes tú',
  'Conductores con identidad y vehículo revisados',
  'Estados del envío y chat con el conductor',
];

export default function Parcels() {
  return (
    <section className="bg-white py-24 sm:py-32">
      <div className="mx-auto grid max-w-7xl items-center gap-16 px-4 sm:px-6 lg:grid-cols-2 lg:px-8">
        <Reveal className="relative order-2 lg:order-1">
          <div className="absolute inset-6 -z-0 rotate-3 rounded-[2rem] bg-gradient-to-br from-gold/30 to-teal-light/20" />
          <div className="relative rounded-[2rem] bg-white p-8 shadow-2xl shadow-navy/12 ring-1 ring-line sm:p-10">
            <div className="flex items-center gap-4 border-b border-line pb-6">
              <span className="grid h-14 w-14 place-items-center rounded-2xl bg-gold/15 text-[#9a7a35]">
                <Package size={26} />
              </span>
              <div className="flex-1">
                <p className="font-bold">Encomienda #A12</p>
                <p className="text-sm text-slate-text">Cuenca → Loja</p>
              </div>
              <span className="rounded-full bg-teal/10 px-3 py-1 text-xs font-bold text-teal">En ruta</span>
            </div>

            <ol className="mt-7 space-y-6">
              {steps.map((s, i) => (
                <motion.li
                  key={s.title}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 + i * 0.15 }}
                  className="relative flex gap-4"
                >
                  {i < steps.length - 1 && (
                    <span
                      className={`absolute left-[15px] top-9 h-[calc(100%-4px)] w-0.5 ${
                        s.state === 'done' ? 'bg-olive' : 'bg-line'
                      }`}
                    />
                  )}
                  <span
                    className={`relative grid h-8 w-8 shrink-0 place-items-center rounded-full ${
                      s.state === 'done'
                        ? 'bg-olive text-white'
                        : s.state === 'current'
                          ? 'bg-gold text-navy ring-8 ring-gold/20'
                          : 'bg-mist text-slate-text ring-1 ring-line'
                    }`}
                  >
                    {s.state === 'done' ? <Check size={16} strokeWidth={3} /> : <span className="h-2 w-2 rounded-full bg-current" />}
                  </span>
                  <div>
                    <p className={`font-bold ${s.state === 'todo' ? 'text-slate-text' : ''}`}>{s.title}</p>
                    <p className="text-sm text-slate-text">{s.text}</p>
                  </div>
                </motion.li>
              ))}
            </ol>
          </div>
        </Reveal>

        <Reveal className="order-1 lg:order-2">
          <Eyebrow>Encomiendas</Eyebrow>
          <h2 className="mt-5 text-3xl font-extrabold leading-tight tracking-tight sm:text-4xl lg:text-[2.75rem]">
            Tus paquetes también viajan con CHOFY
          </h2>
          <p className="mt-5 text-base leading-relaxed text-slate-text sm:text-lg">
            Aprovecha los viajes que ya están publicados para enviar documentos, regalos o pedidos a otra
            ciudad. Sabrás en todo momento en qué etapa está tu envío: recogida, en ruta y entregado.
          </p>
          <ul className="mt-8 space-y-4">
            {perks.map((p) => (
              <li key={p} className="flex items-center gap-3 font-semibold">
                <span className="grid h-7 w-7 shrink-0 place-items-center rounded-full bg-olive/15 text-[#6c8230]">
                  <Check size={15} strokeWidth={3} />
                </span>
                {p}
              </li>
            ))}
          </ul>
        </Reveal>
      </div>
    </section>
  );
}
