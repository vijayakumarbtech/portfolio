import { ArrowUp } from 'lucide-react';
import { navLinks, personal, socialFooterLinks } from '../../data/portfolio';
import { DynamicIcon } from '../ui/DynamicIcon';

export function Footer() {
  const year = new Date().getFullYear();

  const scrollTop = () =>
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });

  return (
    <footer className="border-t border-line dark:border-line-dark bg-surface-raised dark:bg-surface-dark-raised">
      <div className="container-page py-8">
        <div className="grid grid-cols-1 lg:grid-cols-[2fr_1fr_1fr] gap-12">

          {/* Left */}
          <div>
            <a
              href="#top"
              className="font-display text-2xl font-bold text-ink dark:text-ink-inverse"
            >
              {personal.name}
            </a>

            <p className="mt-4 max-w-md text-[15px] leading-7 text-ink-muted dark:text-ink-inverse-muted">
              {personal.title} building scalable, modern and user-focused
              full-stack products from idea to deployment.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="mb-4 text-base font-semibold text-ink dark:text-ink-inverse">
              Quick Links
            </h3>

            <ul className="grid grid-cols-2 gap-x-8 gap-y-3">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-sm text-ink-muted dark:text-ink-inverse-muted transition-colors hover:text-brand-emerald dark:hover:text-brand-emerald-dark"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Social */}
          <div>
            <h3 className="mb-4 text-base font-semibold text-ink dark:text-ink-inverse">
              Connect
            </h3>

            <ul className="space-y-3">
              {socialFooterLinks.map((social) => (
                <li key={social.id}>
                  <a
                    href={social.url}
                    target={social.url.startsWith('http') ? '_blank' : undefined}
                    rel="noreferrer"
                    className="inline-flex items-center gap-3 text-sm text-ink-muted dark:text-ink-inverse-muted transition-colors hover:text-brand-emerald dark:hover:text-brand-emerald-dark"
                  >
                    <DynamicIcon name={social.icon} size={16} />
                    {social.label}
                  </a>
                </li>
              ))}

              <li>
                <a
                  href={personal.resumePath}
                  download
                  className="inline-flex items-center gap-3 text-sm text-ink-muted dark:text-ink-inverse-muted transition-colors hover:text-brand-emerald dark:hover:text-brand-emerald-dark"
                >
                  <DynamicIcon name="FileText" size={16} />
                  Resume
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom */}

        <div className="mt-8 flex flex-col items-center justify-between gap-4 border-t border-line pt-5 dark:border-line-dark sm:flex-row">
          <p className="font-mono text-xs text-ink-subtle dark:text-ink-inverse-muted">
            © {year} {personal.name}.
          </p>

          <button
            onClick={scrollTop}
            className="inline-flex items-center gap-2 rounded-lg px-3 py-2 text-sm font-medium text-ink-muted transition-colors hover:text-brand-emerald dark:text-ink-inverse-muted dark:hover:text-brand-emerald-dark"
          >
            Back to top
            <ArrowUp size={16} />
          </button>
        </div>
      </div>
    </footer>
  );
}