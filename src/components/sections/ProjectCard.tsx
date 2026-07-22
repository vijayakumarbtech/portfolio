import { Link } from 'react-router-dom';
import { ArrowUpRight } from 'lucide-react';
import type { Project } from '../../types';
import { Reveal } from '../ui/Reveal';
import { GithubIcon } from '../ui/BrandIcon';

export function ProjectCard({ project, delay = 0 }: { project: Project; delay?: number }) {
  return (
    <Reveal delay={delay}>
      <div className="group card-surface overflow-hidden flex flex-col h-full card-hover">
        <Link
          to={`/projects/${project.slug}`}
          className="block relative aspect-[16/10] overflow-hidden bg-surface-tint dark:bg-surface-dark-elevated"
        >
          <img
            src={project.image}
            alt=""
            className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-ink/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        </Link>

        <div className="p-6 flex flex-col flex-1">
          <span className="eyebrow">{project.category}</span>
          <h3 className="mt-2 text-lg font-bold text-ink dark:text-ink-inverse">
            <Link
              to={`/projects/${project.slug}`}
              className="hover:text-brand-emerald dark:hover:text-brand-emerald-dark transition-colors"
            >
              {project.title}
            </Link>
          </h3>
          <p className="mt-2 text-sm text-ink-muted dark:text-ink-inverse-muted leading-relaxed flex-1">{project.tagline}</p>

          <div className="mt-4 flex flex-wrap gap-1.5">
            {project.techStack.slice(0, 4).map((tech) => (
              <span key={tech} className="tag">
                {tech}
              </span>
            ))}
          </div>

          <div className="mt-5 flex items-center gap-4 pt-4 border-t border-line dark:border-line-dark">
            <Link
              to={`/projects/${project.slug}`}
              className="inline-flex items-center gap-1 text-sm font-semibold text-brand-emerald dark:text-brand-emerald-dark link-underline"
            >
              Case Study <ArrowUpRight size={14} />
            </Link>
            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-1 text-sm text-ink-muted dark:text-ink-inverse-muted hover:text-ink dark:hover:text-ink-inverse transition-colors"
              >
                <GithubIcon size={14} /> Code
              </a>
            )}
          </div>
        </div>
      </div>
    </Reveal>
  );
}
