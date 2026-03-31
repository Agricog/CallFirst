import type {
  FaqItem,
  FeatureCard,
  StepItem,
  StatItem,
  TerritoryCard,
  PricingTier,
  ComparisonRow,
  JobBriefRow,
  NavItem,
} from '@/types/callfirst'

// ─── NAVIGATION ────────────────────────────────────
export const NAV_ITEMS: readonly NavItem[] = [
  { label: 'How It Works', sectionId: 'how-it-works' },
  { label: 'Features', sectionId: 'features' },
  { label: 'Pricing', sectionId: 'pricing' },
  { label: 'FAQ', sectionId: 'faq' },
] as const

// ─── HERO STATS ────────────────────────────────────
export const HERO_STATS: readonly StatItem[] = [
  { value: '60s', label: 'Customer response' },
  { value: '1', label: 'Client per territory' },
  { value: '£0', label: 'Ad spend required' },
] as const

// ─── PROBLEM CARDS ─────────────────────────────────
export const PROBLEM_CARDS = [
  { icon: '✕', title: 'Contact forms', description: 'Sit in your inbox while leads go cold' },
  { icon: '✕', title: 'Missed calls', description: "You're working — you can't always answer" },
  { icon: '✕', title: 'Directory sites', description: 'Shared leads where you compete on price' },
] as const

// ─── HOW IT WORKS ──────────────────────────────────
export const STEPS: readonly StepItem[] = [
  {
    step: '1',
    title: 'Customer finds your site',
    description:
      'They search for your trade in your area. Your CallFirst site ranks organically — no ads required. They land on a clean, fast, mobile-first page with your branding.',
  },
  {
    step: '2',
    title: 'AI has a 30-second conversation',
    description:
      "Instead of a form, the customer answers three quick questions. The AI scopes their job, gives an instant price estimate, and offers a discount if you've activated one. They hand over their name and number.",
  },
  {
    step: '3',
    title: 'Customer gets instant confirmation',
    description:
      "Within 60 seconds, a WhatsApp or SMS arrives in your business name confirming their callback slot. They're committed before they've Googled anyone else.",
  },
  {
    step: '4',
    title: 'You receive a JobBrief',
    description:
      "Your phone buzzes with a structured brief: job type, scope, estimated value, lead temperature, confirmed time, and a suggested opening line. You're not cold-calling a stranger — you're calling a pre-scoped, time-confirmed prospect.",
  },
] as const

// ─── JOBBRIEF PREVIEW ──────────────────────────────
export const JOBBRIEF_ROWS: readonly JobBriefRow[] = [
  { label: 'Customer', value: 'Janet Marsh, Southsea' },
  { label: 'Job', value: 'Rear elevation, chimney repoint' },
  { label: 'Type', value: 'Domestic — semi-detached' },
  { label: 'Duration', value: '2 weeks hire' },
  { label: 'Est. value', value: '£650–£950', highlight: true },
  { label: 'Callback', value: 'Today 2:00 PM ✓' },
] as const

// ─── FEATURES ──────────────────────────────────────
export const FEATURES: readonly FeatureCard[] = [
  {
    icon: '🤖',
    title: 'AI Intake Agent',
    description:
      'Three conversational questions — not a form. Scopes the job and gives the customer an instant price estimate.',
  },
  {
    icon: '⚡',
    title: '60-Second Response',
    description:
      "Customer gets a WhatsApp or SMS in your name within 60 seconds. They're committed before they search for anyone else.",
  },
  {
    icon: '📋',
    title: 'JobBrief Delivery',
    description:
      'Structured brief hits your phone: job type, scope, value, lead score, callback time, and suggested opening line.',
  },
  {
    icon: '🔒',
    title: 'Exclusive Territory',
    description:
      'One trade. One area. One client. Forever. No competitor in your trade in your area can ever access this.',
  },
  {
    icon: '🎯',
    title: 'SEO-Researched Domain',
    description:
      'We research exact keywords, competitor strength, and search volumes before buying a domain. Built to rank from day one.',
  },
  {
    icon: '🔀',
    title: 'Pipeline Controls',
    description:
      "One-tap toggle: activate discounts when quiet, turn them off when you're busy. Control your own pipeline pressure.",
  },
  {
    icon: '🔄',
    title: 'Automated Follow-Up',
    description:
      "24-hour chase if you haven't called. 6-week reactivation for dead leads. Every lead gets followed up. Always.",
  },
  {
    icon: '⭐',
    title: 'Review Capture',
    description:
      'After a completed job, the system sends your customer a Google review link automatically. Builds your ranking passively.',
  },
  {
    icon: '📊',
    title: 'Monthly Report',
    description:
      'One page. Plain English. Enquiries, conversions, estimated revenue, Google ranking positions. Show it to your accountant.',
  },
] as const

