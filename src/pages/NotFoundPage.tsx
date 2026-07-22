import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { Home, ArrowLeft } from 'lucide-react';
import { Reveal } from '../components/ui/Reveal';

export function NotFoundPage() {
  return (
    <>
      <Helmet>
        <title>Page Not Found — 404</title>
        <meta name="robots" content="noindex" />
      </Helmet>
      <section className="relative min-h-[70vh] flex items-center justify-center pt-16">
        <div className="container-page text-center">
          <Reveal>
            <p className="font-mono text-xs text-brand-emerald dark:text-brand-emerald-dark">ERROR 404</p>
            <h1 className="mt-3 font-display text-5xl sm:text-6xl font-extrabold text-ink dark:text-ink-inverse">
              Page <span className="text-brand-emerald dark:text-brand-emerald-dark">Not Found</span>
            </h1>
            <p className="mt-4 text-sm text-ink-muted dark:text-ink-inverse-muted max-w-md mx-auto">
              This route doesn't exist — like an unhandled edge case. Let's get you back to somewhere real.
            </p>
            <div className="mt-7 flex items-center justify-center gap-3">
              <Link to="/" className="btn-primary">
                <Home size={15} /> Go Home
              </Link>
              <button type="button" onClick={() => window.history.back()} className="btn-secondary">
                <ArrowLeft size={15} /> Go Back
              </button>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
