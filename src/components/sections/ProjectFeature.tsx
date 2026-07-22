import { Link } from 'react-router-dom';
import { ArrowUpRight, ExternalLink, CircleCheck } from 'lucide-react';
import type { Project } from '../../types';
import { Reveal } from '../ui/Reveal';
import { GithubIcon } from '../ui/BrandIcon';
import { cn } from '../../utils/cn';

export function ProjectFeature({ project, reverse = false }: { project: Project; reverse?: boolean }) {
  return (
    <Reveal>
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-10 items-center">
        <Link
          to={`/projects/${project.slug}`}
          className={cn('lg:col-span-6 block group', reverse ? 'lg:order-2' : 'lg:order-1')}
          aria-label={`View ${project.title} case study`}
        >
          <div className="relative overflow-hidden rounded-xl border border-line dark:border-line-dark shadow-card dark:shadow-card-dark">
            <img
              src={project.image}
              alt=""
              loading="lazy"
              className="w-full aspect-[16/10] object-cover transition-transform duration-500 ease-out group-hover:scale-[1.03]"
            />
          </div>
        </Link>

        <div className={cn('lg:col-span-6', reverse ? 'lg:order-1' : 'lg:order-2')}>
          <span className="eyebrow">{project.category}</span>
          <h3 className="mt-2 text-xl font-bold text-ink dark:text-ink-inverse">
            <Link to={`/projects/${project.slug}`} className="hover:text-brand-emerald dark:hover:text-brand-emerald-dark transition-colors">
              {project.title}
            </Link>
          </h3>
          <p className="mt-2 text-sm text-ink-muted dark:text-ink-inverse-muted leading-relaxed">{project.description}</p>

          <p className="mt-3 text-sm">
            <span className="font-medium text-ink dark:text-ink-inverse">Problem: </span>
            <span className="text-ink-muted dark:text-ink-inverse-muted">{project.detail.problem}</span>
          </p>

          <ul className="mt-3 space-y-1.5">
            {project.features.slice(0, 2).map((f, i) => (
              <li key={i} className="flex gap-2 text-sm text-ink-muted dark:text-ink-inverse-muted leading-relaxed">
                <CircleCheck size={14} className="mt-0.5 text-brand-emerald dark:text-brand-emerald-dark shrink-0" />
                <span>{f}</span>
              </li>
            ))}
          </ul>

          <div className="mt-4 flex flex-wrap gap-1.5">
            {project.techStack.slice(0, 5).map((tech) => (
              <span key={tech} className="tag">
                {tech}
              </span>
            ))}
          </div>

          <div className="mt-5 flex items-center gap-4">
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
                className="inline-flex items-center gap-1.5 text-sm text-ink-muted dark:text-ink-inverse-muted hover:text-ink dark:hover:text-ink-inverse transition-colors"
              >
                <GithubIcon size={14} /> GitHub
              </a>
            )}
            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-1.5 text-sm text-ink-muted dark:text-ink-inverse-muted hover:text-ink dark:hover:text-ink-inverse transition-colors"
              >
                <ExternalLink size={14} /> Live Demo
              </a>
            )}
          </div>
        </div>
      </div>
    </Reveal>
  );
}
