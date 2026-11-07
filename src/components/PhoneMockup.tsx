import { motion } from 'framer-motion';
import { BadgeCheck, MessageCircle, CheckCircle2, Star, Clock, Users } from 'lucide-react';

const ROUTE = 'M24 118 C 80 112, 86 46, 140 60 S 214 30, 252 22';

/** Teléfono ilustrado con una pantalla de búsqueda de viaje de CHOFY. */
export default function PhoneMockup() {
  return (
    <div className="relative mx-auto w-full max-w-[340px]">
      {/* Halo detrás del teléfono */}
      <div className="absolute -inset-10 rounded-full bg-gradient-to-tr from-teal-light/40 via-gold/20 to-transparent blur-3xl" />

      <motion.div
        initial={{ opacity: 0, y: 40, rotate: -2 }}
        animate={{ opacity: 1, y: 0, rotate: 0 }}
        transition={{ duration: 0.9, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
        className="relative rounded-[3rem] bg-gradient-to-b from-[#1b2f4f] to-navy-900 p-3 shadow-[0_40px_80px_-20px_rgba(0,0,0,0.6)] ring-1 ring-white/10"
      >
        <div className="absolute left-1/2 top-3 z-10 h-6 w-28 -translate-x-1/2 rounded-b-2xl bg-navy-900" />

        <div className="overflow-hidden rounded-[2.4rem] bg-mist text-navy">
          {/* Cabecera */}
          <div className="bg-gradient-to-br from-navy to-teal px-5 pb-16 pt-10 text-white">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-[11px] text-white/60">Hola, Andrea</p>
                <p className="text-base font-bold">¿A dónde vas hoy?</p>
              </div>
              <div className="grid h-9 w-9 place-items-center rounded-full bg-gold text-sm font-bold text-navy">A</div>
            </div>
          </div>

          {/* Buscador */}
          <div className="-mt-11 px-4">
            <div className="rounded-2xl bg-white p-4 shadow-lg shadow-navy/10">
              <div className="flex items-center gap-3 text-[13px] font-semibold">
                <span className="h-2.5 w-2.5 rounded-full bg-teal ring-4 ring-teal/15" /> Quito
              </div>
              <div className="ml-[4px] my-1 h-4 border-l-2 border-dashed border-line" />
              <div className="flex items-center gap-3 text-[13px] font-semibold">
                <span className="h-2.5 w-2.5 rounded-full bg-gold ring-4 ring-gold/20" /> Guayaquil
              </div>
            </div>
          </div>

          {/* Mapa */}
          <div className="relative mx-4 mt-3 h-36 overflow-hidden rounded-2xl bg-[#e6eef2]">
            <svg viewBox="0 0 276 140" className="absolute inset-0 h-full w-full" aria-hidden="true">
              <path d="M0 40 H276 M0 95 H276 M70 0 V140 M190 0 V140" stroke="#fff" strokeWidth="6" />
              <path d={ROUTE} fill="none" stroke="#0F6D7A" strokeWidth="4" strokeLinecap="round" />
              <circle cx="24" cy="118" r="7" fill="#0F4C5C" />
              <circle cx="24" cy="118" r="3" fill="#fff" />
              <circle cx="252" cy="22" r="7" fill="#C6A55E" />
              <circle cx="252" cy="22" r="3" fill="#fff" />
              <g>
                <circle r="9" fill="#0F6D7A" opacity="0.25" />
                <circle r="6" fill="#0B1F3A" stroke="#fff" strokeWidth="2.5" />
                <animateMotion dur="5s" repeatCount="indefinite" path={ROUTE} />
              </g>
            </svg>
          </div>

          {/* Tarjeta de viaje */}
          <div className="p-4">
            <div className="rounded-2xl bg-white p-4 shadow-md shadow-navy/5">
              <div className="flex items-center gap-3">
                <div className="grid h-10 w-10 place-items-center rounded-full bg-teal font-bold text-white">C</div>
                <div className="flex-1">
                  <p className="text-[13px] font-bold">Carlos M.</p>
                  <span className="inline-flex items-center gap-1 text-[11px] font-semibold text-teal-light">
                    <BadgeCheck size={13} /> Verificado
                  </span>
                </div>
                <span className="inline-flex items-center gap-1 rounded-full bg-gold/15 px-2 py-1 text-[11px] font-bold text-[#8a6d2c]">
                  <Star size={11} fill="currentColor" /> 4.9
                </span>
              </div>
              <div className="mt-3 flex gap-4 text-[11px] font-medium text-slate-text">
                <span className="inline-flex items-center gap-1"><Clock size={12} /> Sáb · 07:30</span>
                <span className="inline-flex items-center gap-1"><Users size={12} /> 3 asientos</span>
              </div>
              <div className="mt-3 rounded-xl bg-teal py-2.5 text-center text-[13px] font-bold text-white">
                Solicitar unirme
              </div>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Tarjetas flotantes */}
      <motion.div
        initial={{ opacity: 0, x: -30 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.9, duration: 0.6 }}
        className="absolute -left-20 top-[46%] hidden sm:block"
      >
        <div className="flex animate-float items-center gap-3 rounded-2xl bg-white/95 p-3 pr-4 shadow-xl shadow-navy/20 backdrop-blur">
        <span className="grid h-9 w-9 place-items-center rounded-xl bg-teal/10 text-teal"><MessageCircle size={18} /></span>
        <div className="text-left">
          <p className="text-xs font-bold text-navy">Nuevo mensaje</p>
          <p className="text-[11px] text-slate-text">“Te espero en el punto”</p>
        </div>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, x: 30 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 1.2, duration: 0.6 }}
        className="absolute -right-12 -bottom-6 hidden sm:block"
      >
        <div className="flex animate-float-late items-center gap-3 rounded-2xl bg-white/95 p-3 pr-4 shadow-xl shadow-navy/20 backdrop-blur">
        <span className="grid h-9 w-9 place-items-center rounded-xl bg-olive/15 text-olive"><CheckCircle2 size={18} /></span>
        <div className="text-left">
          <p className="text-xs font-bold text-navy">¡Solicitud aceptada!</p>
          <p className="text-[11px] text-slate-text">Tu lugar está confirmado</p>
        </div>
        </div>
      </motion.div>
    </div>
  );
}
