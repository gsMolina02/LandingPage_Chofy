import { motion, type HTMLMotionProps } from 'framer-motion';
import type { ReactNode } from 'react';

/** Aparece suavemente al entrar en pantalla. */
export function Reveal({
  children,
  delay = 0,
  className,
  ...rest
}: { children: ReactNode; delay?: number } & HTMLMotionProps<'div'>) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] }}
      className={className}
      {...rest}
    >
      {children}
    </motion.div>
  );
}

export function Eyebrow({ children, dark = false }: { children: ReactNode; dark?: boolean }) {
  return (
    <span
      className={`inline-flex items-center gap-2 rounded-full px-3.5 py-1.5 text-xs font-bold uppercase tracking-[0.16em] ${
        dark ? 'bg-gold/15 text-gold ring-1 ring-gold/30' : 'bg-teal/8 text-teal-light ring-1 ring-teal/15'
      }`}
    >
      <span className={`h-1.5 w-1.5 rounded-full ${dark ? 'bg-gold' : 'bg-teal-light'}`} />
      {children}
    </span>
  );
}

export function SectionHead({
  eyebrow,
  title,
  text,
  dark = false,
}: {
  eyebrow: string;
  title: ReactNode;
  text?: string;
  dark?: boolean;
}) {
  return (
    <Reveal className="mx-auto mb-14 max-w-2xl text-center">
      <Eyebrow dark={dark}>{eyebrow}</Eyebrow>
      <h2
        className={`mt-5 text-3xl font-extrabold leading-tight tracking-tight sm:text-4xl lg:text-[2.75rem] ${
          dark ? 'text-white' : 'text-navy'
        }`}
      >
        {title}
      </h2>
      {text && (
        <p className={`mt-4 text-base leading-relaxed sm:text-lg ${dark ? 'text-white/65' : 'text-slate-text'}`}>
          {text}
        </p>
      )}
    </Reveal>
  );
}

type ButtonProps = {
  href: string;
  children: ReactNode;
  variant?: 'gold' | 'teal' | 'ghost' | 'outline';
  className?: string;
};

const variants: Record<NonNullable<ButtonProps['variant']>, string> = {
  gold: 'bg-gold text-navy shadow-lg shadow-gold/25 hover:bg-[#d4b56f] hover:shadow-gold/40',
  teal: 'bg-teal text-white shadow-lg shadow-teal/25 hover:bg-teal-light',
  ghost: 'bg-white/8 text-white ring-1 ring-white/20 backdrop-blur hover:bg-white/15',
  outline: 'bg-white text-navy ring-1 ring-line hover:ring-teal/40',
};

export function Button({ href, children, variant = 'gold', className = '' }: ButtonProps) {
  return (
    <motion.a
      href={href}
      whileHover={{ y: -2 }}
      whileTap={{ scale: 0.97 }}
      className={`inline-flex items-center justify-center gap-2 rounded-full px-6 py-3.5 text-sm font-bold transition-colors duration-200 ${variants[variant]} ${className}`}
    >
      {children}
    </motion.a>
  );
}
