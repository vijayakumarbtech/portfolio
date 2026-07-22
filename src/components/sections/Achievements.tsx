import { Trophy } from 'lucide-react';
import { achievements } from '../../data/portfolio';
import { SectionHeading } from '../ui/SectionHeading';
import { Reveal } from '../ui/Reveal';

export function Achievements() {
  return (
    <section id="achievements" className="section-pad bg-surface-raised dark:bg-surface-dark-raised/40">
      <div className="container-page">
        <SectionHeading eyebrow="Recognition" title="Achievements" description="Competitive and leadership recognition earned across inter-collegiate events." />

        <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-4">
          {achievements.map((ach, i) => (
            <Reveal key={ach.id} delay={i * 0.06}>
              <div className="card-surface card-hover p-5 h-full flex gap-3">
                <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-amber-50 dark:bg-amber-400/10 text-amber-600 dark:text-amber-400">
                  <Trophy size={15} />
                </div>
                <div>
                  <h3 className="text-sm font-semibold text-ink dark:text-ink-inverse leading-snug">{ach.title}</h3>
                  <p className="mt-1.5 text-xs text-ink-muted dark:text-ink-inverse-muted leading-relaxed">{ach.description}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
