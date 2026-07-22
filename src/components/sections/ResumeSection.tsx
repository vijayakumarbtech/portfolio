import { Download, Printer, FileCheck2, Calendar } from 'lucide-react';
import { personal, skillCategories, timeline } from '../../data/portfolio';
import { SectionHeading } from '../ui/SectionHeading';
import { Reveal } from '../ui/Reveal';

export function ResumeSection() {
  const education = timeline.find((t) => t.type === 'education');
  const experience = timeline.filter((t) => t.type === 'internship');
  const allSkills = skillCategories.flatMap((c) => c.skills).slice(0, 12);

  const formattedDate = new Date(personal.resumeLastUpdated).toLocaleDateString('en-IN', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });

  return (
    <section id="resume" className="section-pad bg-surface-raised dark:bg-surface-dark-raised/40">
      <div className="container-page">
        <SectionHeading
          eyebrow="Resume"
          title="ATS-Friendly Resume"
          description="A single-page, recruiter- and applicant-tracking-system-friendly resume."
        />

        <div className="mt-12 grid grid-cols-1 lg:grid-cols-12 gap-8">
          <Reveal className="lg:col-span-7">
            <div className="card-surface overflow-hidden">
              <iframe src={`${personal.resumePath}#toolbar=0`} title="Resume preview" className="w-full h-[520px] bg-white" />
            </div>
          </Reveal>

          <div className="lg:col-span-5 space-y-6">
            <Reveal>
              <div className="card-surface p-6">
                <div className="flex items-center gap-2 text-brand-emerald dark:text-brand-emerald-dark mb-1">
                  <FileCheck2 size={16} />
                  <span className="text-sm font-semibold text-ink dark:text-ink-inverse">ATS-Friendly Format</span>
                </div>
                <p className="text-xs text-ink-muted dark:text-ink-inverse-muted flex items-center gap-1.5 mt-2">
                  <Calendar size={12} /> Last updated {formattedDate}
                </p>

                <div className="mt-5 flex flex-wrap gap-3">
                  <a href={personal.resumePath} download className="btn-primary flex-1 justify-center">
                    <Download size={15} /> Download PDF
                  </a>
                  <a href={personal.resumePath} target="_blank" rel="noreferrer" className="btn-secondary flex-1 justify-center">
                    <Printer size={15} /> View / Print
                  </a>
                </div>
              </div>
            </Reveal>

            <Reveal delay={0.06}>
              <div className="card-surface p-6">
                <h3 className="text-sm font-semibold text-ink dark:text-ink-inverse mb-3">Skills Summary</h3>
                <div className="flex flex-wrap gap-1.5">
                  {allSkills.map((s) => (
                    <span key={s.name} className="tag">
                      {s.name}
                    </span>
                  ))}
                </div>
              </div>
            </Reveal>

            <Reveal delay={0.1}>
              <div className="card-surface p-6">
                <h3 className="text-sm font-semibold text-ink dark:text-ink-inverse mb-3">Experience &amp; Education Summary</h3>
                <ul className="space-y-2.5 text-sm text-ink-muted dark:text-ink-inverse-muted">
                  {experience.map((e) => (
                    <li key={e.id}>
                      <span className="font-medium text-ink dark:text-ink-inverse">{e.role}</span> — {e.organization} (
                      {e.duration})
                    </li>
                  ))}
                  {education && (
                    <li>
                      <span className="font-medium text-ink dark:text-ink-inverse">{education.role}</span> —{' '}
                      {education.organization} ({education.duration})
                    </li>
                  )}
                </ul>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
