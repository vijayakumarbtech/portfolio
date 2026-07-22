import { Quote } from 'lucide-react';
import { testimonials } from '../../data/portfolio';
import { SectionHeading } from '../ui/SectionHeading';
import { Reveal } from '../ui/Reveal';

export function Testimonials() {
  if (testimonials.length === 0) return null;

  return (
    <section id="testimonials" className="section-pad">
      <div className="container-page">
        <SectionHeading eyebrow="Word of Mouth" title="Testimonials" align="center" />
        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <Reveal key={t.id} delay={i * 0.08}>
              <div className="card-surface p-6 h-full">
                <Quote size={20} className="text-brand-emerald/40" />
                <p className="mt-3 text-sm text-ink-muted dark:text-ink-inverse-muted leading-relaxed">{t.quote}</p>
                <div className="mt-4 flex items-center gap-3">
                  {t.avatar && <img src={t.avatar} alt={t.name} className="h-9 w-9 rounded-full object-cover" />}
                  <div>
                    <p className="text-sm font-semibold text-ink dark:text-ink-inverse">{t.name}</p>
                    <p className="text-xs text-ink-subtle">{t.role}</p>
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
