/**
 * Google Analytics 4 event tracking.
 * NEVER send PII (emails, names, phone numbers, personal data).
 */

declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void
  }
}

interface AnalyticsEvent {
  action: string
  category: string
  label?: string
  value?: number
}

/** Track a GA4 event safely */
export function trackEvent({ action, category, label, value }: AnalyticsEvent): void {
  try {
    if (typeof window !== 'undefined' && window.gtag) {
      window.gtag('event', action, {
        event_category: category,
        event_label: label,
        value,
        timestamp: new Date().toISOString(),
      })
    }
  } catch {
    // Silently fail — analytics should never break the app
  }
}

/** Track page view */
export function trackPageView(path: string, title: string): void {
  try {
    if (typeof window !== 'undefined' && window.gtag) {
      window.gtag('event', 'page_view', {
        page_path: path,
        page_title: title,
      })
    }
  } catch {
    // Silently fail
  }
}

/** Track CTA interactions */
export function trackCta(ctaName: string, location: string): void {
  trackEvent({
    action: 'cta_click',
    category: 'engagement',
    label: `${ctaName}_${location}`,
  })
}

/** Track FAQ interactions */
export function trackFaqOpen(faqIndex: number): void {
  trackEvent({
    action: 'faq_expand',
    category: 'engagement',
    label: `faq_${faqIndex}`,
  })
}

/** Track section visibility */
export function trackSectionView(sectionId: string): void {
  trackEvent({
    action: 'section_view',
    category: 'scroll_depth',
    label: sectionId,
  })
}