// ─── TERRITORY MODEL ───────────────────────────────
export const TERRITORY_CARDS: readonly TerritoryCard[] = [
  { value: '1', label: 'Client per trade per area', sub: 'Your competitor can never buy this' },
  { value: 'SEO', label: 'Organic ranking only', sub: 'No ad spend dependency, ever' },
  { value: '50/50', label: 'Exit value when you retire', sub: 'We sell the territory, you get half' },
  { value: '∞', label: 'Domain authority compounds', sub: 'Gets stronger every month you stay' },
] as const

// ─── PRICING ───────────────────────────────────────
export const PRICING_TIERS: readonly PricingTier[] = [
  {
    name: 'Setup',
    price: '£2,500',
    period: 'one-off',
    highlighted: false,
    features: [
      'Keyword & domain research for your area',
      'Bespoke AI intake site built in 5 days',
      'Trade-specific AI agent configuration',
      'Full SEO optimisation & local schema',
      'Area pages for surrounding towns',
      'WhatsApp/SMS integration',
      'Lead dashboard setup',
    ],
  },
  {
    name: 'Monthly',
    price: '£199',
    period: '/month',
    highlighted: true,
    features: [
      'AI intake agent operation',
      'JobBrief delivery to your phone',
      '60-second customer acknowledgement',
      'Automated follow-up & reactivation',
      'Google review capture',
      'Seasonal intelligence alerts',
      'Monthly performance report',
      'Hosting & domain management',
    ],
  },
] as const

// ─── COMPARISON TABLE ──────────────────────────────
export const COMPARISON_ROWS: readonly ComparisonRow[] = [
  { feature: 'AI intake agent', callfirst: '✓', rankRent: '✕', directories: '✕', webAgency: '✕' },
  { feature: '60-second response', callfirst: '✓', rankRent: '✕', directories: '✕', webAgency: '✕' },
  { feature: 'Structured JobBrief', callfirst: '✓', rankRent: '✕', directories: '✕', webAgency: '✕' },
  { feature: 'Exclusive territory', callfirst: '✓', rankRent: '✓', directories: '✕', webAgency: '✕' },
  { feature: 'No ad spend', callfirst: '✓', rankRent: '✓', directories: '✕', webAgency: 'Varies' },
  { feature: 'You own the leads', callfirst: '✓', rankRent: '✕', directories: '✕', webAgency: '✓' },
  { feature: 'Automated follow-up', callfirst: '✓', rankRent: '✕', directories: '✕', webAgency: '✕' },
  { feature: 'Pipeline controls', callfirst: '✓', rankRent: '✕', directories: '✕', webAgency: '✕' },
  { feature: 'Exit resale value', callfirst: '✓', rankRent: '✕', directories: '✕', webAgency: '✕' },
] as const

// ─── NICHES ────────────────────────────────────────
export const NICHES: readonly string[] = [
  'Scaffolding', 'Roofing', 'Groundworks', 'Electricians', 'Plumbers',
  'Landscapers', 'Drainage', 'Crane Hire', 'Plant Hire', 'Fencing',
  'Demolition', 'Skip Hire', 'Removals', 'Driving Instructors',
  'Dentists', 'Vets', 'Solicitors', 'Estate Agents', 'Accountants',
  'Mortgage Brokers', 'Wedding Venues', 'Caterers', 'Photographers',
  'Chiropractors', 'Beauty Salons',
] as const

// ─── FAQS ──────────────────────────────────────────
export const FAQS: readonly FaqItem[] = [
  {
    question: 'How does CallFirst work?',
    answer:
      "A customer searches for your trade in your area. They land on your CallFirst site and have a quick 3-question conversation with our AI intake agent — not a form. They get an instant price estimate, book a callback time, and receive a WhatsApp confirmation in under 60 seconds. You get a fully scoped JobBrief on your phone before you've climbed down the ladder.",
  },
  {
    question: 'What makes this different from other lead gen sites?',
    answer:
      "Three things no one else offers. First — the 60-second WhatsApp response in your name while you're still working. Second — an AI intake agent that scopes the job, not a contact form that gives you a name and number. Third — exclusive territory. We build one site per trade per area. Your competitor cannot buy this. Ever.",
  },
  {
    question: 'What exactly is included for £199/month?',
    answer:
      'Hosting, AI intake agent operation, JobBrief delivery to your phone, 60-second customer acknowledgement, automated 24-hour follow-up, dead lead reactivation at 6 weeks, Google review capture after completed jobs, seasonal intelligence alerts, and a monthly one-page performance report showing enquiries, conversions, estimated revenue, and your Google ranking positions.',
  },
  {
    question: 'Do I own the website?',
    answer:
      "The site is built exclusively for your business and locked to your territory. We manage the domain and hosting as part of the monthly retainer. Every month the domain builds more authority and becomes harder for competitors to displace. If you ever leave, the domain stays in the ecosystem — but it's yours and yours only for as long as you're with us.",
  },
  {
    question: 'What happens when I retire or sell my business?',
    answer:
      'Your territory has real resale value. A domain that\'s been ranking and generating leads for years is worth serious money to the next business in your trade. We handle the sale, and you receive 50% of the price. The new owner continues with CallFirst and inherits all that authority.',
  },
  {
    question: 'Does this work outside the trades?',
    answer:
      'Absolutely. The system works for any local business — dentists, vets, solicitors, driving instructors, estate agents, wedding venues, removals, skip hire, and more. The AI intake questions adapt to any niche. The territory model is identical.',
  },
  {
    question: 'Do I need to pay for Google Ads on top?',
    answer:
      'No. CallFirst is built entirely on organic SEO. Before we buy a single domain, we research exact search volumes, competitor strength, and keyword opportunities in your specific area. The site is engineered to rank naturally. No ad spend required, ever.',
  },
  {
    question: 'How quickly will I see results?',
    answer:
      "The site typically goes live within 5 days. SEO results build over weeks and months — but the domain research we do upfront means we're targeting opportunities with genuine ranking potential. Many areas in specialist trades have surprisingly low competition.",
  },
  {
    question: 'Can you add this to my existing website too?',
    answer:
      'Yes. We install the same AI intake widget on your current site so every visitor gets the same experience. Both your CallFirst site and your own website feed into the same lead dashboard. It\'s included as part of the setup or as a standalone add-on.',
  },
  {
    question: "What if I'm fully booked and don't need leads right now?",
    answer:
      'Your dashboard has a one-tap toggle. Turn off the discount and urgency messaging when you\'re busy. Turn it back on when your diary thins out. You control your own pipeline pressure — the system adapts to your workload, not the other way around.',
  },
] as const

