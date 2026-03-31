import React from 'react'
import ReactDOM from 'react-dom/client'
import { HelmetProvider } from 'react-helmet-async'
import App from '@/App'
import '@/index.css'

// ─── Error Boundary ────────────────────────────────
interface ErrorBoundaryState {
  hasError: boolean
}

class ErrorBoundary extends React.Component<
  { children: React.ReactNode },
  ErrorBoundaryState
> {
  constructor(props: { children: React.ReactNode }) {
    super(props)
    this.state = { hasError: false }
  }

  static getDerivedStateFromError(): ErrorBoundaryState {
    return { hasError: true }
  }

  componentDidCatch(error: Error, errorInfo: React.ErrorInfo): void {
    // Production: send to Sentry
    // captureError(error, { component: 'ErrorBoundary', action: 'componentDidCatch', severity: 'fatal' })
    if (import.meta.env.DEV) {
      console.error('[ErrorBoundary]', error, errorInfo.componentStack)
    }
  }

  render(): React.ReactNode {
    if (this.state.hasError) {
      return (
        <div
          style={{
            minHeight: '100vh',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            background: '#0B1121',
            color: '#F1F5F9',
            fontFamily: "'DM Sans', sans-serif",
            padding: 24,
            textAlign: 'center',
          }}
        >
          <div>
            <h1
              style={{
                fontFamily: "'Space Grotesk', sans-serif",
                fontSize: 32,
                fontWeight: 700,
                marginBottom: 12,
              }}
            >
              Something went wrong
            </h1>
            <p style={{ color: '#94A3B8', marginBottom: 24 }}>
              Please refresh the page and try again.
            </p>
            <button
              onClick={() => window.location.reload()}
              style={{
                background: 'linear-gradient(135deg, #16A34A, #22C55E)',
                color: 'white',
                fontWeight: 600,
                padding: '12px 32px',
                borderRadius: 10,
                border: 'none',
                cursor: 'pointer',
                fontSize: 16,
              }}
            >
              Refresh Page
            </button>
          </div>
        </div>
      )
    }
    return this.props.children
  }
}

// ─── Mount ─────────────────────────────────────────
const rootElement = document.getElementById('root')

if (!rootElement) {
  throw new Error('Root element not found. Check index.html for <div id="root">.')
}

ReactDOM.createRoot(rootElement).render(
  <React.StrictMode>
    <ErrorBoundary>
      <HelmetProvider>
        <App />
      </HelmetProvider>
    </ErrorBoundary>
  </React.StrictMode>
)
