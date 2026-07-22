import { useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Menu, X, Download } from 'lucide-react';
import { ThemeToggle } from './ThemeToggle';
import { navLinks, personal } from '../../data/portfolio';
import { useScrollSpy } from '../../hooks/useScrollSpy';

export function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  const isHome = location.pathname === '/';
  const activeId = useScrollSpy(navLinks.map((l) => l.href.replace('#', '')));

  const handleNavClick = (e: React.MouseEvent, href: string) => {
    setMobileOpen(false);

    if (isHome) {
      e.preventDefault();
      const el = document.querySelector(href);
      el?.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });
    } else {
      e.preventDefault();
      navigate(`/${href}`);
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      <nav className="glass border-b border-line dark:border-line-dark">
        <div className="container-page flex h-14 items-center justify-between">
          {/* Logo */}
          <Link
            to="/"
            className="flex items-center gap-2 font-display font-bold text-[15px] text-ink dark:text-ink-inverse"
            aria-label={`${personal.name} — home`}
          >
            <span className="flex h-7 w-7 items-center justify-center rounded-md bg-ink text-xs font-bold text-white dark:bg-white dark:text-ink">
              {personal.initials}
            </span>

            <span className="hidden sm:inline">
              {personal.name}
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-4">
            {navLinks.map((link) => {
              const id = link.href.replace('#', '');
              const active = isHome && activeId === id;

              return (
                <a
                  key={link.href}
                  href={isHome ? link.href : `/${link.href}`}
                  onClick={(e) => handleNavClick(e, link.href)}
                  data-active={active}
                  className="nav-link"
                >
                  {link.label}
                </a>
              );
            })}
          </div>

          {/* Right Side */}
          <div className="flex items-center gap-2">
            <a
              href={personal.resumePath}
              download
              className="hidden sm:inline-flex btn-primary !px-3 !py-1.5 text-xs"
            >
              <Download size={12} />
              Resume
            </a>

            <ThemeToggle />

            <button
              type="button"
              className="lg:hidden flex h-8 w-8 items-center justify-center rounded-md border border-line dark:border-line-dark text-ink dark:text-ink-inverse"
              onClick={() => setMobileOpen((v) => !v)}
              aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
              aria-expanded={mobileOpen}
            >
              {mobileOpen ? <X size={17} /> : <Menu size={17} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileOpen && (
          <div className="lg:hidden border-t border-line dark:border-line-dark bg-surface-base dark:bg-surface-dark-base">
            <div className="container-page py-3 flex flex-col gap-1">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={isHome ? link.href : `/${link.href}`}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className="rounded-md px-3 py-2.5 text-sm font-medium text-ink dark:text-ink-inverse hover:bg-surface-raised dark:hover:bg-surface-dark-elevated"
                >
                  {link.label}
                </a>
              ))}

              <a
                href={personal.resumePath}
                download
                className="btn-primary mt-2 justify-center"
              >
                <Download size={14} />
                Download Resume
              </a>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}