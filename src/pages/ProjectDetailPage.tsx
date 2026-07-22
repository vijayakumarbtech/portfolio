import { useEffect } from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { ArrowLeft, ExternalLink, Layers, Lightbulb, AlertTriangle, Rocket, BookOpen } from 'lucide-react';
import { projects, seo } from '../data/portfolio';
import { Reveal } from '../components/ui/Reveal';
import { ProjectCard } from '../components/sections/ProjectCard';
import { GithubIcon } from '../components/ui/BrandIcon';

export function ProjectDetailPage() {
  const { slug } = useParams<{ slug: string }>();
  const project = projects.find((p) => p.slug === slug);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [slug]);

  if (!project) return <Navigate to="/404" replace />;

  const otherProjects = projects.filter((p) => p.slug !== project.slug).slice(0, 2);

  return (
    <>
      <Helmet>
        <title>{`${project.title} — ${seo.defaultTitle}`}</title>
        <meta name="description" content={project.description} />
      </Helmet>

      <article className="pt-28 pb-24">
        <div className="container-page">
          <Reveal>
            <Link
              to="/#projects"
              className="inline-flex items-center gap-1.5 text-sm text-ink-muted dark:text-ink-inverse-muted hover:text-brand-emerald dark:hover:text-brand-emerald-dark transition-colors"
            >
              <ArrowLeft size={14} /> Back to projects
            </Link>
          </Reveal>

          <Reveal delay={0.05}>
            <div className="mt-6 max-w-3xl">
              <span className="eyebrow">{project.category}</span>
              <h1 className="mt-3 font-display text-3xl sm:text-5xl font-extrabold text-ink dark:text-ink-inverse leading-tight">
                {project.title}
              </h1>
              <p className="mt-4 text-base sm:text-lg text-ink-muted dark:text-ink-inverse-muted leading-relaxed">
                {project.description}
              </p>

              <div className="mt-6 flex flex-wrap items-center gap-4 text-sm text-ink-muted dark:text-ink-inverse-muted">
                <span>
                  <strong className="text-ink dark:text-ink-inverse font-medium">Role:</strong> {project.role}
                </span>
                <span className="h-1 w-1 rounded-full bg-line dark:bg-line-dark" />
                <span>
                  <strong className="text-ink dark:text-ink-inverse font-medium">Duration:</strong> {project.duration}
                </span>
              </div>

              <div className="mt-6 flex flex-wrap gap-3">
                {project.githubUrl && (
                  <a href={project.githubUrl} target="_blank" rel="noreferrer" className="btn-secondary">
                    <GithubIcon size={15} /> View Code
                  </a>
                )}
                {project.liveUrl && (
                  <a href={project.liveUrl} target="_blank" rel="noreferrer" className="btn-primary">
                    <ExternalLink size={15} /> Live Demo
                  </a>
                )}
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <div className="mt-10 rounded-3xl overflow-hidden border border-line dark:border-line-dark">
              <img src={project.image} alt={`${project.title} cover`} className="w-full aspect-[16/9] object-cover" />
            </div>
          </Reveal>

          <div className="mt-16 grid grid-cols-1 lg:grid-cols-12 gap-12">
            <div className="lg:col-span-8 space-y-14">
              <DetailBlock icon={Lightbulb} title="Problem">
                <p className="text-ink-muted dark:text-ink-inverse-muted leading-relaxed">{project.detail.problem}</p>
              </DetailBlock>

              <DetailBlock icon={Rocket} title="Solution">
                <p className="text-ink-muted dark:text-ink-inverse-muted leading-relaxed">{project.detail.solution}</p>
              </DetailBlock>

              <DetailBlock icon={Layers} title="Architecture">
                <ul className="space-y-2.5">
                  {project.detail.architecture.map((item, i) => (
                    <li key={i} className="flex gap-2.5 text-ink-muted dark:text-ink-inverse-muted leading-relaxed">
                      <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-brand-emerald dark:bg-brand-emerald-dark" />
                      {item}
                    </li>
                  ))}
                </ul>
              </DetailBlock>

              <DetailBlock icon={AlertTriangle} title="Challenges">
                <div className="space-y-4">
                  {project.detail.challenges.map((c, i) => (
                    <div key={i} className="rounded-xl border border-line dark:border-line-dark p-4">
                      <p className="text-sm font-semibold text-ink dark:text-ink-inverse">{c.title}</p>
                      <p className="text-sm text-ink-muted dark:text-ink-inverse-muted mt-1 leading-relaxed">{c.description}</p>
                    </div>
                  ))}
                </div>
              </DetailBlock>

              <DetailBlock icon={BookOpen} title="Lessons Learned">
                <ul className="space-y-2.5">
                  {project.detail.lessonsLearned.map((item, i) => (
                    <li key={i} className="flex gap-2.5 text-ink-muted dark:text-ink-inverse-muted leading-relaxed">
                      <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-brand-blue" />
                      {item}
                    </li>
                  ))}
                </ul>
              </DetailBlock>

              <DetailBlock icon={Rocket} title="Future Scope">
                <ul className="space-y-2.5">
                  {project.detail.futureScope.map((item, i) => (
                    <li key={i} className="flex gap-2.5 text-ink-muted dark:text-ink-inverse-muted leading-relaxed">
                      <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-brand-emerald" />
                      {item}
                    </li>
                  ))}
                </ul>
              </DetailBlock>
            </div>

            <div className="lg:col-span-4">
              <div className="sticky top-24 space-y-6">
                <div className="card-surface p-6">
                  <h3 className="text-sm font-semibold text-ink dark:text-ink-inverse mb-4">Tech Stack</h3>
                  <div className="flex flex-wrap gap-1.5">
                    {project.techStack.map((tech) => (
                      <span key={tech} className="tag">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
                <div className="card-surface p-6">
                  <h3 className="text-sm font-semibold text-ink dark:text-ink-inverse mb-4">Key Features</h3>
                  <ul className="space-y-2">
                    {project.features.map((f, i) => (
                      <li key={i} className="text-sm text-ink-muted dark:text-ink-inverse-muted leading-relaxed">
                        • {f}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {otherProjects.length > 0 && (
            <div className="mt-24">
              <h2 className="text-xl font-bold text-ink dark:text-ink-inverse mb-6">More Projects</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {otherProjects.map((p, i) => (
                  <ProjectCard key={p.id} project={p} delay={i * 0.08} />
                ))}
              </div>
            </div>
          )}
        </div>
      </article>
    </>
  );
}

function DetailBlock({ icon: Icon, title, children }: { icon: typeof Lightbulb; title: string; children: React.ReactNode }) {
  return (
    <Reveal>
      <div>
        <div className="flex items-center gap-2.5 mb-4">
          <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-surface-tint dark:bg-surface-dark-elevated text-brand-emerald dark:text-brand-emerald-dark">
            <Icon size={15} />
          </div>
          <h2 className="text-lg font-bold text-ink dark:text-ink-inverse">{title}</h2>
        </div>
        {children}
      </div>
    </Reveal>
  );
}
