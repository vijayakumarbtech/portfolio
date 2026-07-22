import { Component, type ErrorInfo, type ReactNode } from 'react';
import { RefreshCw } from 'lucide-react';

interface ErrorBoundaryProps {
  children: ReactNode;
}

interface ErrorBoundaryState {
  error: Error | null;
}

export class ErrorBoundary extends Component<ErrorBoundaryProps, ErrorBoundaryState> {
  state: ErrorBoundaryState = { error: null };

  static getDerivedStateFromError(error: Error): ErrorBoundaryState {
    return { error };
  }

  componentDidCatch(error: Error, info: ErrorInfo) {
    // Surfaced in the console with full context instead of failing silently.
    console.error('Portfolio crashed while rendering:', error, info.componentStack);
  }

  render() {
    if (this.state.error) {
      return (
        <div className="min-h-screen flex items-center justify-center bg-surface-base dark:bg-surface-dark-base px-6">
          <div className="max-w-md text-center">
            <p className="font-mono text-xs text-red-500 mb-2">RUNTIME ERROR</p>
            <h1 className="font-display text-2xl font-bold text-ink dark:text-ink-inverse mb-2">Something broke while rendering this page</h1>
            <p className="text-sm text-ink-muted dark:text-ink-inverse-muted mb-1">
              This is the error boundary catching it instead of leaving a blank screen. Check the browser console for the full stack trace.
            </p>
            <pre className="mt-4 mb-6 rounded-lg bg-surface-raised dark:bg-surface-dark-elevated p-4 text-left text-xs text-red-500 overflow-auto max-h-40">
              {this.state.error.message}
            </pre>
            <button type="button" onClick={() => window.location.reload()} className="btn-primary mx-auto">
              <RefreshCw size={14} /> Reload
            </button>
          </div>
        </div>
      );
    }
    return this.props.children;
  }
}
