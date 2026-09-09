'use client';

import { Component, ReactNode } from 'react';
import { AlertCircle, RefreshCw } from 'lucide-react';
import { Button } from './ui/button';

interface Props {
  children: ReactNode;
  fallback?: ReactNode;
}

interface State {
  hasError: boolean;
  error?: Error;
}

export class ErrorBoundary extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error: Error): State {
    return { hasError: true, error };
  }

  componentDidCatch(error: Error, errorInfo: React.ErrorInfo) {
    // Log error to monitoring service (e.g., Sentry)
    console.error('ErrorBoundary caught an error:', error, errorInfo);

    // TODO: Send to error tracking service
    // Example:
    // Sentry.captureException(error, { contexts: { react: errorInfo } });
  }

  handleReset = () => {
    this.setState({ hasError: false, error: undefined });
  };

  render() {
    if (this.state.hasError) {
      if (this.props.fallback) {
        return this.props.fallback;
      }

      return (
        <div className="flex min-h-screen items-center justify-center bg-surface px-6">
          <div className="max-w-md w-full text-center">
            <div className="border border-line bg-surface p-10">
              <div className="mb-6 flex h-14 w-14 items-center justify-center border border-destructive/30 bg-destructive/5">
                <AlertCircle className="h-6 w-6 text-destructive" />
              </div>

              <h1 className="type-title mb-4 font-light">
                Something went wrong
              </h1>

              <p className="mb-6 leading-relaxed text-ink-muted">
                We apologize for the inconvenience. An unexpected error has occurred.
              </p>

              {process.env.NODE_ENV === 'development' && this.state.error && (
                <div className="mb-6 border-l-2 border-destructive bg-surface-alt p-4 text-left">
                  <p className="break-all font-mono text-xs text-ink">
                    {this.state.error.toString()}
                  </p>
                </div>
              )}

              <div className="flex flex-col sm:flex-row gap-3 justify-center">
                <Button
                  onClick={this.handleReset}
                  className="rounded-none bg-accent text-white hover:bg-accent-hover"
                >
                  <RefreshCw className="w-4 h-4 mr-2" />
                  Try Again
                </Button>

                <Button
                  onClick={() => window.location.href = '/'}
                  variant="outline"
                  className="rounded-none border-ink-strong text-ink-strong hover:bg-ink-strong hover:text-white"
                >
                  Go to Homepage
                </Button>
              </div>
            </div>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}
