import { Sparkle } from 'lucide-react';
import { personal } from '../../data/portfolio';
import { SectionHeading } from '../ui/SectionHeading';
import { Reveal } from '../ui/Reveal';

export function About() {
  return (
    <section id="about" className="section-pad">
      <div className="container-page">
        <SectionHeading eyebrow="About" title="How I think about building software" />

        <div className="mt-10 grid grid-cols-1 lg:grid-cols-12 gap-10">
          <div className="lg:col-span-7 space-y-4">
            {personal.aboutParagraphs.map((para, i) => (
              <Reveal key={i} delay={i * 0.04}>
                <p className="text-[15px] text-ink-muted dark:text-ink-inverse-muted leading-relaxed">{para}</p>
              </Reveal>
            ))}
          </div>

          <div className="lg:col-span-5 space-y-5">
            <Reveal>
              <div className="card-surface p-5">
                <h3 className="text-xs font-semibold uppercase tracking-wide text-ink dark:text-ink-inverse mb-4 flex items-center gap-1.5">
                  <Sparkle size={13} className="text-brand-emerald dark:text-brand-emerald-dark" /> Core Strengths
                </h3>
                <div className="space-y-3.5">
                  {personal.coreStrengths.map((s) => (
                    <div key={s.title}>
                      <p className="text-sm font-medium text-ink dark:text-ink-inverse">{s.title}</p>
                      <p className="text-xs text-ink-muted dark:text-ink-inverse-muted mt-0.5 leading-relaxed">{s.desc}</p>
                    </div>
                  ))}
                </div>
              </div>
            </Reveal>

            <Reveal delay={0.08}>
              <div className="card-surface p-5">
                <h3 className="text-xs font-semibold uppercase tracking-wide text-ink dark:text-ink-inverse mb-2.5">Areas of Interest</h3>
                <div className="flex flex-wrap gap-1.5">
                  {personal.areasOfInterest.map((area) => (
                    <span key={area} className="tag">
                      {area}
                    </span>
                  ))}
                </div>
                <h3 className="text-xs font-semibold uppercase tracking-wide text-ink dark:text-ink-inverse mb-2.5 mt-5">Soft Skills</h3>
                <div className="flex flex-wrap gap-1.5">
                  {personal.softSkills.map((skill) => (
                    <span key={skill} className="tag">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
