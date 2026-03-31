import { useState, useEffect, useRef, useCallback } from 'react'
import { trackSectionView } from '@/utils/analytics'

/**
 * Observes elements entering the viewport and tracks visibility.
 * Returns a ref setter and a visibility check function.
 */
export function useScrollReveal(options?: IntersectionObserverInit) {
  const [visibleSections, setVisibleSections] = useState<Set<string>>(new Set())
  const sectionRefs = useRef<Record<string, HTMLElement | null>>({})
  const trackedSections = useRef<Set<string>>(new Set())

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const id = entry.target.id
            setVisibleSections((prev) => {
              const next = new Set(prev)
              next.add(id)
              return next
            })

            // Track section view once per session
            if (!trackedSections.current.has(id)) {
              trackedSections.current.add(id)
              trackSectionView(id)
            }
          }
        })
      },
      {
        threshold: 0.15,
        rootMargin: '0px 0px -50px 0px',
        ...options,
      }
    )

    const currentRefs = sectionRefs.current
    Object.values(currentRefs).forEach((ref) => {
      if (ref) observer.observe(ref)
    })

    return () => observer.disconnect()
  }, [options])

  /** Assign to a section's ref — pass the section id */
  const setSectionRef = useCallback(
    (id: string) => (el: HTMLElement | null) => {
      sectionRefs.current[id] = el
    },
    []
  )

  /** Check if a section is visible */
  const isVisible = useCallback(
    (id: string): boolean => visibleSections.has(id),
    [visibleSections]
  )

  /** Get Tailwind-compatible animation classes */
  const revealClass = useCallback(
    (id: string): string =>
      `transition-all duration-700 ${
        visibleSections.has(id)
          ? 'opacity-100 translate-y-0'
          : 'opacity-0 translate-y-8'
      }`,
    [visibleSections]
  )

  return { setSectionRef, isVisible, revealClass }
}
