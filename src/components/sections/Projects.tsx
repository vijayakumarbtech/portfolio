import { useMemo, useState } from 'react';
import { Search } from 'lucide-react';
import { projects } from '../../data/portfolio';
import { SectionHeading } from '../ui/SectionHeading';
import { ProjectFeature } from './ProjectFeature';
import { cn } from '../../utils/cn';

export function Projects() {
  const [query, setQuery] = useState('');
  const [category, setCategory] = useState('All');

  const categories = useMemo(() => ['All', ...Array.from(new Set(projects.map((p) => p.category)))], []);

  const filtered = projects.filter((p) => {
    const matchesCategory = category === 'All' || p.category === category;
    const matchesQuery =
      p.title.toLowerCase().includes(query.toLowerCase()) || p.techStack.some((t) => t.toLowerCase().includes(query.toLowerCase()));
    return matchesCategory && matchesQuery;
  });

  return (
    <section id="projects" className="section-pad bg-surface-raised dark:bg-surface-dark-raised/40">
      <div className="container-page">
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-5">
          <SectionHeading eyebrow="Work" title="Featured Projects" description="Full-stack and machine learning projects, built end to end." />

          <div className="relative w-full sm:w-56">
            <Search size={14} className="absolute left-3 top-1/2 -translate-y-1/2 text-ink-subtle" />
            <input
              type="text"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search projects…"
              aria-label="Search projects"
              className="input-field pl-8 !py-2"
            />
          </div>
        </div>

        <div className="mt-5 flex flex-wrap gap-2">
          {categories.map((cat) => (
            <button
              key={cat}
              type="button"
              onClick={() => setCategory(cat)}
              className={cn(
                'rounded-full px-3.5 py-1 text-xs font-medium border transition-colors',
                category === cat
                  ? 'bg-ink text-white border-ink dark:bg-white dark:text-ink dark:border-white'
                  : 'border-line dark:border-line-dark text-ink-muted dark:text-ink-inverse-muted hover:border-ink/30 dark:hover:border-ink-inverse-muted'
              )}
            >
              {cat}
            </button>
          ))}
        </div>

        {filtered.length === 0 ? (
          <p className="mt-12 text-center text-sm text-ink-subtle">No projects match your search.</p>
        ) : (
          <div className="mt-12 space-y-16">
            {filtered.map((project, i) => (
              <ProjectFeature key={project.id} project={project} reverse={i % 2 === 1} />
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