// ─── JSON-LD STRUCTURED DATA (all 8 schemas) ──────
export const STRUCTURED_DATA = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Organization',
      '@id': 'https://callfirst.co.uk/#organization',
      name: 'CallFirst',
      url: 'https://callfirst.co.uk',
      description:
        'AI-powered lead generation for UK trades and local businesses. Exclusive territory model with 60-second customer response.',
      foundingDate: '2026',
      areaServed: { '@type': 'Country', name: 'United Kingdom' },
    },
    {
      '@type': 'WebSite',
      '@id': 'https://callfirst.co.uk/#website',
      url: 'https://callfirst.co.uk',
      name: 'CallFirst',
      publisher: { '@id': 'https://callfirst.co.uk/#organization' },
    },
    {
      '@type': 'WebPage',
      '@id': 'https://callfirst.co.uk/#webpage',
      url: 'https://callfirst.co.uk',
      name: 'CallFirst | AI Lead Generation for UK Trades & Local Businesses',
      description:
        'AI-powered lead generation that responds to your customers in 60 seconds. Exclusive territory. No ad spend. One trade, one area, yours forever.',
      isPartOf: { '@id': 'https://callfirst.co.uk/#website' },
      about: { '@id': 'https://callfirst.co.uk/#organization' },
      speakable: {
        '@type': 'SpeakableSpecification',
        cssSelector: ['.hero-heading', '.hero-sub'],
      },
    },
    {
      '@type': 'SoftwareApplication',
      name: 'CallFirst AI Lead Generation',
      applicationCategory: 'BusinessApplication',
      operatingSystem: 'Web',
      offers: {
        '@type': 'AggregateOffer',
        lowPrice: '199',
        highPrice: '2500',
        priceCurrency: 'GBP',
        offerCount: '2',
      },
      description:
        'AI intake agent that qualifies leads, delivers structured job briefs, and responds to customers in 60 seconds via WhatsApp.',
    },
    {
      '@type': 'FAQPage',
      mainEntity: FAQS.map((faq) => ({
        '@type': 'Question',
        name: faq.question,
        acceptedAnswer: { '@type': 'Answer', text: faq.answer },
      })),
    },
    {
      '@type': 'HowTo',
      name: 'How to get started with CallFirst',
      step: [
        {
          '@type': 'HowToStep',
          position: 1,
          name: 'Book a demo',
          text: 'We show you exactly what your CallFirst site looks like for your trade and area, on your phone, in under 5 minutes.',
        },
        {
          '@type': 'HowToStep',
          position: 2,
          name: 'We research your area',
          text: 'We analyse search volumes, competitor domains, and keyword opportunities to find the best domain for your territory.',
        },
        {
          '@type': 'HowToStep',
          position: 3,
          name: 'We build your site',
          text: 'Your bespoke AI intake site goes live within 5 days, fully optimised for your trade, area, and brand.',
        },
        {
          '@type': 'HowToStep',
          position: 4,
          name: 'Leads start arriving',
          text: 'Customers find you on Google, the AI qualifies them, and you receive JobBriefs on your phone with confirmed callback times.',
        },
      ],
    },
    {
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://callfirst.co.uk' },
      ],
    },
    {
      '@type': 'DefinedTermSet',
      name: 'CallFirst Glossary',
      definedTerm: [
        {
          '@type': 'DefinedTerm',
          name: 'JobBrief',
          description:
            'A structured summary delivered to the business owner containing job type, scope, estimated value, lead score, callback time, and suggested opening line.',
        },
        {
          '@type': 'DefinedTerm',
          name: 'Exclusive Territory',
          description:
            'A protected area where only one business per trade vertical can operate a CallFirst lead generation site.',
        },
      ],
    },
  ],
} as const
