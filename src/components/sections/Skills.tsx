import { skillCategories } from '../../data/portfolio';
import { SectionHeading } from '../ui/SectionHeading';
import { Reveal } from '../ui/Reveal';
import { DynamicIcon } from '../ui/DynamicIcon';
import { TechIcon } from '../ui/TechIcon';
import { GithubIcon } from '../ui/BrandIcon';
import type { Skill } from '../../types';

function SkillIcon({ skill }: { skill: Skill }) {
  if (skill.iconKind === 'tech') {
    if (skill.icon === 'github') return <GithubIcon size={15} />;
    return <TechIcon name={skill.icon} size={15} />;
  }
  return <DynamicIcon name={skill.icon} size={15} />;
}

export function Skills() {
  return (
    <section id="skills" className="section-pad bg-surface-raised dark:bg-surface-dark-raised/40">
      <div className="container-page">
        <SectionHeading eyebrow="Skills" title="Technical Skills" description="Technologies and fundamentals I build with, organized by area." />

        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {skillCategories.map((cat, i) => {
            const isEmerald = i % 2 === 0;
            return (
              <Reveal key={cat.id} delay={i * 0.05}>
                <div className="card-surface card-hover p-5 h-full">
                  <div className="flex items-center gap-2.5 mb-4">
                    <div
                      className={
                        isEmerald
                          ? 'flex h-8 w-8 items-center justify-center rounded-lg bg-brand-emerald-tint dark:bg-brand-emerald-dark/10 text-brand-emerald dark:text-brand-emerald-dark'
                          : 'flex h-8 w-8 items-center justify-center rounded-lg bg-brand-blue-tint dark:bg-brand-blue-dark/10 text-brand-blue dark:text-brand-blue-dark'
                      }
                    >
                      <DynamicIcon name={cat.icon} size={16} />
                    </div>
                    <h3 className="text-sm font-semibold text-ink dark:text-ink-inverse">{cat.title}</h3>
                  </div>
                  <div className="flex flex-wrap gap-1.5">
                    {cat.skills.map((skill) => (
                      <div
                        key={skill.name}
                        className="group flex items-center gap-1.5 rounded-md border border-line dark:border-line-dark bg-surface-base dark:bg-surface-dark-elevated px-2.5 py-1.5 transition-all duration-200 hover:-translate-y-0.5 hover:border-ink/20 dark:hover:border-ink-inverse-muted"
                      >
                        <span className="text-ink-muted dark:text-ink-inverse-muted group-hover:text-ink dark:group-hover:text-ink-inverse transition-colors">
                          <SkillIcon skill={skill} />
                        </span>
                        <span className="text-xs font-medium text-ink-muted dark:text-ink-inverse-muted group-hover:text-ink dark:group-hover:text-ink-inverse transition-colors">
                          {skill.name}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
