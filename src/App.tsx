import { BrowserRouter, Routes, Route } from 'react-router-dom'
import HomePage from '@/pages/HomePage'

function NotFound(): JSX.Element {
  return (
    <div className="min-h-screen flex items-center justify-center px-6 bg-surface-900">
      <div className="text-center">
        <h1 className="font-heading text-6xl font-bold text-brand-500 mb-4">404</h1>
        <p className="text-lg text-slate-400 mb-8">Page not found</p>
        <a
          href="/"
          className="cta-btn inline-block no-underline"
        >
          Back to Home
        </a>
      </div>
    </div>
  )
}

export default function App(): JSX.Element {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  )
}
