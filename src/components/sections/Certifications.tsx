import { Award, ExternalLink, BadgeCheck, FileImage } from 'lucide-react';
import { certifications } from '../../data/portfolio';
import { SectionHeading } from '../ui/SectionHeading';
import { Reveal } from '../ui/Reveal';

export function Certifications() {
  return (
    <section id="certifications" className="section-pad">
      <div className="container-page">
        <SectionHeading eyebrow="Credentials" title="Certifications" description="Professional certifications from NPTEL, backed by IIT and IIIT faculty." />

        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {certifications.map((cert, i) => (
            <Reveal key={cert.id} delay={i * 0.05}>
              <div className="card-surface card-hover overflow-hidden h-full flex flex-col">
                <div className="relative aspect-[4/3] bg-surface-tint dark:bg-surface-dark-elevated overflow-hidden">
                  {cert.image ? (
                    <img src={cert.image} alt={`${cert.title} certificate preview`} loading="lazy" className="h-full w-full object-cover" />
                  ) : (
                    <div className="h-full w-full flex flex-col items-center justify-center gap-1.5 text-ink-subtle">
                      <FileImage size={22} strokeWidth={1.5} />
                      <span className="text-[11px] font-mono">Add certificate image</span>
                    </div>
                  )}
                </div>

                <div className="p-5 flex flex-col flex-1">
                  <div className="flex items-start justify-between gap-2">
                    <div className="icon-tile !h-8 !w-8">
                      <Award size={15} />
                    </div>
                    <BadgeCheck size={15} className="text-brand-emerald dark:text-brand-emerald-dark mt-1.5" aria-label="Verified certification" />
                  </div>
                  <h3 className="mt-3 text-sm font-bold text-ink dark:text-ink-inverse leading-snug">{cert.title}</h3>
                  <p className="mt-1 text-xs text-ink-muted dark:text-ink-inverse-muted">{cert.issuer}</p>

                  <div className="mt-auto pt-4 flex items-center justify-between">
                    {cert.issueDate ? <span className="text-[11px] font-mono text-ink-subtle">{cert.issueDate}</span> : <span />}
                    {cert.verifyUrl && (
                      <a
                        href={cert.verifyUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center gap-1 text-xs font-semibold text-brand-emerald dark:text-brand-emerald-dark link-underline"
                      >
                        View Certificate <ExternalLink size={11} />
                      </a>
                    )}
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
