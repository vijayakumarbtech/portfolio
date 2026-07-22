import { motion, useReducedMotion } from 'framer-motion';
import { Download, MessageSquare, ChevronDown } from 'lucide-react';
import { personal, heroStats } from '../../data/portfolio';
import { StatCounter } from '../ui/StatCounter';

export function Hero() {
  const shouldReduceMotion = useReducedMotion();

  const scrollTo = (id: string) => document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' });

  return (
    <section id="top" className="relative overflow-hidden pt-24 pb-14 sm:pt-28 sm:pb-16">
      <div className="container-page">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          {/* Text column */}
          <div className="lg:col-span-7">
            <motion.div
              initial={shouldReduceMotion ? undefined : { opacity: 0, y: 8 }}
              animate={shouldReduceMotion ? undefined : { opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 rounded-full border border-line dark:border-line-dark bg-surface-raised dark:bg-surface-dark-elevated px-3 py-1 text-xs font-medium text-ink-muted dark:text-ink-inverse-muted"
            >
              <span className="relative flex h-1.5 w-1.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-emerald opacity-60" />
                <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-brand-emerald" />
              </span>
              {personal.status}
            </motion.div>

            <motion.h1
              initial={shouldReduceMotion ? undefined : { opacity: 0, y: 10 }}
              animate={shouldReduceMotion ? undefined : { opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.06 }}
              className="mt-4 font-display text-4xl sm:text-5xl font-extrabold leading-[1.12] tracking-tight text-ink dark:text-ink-inverse"
            >
              {personal.name}
            </motion.h1>

            <motion.p
              initial={shouldReduceMotion ? undefined : { opacity: 0, y: 10 }}
              animate={shouldReduceMotion ? undefined : { opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="mt-2 text-base sm:text-lg font-medium text-brand-emerald dark:text-brand-emerald-dark"
            >
              {personal.title}
            </motion.p>

            <motion.p
              initial={shouldReduceMotion ? undefined : { opacity: 0, y: 10 }}
              animate={shouldReduceMotion ? undefined : { opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.14 }}
              className="mt-4 text-[15px] sm:text-base text-ink-muted dark:text-ink-inverse-muted leading-relaxed max-w-xl"
            >
              {personal.heroIntro}
            </motion.p>

            <motion.div
              initial={shouldReduceMotion ? undefined : { opacity: 0, y: 10 }}
              animate={shouldReduceMotion ? undefined : { opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.18 }}
              className="mt-7 flex flex-wrap items-center gap-3"
            >
              <a href={personal.resumePath} download className="btn-primary">
                <Download size={15} /> Download Resume
              </a>
              <button type="button" onClick={() => scrollTo('contact')} className="btn-secondary">
                <MessageSquare size={14} /> Contact
              </button>
            </motion.div>

            <motion.div
              initial={shouldReduceMotion ? undefined : { opacity: 0 }}
              animate={shouldReduceMotion ? undefined : { opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="mt-10 grid grid-cols-2 sm:grid-cols-4 gap-5 max-w-md pt-6 border-t border-line dark:border-line-dark"
            >
              {heroStats.map((stat) => (
                <StatCounter key={stat.id} stat={stat} />
              ))}
            </motion.div>
          </div>

          {/* Visual column */}
          <div className="lg:col-span-5 relative">
            <motion.div
              initial={shouldReduceMotion ? undefined : { opacity: 0, scale: 0.96 }}
              animate={shouldReduceMotion ? undefined : { opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.12 }}
              className="relative mx-auto max-w-[300px] lg:max-w-sm"
            >
              {/* Signature: one quiet emerald glow, contained behind the photo only */}
              <div
                className="absolute -inset-6 rounded-full bg-brand-emerald/10 dark:bg-brand-emerald-dark/10 blur-2xl"
                aria-hidden="true"
              />
              <div className="relative rounded-2xl border border-line dark:border-line-dark bg-surface-base dark:bg-surface-dark-raised p-2.5 shadow-card dark:shadow-card-dark">
                <img
                  src={personal.profileImage}
                  alt={`Portrait of ${personal.name}`}
                  width={440}
                  height={540}
                  fetchPriority="high"
                  className="aspect-square w-full rounded-xl object-cover object-[center_15%]"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      <button
        type="button"
        onClick={() => scrollTo('about')}
        aria-label="Scroll to About section"
        className="hidden sm:flex absolute bottom-2 left-1/2 -translate-x-1/2 flex-col items-center gap-1 text-ink-subtle dark:text-ink-inverse-muted hover:text-brand-emerald dark:hover:text-brand-emerald-dark transition-colors"
      >
        <ChevronDown size={16} className={shouldReduceMotion ? '' : 'animate-bounce'} />
      </button>
    </section>
  );
}
