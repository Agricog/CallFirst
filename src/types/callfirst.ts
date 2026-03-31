/** FAQ item used in schema and display */
export interface FaqItem {
  readonly question: string
  readonly answer: string
}

/** Feature card data */
export interface FeatureCard {
  readonly icon: string
  readonly title: string
  readonly description: string
}

/** How-it-works step */
export interface StepItem {
  readonly step: string
  readonly title: string
  readonly description: string
}

/** Stat display */
export interface StatItem {
  readonly value: string
  readonly label: string
}

/** Territory model card */
export interface TerritoryCard {
  readonly value: string
  readonly label: string
  readonly sub: string
}

/** Pricing tier */
export interface PricingTier {
  readonly name: string
  readonly price: string
  readonly period: string
  readonly features: readonly string[]
  readonly highlighted: boolean
}

/** Comparison table row */
export interface ComparisonRow {
  readonly feature: string
  readonly callfirst: string
  readonly rankRent: string
  readonly directories: string
  readonly webAgency: string
}

/** JobBrief preview row */
export interface JobBriefRow {
  readonly label: string
  readonly value: string
  readonly highlight?: boolean
}

/** Navigation item */
export interface NavItem {
  readonly label: string
  readonly sectionId: string
}
