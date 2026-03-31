/**
 * Error tracking wrapper.
 * In production, replace with Sentry integration.
 * Never log PII, API keys, or auth tokens.
 */

interface ErrorContext {
  component?: string
  action?: string
  severity?: 'info' | 'warning' | 'error' | 'fatal'
}

/** Capture an error with context */
export function captureError(error: unknown, context: ErrorContext = {}): void {
  const { component = 'unknown', action = 'unknown', severity = 'error' } = context

  // Production: send to Sentry
  // Sentry.captureException(error, {
  //   tags: { component, action, severity },
  //   level: severity,
  // })

  // Development: structured console output
  if (import.meta.env.DEV) {
    console.error(`[${severity.toUpperCase()}] ${component}.${action}:`, error)
  }
}

/** Capture a non-fatal warning */
export function captureWarning(message: string, context: ErrorContext = {}): void {
  captureError(new Error(message), { ...context, severity: 'warning' })
}

/** Error boundary fallback handler */
export function handleBoundaryError(error: Error, errorInfo: React.ErrorInfo): void {
  captureError(error, {
    component: 'ErrorBoundary',
    action: 'componentDidCatch',
    severity: 'fatal',
  })

  // Log component stack in dev only
  if (import.meta.env.DEV) {
    console.error('Component stack:', errorInfo.componentStack)
  }
}
