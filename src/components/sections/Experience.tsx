import { timeline } from '../../data/portfolio';
import { SectionHeading } from '../ui/SectionHeading';
import { Reveal } from '../ui/Reveal';

export function Experience() {
  const education = timeline.find((t) => t.type === 'education');
  const experience = timeline.find((t) => t.type === 'internship');
  const leadership = timeline.find((t) => t.type === 'leadership');

  return (
    <section id="experience" className="section-pad">
      <div className="container-page">
        <SectionHeading
          eyebrow="Journey"
          title="Experience & Education"
        />

        <div className="mt-10 space-y-5">

          {/* Education */}
          {education && (
            <Reveal>
              <div className="card-surface card-hover p-6">
                <div className="flex items-start gap-4">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-surface-tint dark:bg-surface-dark-elevated border border-line dark:border-line-dark">
                    <img
                      src="/rit.png"
                      alt="Ramco Institute of Technology"
                      className="h-8 w-8 object-contain"
                    />
                  </div>

                  <div className="flex-1 min-w-0">
                    <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
                      <h3 className="text-base font-semibold text-ink dark:text-ink-inverse">
                        {education.role}
                      </h3>

                      <span className="text-xs font-mono text-ink-subtle dark:text-ink-inverse-muted">
                        {education.duration}
                      </span>
                    </div>

                    <p className="mt-0.5 text-sm font-medium text-brand-emerald dark:text-brand-emerald-dark">
                      {education.organization}
                    </p>

                    <ul className="mt-3 space-y-2">
                      {education.points.map((point, idx) => (
                        <li
                          key={idx}
                          className="flex gap-2 text-sm leading-relaxed text-ink-muted dark:text-ink-inverse-muted"
                        >
                          <span className="mt-2 h-1.5 w-1.5 rounded-full bg-ink-subtle shrink-0" />
                          <span>{point}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </Reveal>
          )}

          <div className="grid grid-cols-1 gap-5 md:grid-cols-2">

            {/* Experience */}
            {experience && (
              <Reveal delay={0.06}>
                <div className="card-surface card-hover h-full p-6">
                  <div className="flex items-start gap-4">
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-surface-tint dark:bg-surface-dark-elevated border border-line dark:border-line-dark">
                      <img
                        src="/jupiter.png"
                        alt="Jupiter Brothers"
                        className="h-8 w-8 object-contain"
                      />
                    </div>

                    <div className="flex-1 min-w-0">
                      <span className="eyebrow">Experience</span>

                      <h3 className="mt-1 text-base font-semibold text-ink dark:text-ink-inverse">
                        {experience.role}
                      </h3>

                      <p className="mt-0.5 text-sm font-medium text-brand-emerald dark:text-brand-emerald-dark">
                        {experience.organization}
                      </p>

                      <p className="mt-0.5 text-xs font-mono text-ink-subtle">
                        {experience.duration}
                      </p>

                      <ul className="mt-3 space-y-2">
                        {experience.points.map((point, idx) => (
                          <li
                            key={idx}
                            className="flex gap-2 text-sm leading-relaxed text-ink-muted dark:text-ink-inverse-muted"
                          >
                            <span className="mt-2 h-1.5 w-1.5 rounded-full bg-ink-subtle shrink-0" />
                            <span>{point}</span>
                          </li>
                        ))}
                      </ul>

                      {experience.technologies && (
                        <div className="mt-4 flex flex-wrap gap-2">
                          {experience.technologies.map((tech) => (
                            <span key={tech} className="tag">
                              {tech}
                            </span>
                          ))}
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </Reveal>
            )}

            {/* Leadership */}
            {leadership && (
              <Reveal delay={0.12}>
                <div className="card-surface card-hover h-full p-6">
                  <div className="flex items-start gap-4">
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-surface-tint dark:bg-surface-dark-elevated border border-line dark:border-line-dark">
                      <img
                        src="/unstop.png"
                        alt="RIT Unstop Igniters Club"
                        className="h-8 w-8 object-contain"
                      />
                    </div>

                    <div className="flex-1 min-w-0">
                      <span className="eyebrow">Leadership</span>

                      <h3 className="mt-1 text-base font-semibold text-ink dark:text-ink-inverse">
                        {leadership.role}
                      </h3>

                      <p className="mt-0.5 text-sm font-medium text-brand-emerald dark:text-brand-emerald-dark">
                        {leadership.organization}
                      </p>

                      <ul className="mt-3 space-y-2">
                        {leadership.points.map((point, idx) => (
                          <li
                            key={idx}
                            className="flex gap-2 text-sm leading-relaxed text-ink-muted dark:text-ink-inverse-muted"
                          >
                            <span className="mt-2 h-1.5 w-1.5 rounded-full bg-ink-subtle shrink-0" />
                            <span>{point}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </Reveal>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}