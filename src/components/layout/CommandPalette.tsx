import { useEffect, useMemo, useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Search, ArrowRight } from 'lucide-react';
import { navLinks, personal, projects } from '../../data/portfolio';
import { DynamicIcon } from '../ui/DynamicIcon';

interface CommandItem {
  id: string;
  label: string;
  hint: string;
  icon: string;
  action: () => void;
}

export function CommandPalette({ open, onClose }: { open: boolean; onClose: () => void }) {
  const [query, setQuery] = useState('');
  const navigate = useNavigate();
  const location = useLocation();

  const items: CommandItem[] = useMemo(() => {
    const sectionItems: CommandItem[] = navLinks.map((link) => ({
      id: `nav-${link.href}`,
      label: link.label,
      hint: 'Jump to section',
      icon: 'ArrowDownToLine',
      action: () => {
        if (location.pathname === '/') {
          document.querySelector(link.href)?.scrollIntoView({ behavior: 'smooth' });
        } else {
          navigate(`/${link.href}`);
        }
      },
    }));

    const projectItems: CommandItem[] = projects.map((p) => ({
      id: `project-${p.slug}`,
      label: p.title,
      hint: 'View case study',
      icon: 'FolderGit2',
      action: () => navigate(`/projects/${p.slug}`),
    }));

    const externalItems: CommandItem[] = [
      {
        id: 'resume',
        label: 'Download Resume',
        hint: 'PDF',
        icon: 'Download',
        action: () => window.open(personal.resumePath, '_blank'),
      },
      {
        id: 'email',
        label: `Email ${personal.name}`,
        hint: personal.email,
        icon: 'Mail',
        action: () => window.open(`mailto:${personal.email}`),
      },
    ];

    return [...sectionItems, ...projectItems, ...externalItems];
  }, [location.pathname, navigate]);

  const filtered = items.filter((item) => item.label.toLowerCase().includes(query.toLowerCase()));

  useEffect(() => {
    if (!open) setQuery('');
  }, [open]);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [open, onClose]);

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          className="fixed inset-0 z-[90] flex items-start justify-center bg-ink/40 dark:bg-black/60 backdrop-blur-sm px-4 pt-24"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
        >
          <motion.div
            role="dialog"
            aria-modal="true"
            aria-label="Command palette"
            initial={{ opacity: 0, y: -12, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -12, scale: 0.98 }}
            transition={{ duration: 0.18 }}
            onClick={(e) => e.stopPropagation()}
            className="w-full max-w-lg card-surface overflow-hidden"
          >
            <div className="flex items-center gap-3 border-b border-line dark:border-line-dark px-4 py-3">
              <Search size={16} className="text-ink-subtle" />
              <input
                autoFocus
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Search sections, projects, actions…"
                className="w-full bg-transparent text-sm outline-none text-ink dark:text-ink-inverse placeholder:text-ink-subtle"
              />
              <kbd className="hidden sm:inline text-[10px] font-mono text-ink-subtle border border-line dark:border-line-dark rounded px-1.5 py-0.5">
                Esc
              </kbd>
            </div>
            <ul className="max-h-80 overflow-y-auto py-2">
              {filtered.length === 0 && <li className="px-4 py-6 text-center text-sm text-ink-subtle">No results found.</li>}
              {filtered.map((item) => (
                <li key={item.id}>
                  <button
                    type="button"
                    onClick={() => {
                      item.action();
                      onClose();
                    }}
                    className="w-full flex items-center gap-3 px-4 py-2.5 text-left hover:bg-surface-raised dark:hover:bg-surface-dark-elevated transition-colors"
                  >
                    <DynamicIcon name={item.icon} size={15} className="text-brand-emerald dark:text-brand-emerald-dark" />
                    <span className="flex-1 text-sm text-ink dark:text-ink-inverse">{item.label}</span>
                    <span className="text-xs text-ink-subtle font-mono">{item.hint}</span>
                    <ArrowRight size={13} className="text-ink-subtle" />
                  </button>
                </li>
              ))}
            </ul>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
