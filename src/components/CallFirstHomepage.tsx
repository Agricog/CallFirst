import { useState, useCallback } from 'react'
import { useScrollReveal } from '@/hooks/useScrollReveal'
import { trackCta, trackFaqOpen } from '@/utils/analytics'
import {
  NAV_ITEMS,
  HERO_STATS,
  PROBLEM_CARDS,
  STEPS,
  JOBBRIEF_ROWS,
  FEATURES,
  TERRITORY_CARDS,
  PRICING_TIERS,
  COMPARISON_ROWS,
  NICHES,
  FAQS,
} from '@/data/content'

// ─── SCROLL HELPER ─────────────────────────────────
function scrollToSection(id: string): void {
  document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
}

// ─── COMPONENT ─────────────────────────────────────
export default function CallFirstHomepage(): JSX.Element {
  const [activeFaq, setActiveFaq] = useState<number | null>(null)
  const { setSectionRef, revealClass } = useScrollReveal()

  const handleFaqToggle = useCallback(
    (index: number) => {
      const next = activeFaq === index ? null : index
      setActiveFaq(next)
      if (next !== null) {
        trackFaqOpen(index)
      }
    },
    [activeFaq]
  )

  const handleCtaClick = useCallback((ctaName: string, location: string) => {
    trackCta(ctaName, location)
    scrollToSection('cta')
  }, [])

  return (
    <>
      {/* ── SKIP NAVIGATION (Accessibility) ──────── */}
      <a href="#main-content" className="skip-nav">
        Skip to main content
      </a>

      {/* ── NAV ──────────────────────────────────── */}
      <nav
        className="fixed top-0 left-0 right-0 z-50 px-6"
        style={{
          background: 'rgba(11, 17, 33, 0.85)',
          backdropFilter: 'blur(16px)',
          borderBottom: '1px solid rgba(255, 255, 255, 0.05)',
        }}
        aria-label="Main navigation"
      >
        <div className="mx-auto flex max-w-[1200px] items-center justify-between h-16">
          <a
            href="/"
            className="font-heading text-[22px] font-bold"
            aria-label="CallFirst home"
          >
            <span className="text-slate-100">Call</span>
            <span className="text-brand-500">First</span>
          </a>

          <div className="hidden items-center gap-8 md:flex">
            {NAV_ITEMS.map((item) => (
              <button
                key={item.sectionId}
                onClick={() => scrollToSection(item.sectionId)}
                className="bg-transparent border-none text-slate-400 text-sm font-medium cursor-pointer transition-colors hover:text-slate-100"
              >
                {item.label}
              </button>
            ))}
            <button
              className="cta-btn !py-2.5 !px-6 !text-sm"
              onClick={() => handleCtaClick('book_demo', 'nav')}
            >
              Book a Demo
            </button>
          </div>
        </div>
      </nav>

      {/* ── MAIN CONTENT ─────────────────────────── */}
      <main id="main-content">
        {/* ── HERO ─────────────────────────────── */}
        <section
          className="hero-grid relative overflow-hidden pt-[140px] pb-[100px] px-6"
        >
          {/* Gradient orb */}
          <div
            className="absolute -top-[200px] -right-[200px] w-[600px] h-[600px] pointer-events-none"
            style={{
              background: 'radial-gradient(circle, rgba(34,197,94,0.08) 0%, transparent 70%)',
            }}
            aria-hidden="true"
          />

          <div className="mx-auto flex max-w-[1200px] items-center gap-[60px] flex-col lg:flex-row">
            {/* Left */}
            <div className="flex-1 max-w-[620px]">
              <div className="flex items-center gap-2 text-xs font-semibold tracking-[2.5px] uppercase text-brand-500 mb-3">
                <span
                  className="pulse-dot inline-block w-2 h-2 rounded-full bg-brand-500"
                  aria-hidden="true"
                />
                AI-Powered Lead Generation for UK Businesses
              </div>

              <h1 className="hero-heading font-heading text-[clamp(36px,5.5vw,56px)] font-bold leading-[1.1] text-slate-100 mb-6">
                Your customers call{' '}
                <span className="gradient-text">you first.</span>
                <br />
                Not your competition.
              </h1>

              <p className="hero-sub text-lg leading-relaxed text-slate-400 mb-10 max-w-[540px]">
                CallFirst builds an AI-powered lead generation site exclusively
                for your trade and area. Customers get an instant response in
                under 60 seconds. You get a fully scoped job brief on your phone.
                No ad spend. No competition. Your territory, forever.
              </p>

              <div className="flex gap-4 flex-wrap flex-col sm:flex-row">
                <button
                  className="cta-btn"
                  onClick={() => handleCtaClick('book_demo', 'hero')}
                >
                  Book a Free Demo
                </button>
                <button
                  className="cta-outline"
                  onClick={() => scrollToSection('how-it-works')}
                >
                  See How It Works
                </button>
              </div>

              {/* Trust stats */}
              <div className="flex gap-10 mt-14 flex-col sm:flex-row">
                {HERO_STATS.map((stat) => (
                  <div
                    key={stat.label}
                    className="pl-4"
                    style={{ borderLeft: '2px solid rgba(34, 197, 94, 0.3)' }}
                  >
                    <div className="font-heading text-[28px] font-bold text-brand-500">
                      {stat.value}
                    </div>
                    <div className="text-[13px] text-slate-500 mt-0.5">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right — Phone mockup */}
            <div className="flex-1 flex justify-center">
              <div
                className="rounded-3xl p-4 max-w-[320px] w-full"
                style={{
                  background: '#1A1A2E',
                  border: '1px solid rgba(255, 255, 255, 0.08)',
                  boxShadow: '0 25px 60px rgba(0, 0, 0, 0.5)',
                }}
                role="img"
                aria-label="Phone showing CallFirst AI conversation between a customer and Smith's Scaffolding intake agent"
              >
                <div className="bg-surface-800 rounded-2xl p-5 min-h-[420px] flex flex-col gap-3">
                  <div className="text-center mb-2">
                    <div className="text-[13px] text-slate-500">Smith&apos;s Scaffolding</div>
                    <div className="text-[11px] text-slate-600">AI Intake Agent</div>
                  </div>

                  {/* Chat bubbles */}
                  <div
                    className="rounded-2xl rounded-bl px-4 py-3 text-sm leading-relaxed max-w-[85%] text-slate-200"
                    style={{ background: 'rgba(255,255,255,0.08)' }}
                  >
                    Hi! What do you need scaffolding for?
                  </div>
                  <div className="bg-brand-500 text-white rounded-2xl rounded-br px-4 py-3 text-sm max-w-[85%] ml-auto">
                    Roof repair
                  </div>
                  <div
                    className="rounded-2xl rounded-bl px-4 py-3 text-sm leading-relaxed max-w-[85%] text-slate-200"
                    style={{ background: 'rgba(255,255,255,0.08)' }}
                  >
                    Is it a house or commercial building?
                  </div>
                  <div className="bg-brand-500 text-white rounded-2xl rounded-br px-4 py-3 text-sm max-w-[85%] ml-auto">
                    House — semi-detached
                  </div>
                  <div
                    className="rounded-2xl rounded-bl px-4 py-3 text-sm leading-[1.6] max-w-[85%] text-slate-200"
                    style={{ background: 'rgba(255,255,255,0.08)' }}
                  >
                    Jobs like yours in Portsmouth typically cost{' '}
                    <strong className="text-brand-500">£650–£950</strong>.
                    <br />
                    <br />
                    Smith&apos;s have a slot this week with{' '}
                    <strong>10% off</strong> for quick bookings.
                    <br />
                    <br />
                    <span className="text-slate-400">
                      What&apos;s your name and number? Dave will call within the hour.
                    </span>
                  </div>

                  <div
                    className="mt-2 py-2.5 px-3.5 rounded-xl text-xs text-brand-500 text-center"
                    style={{
                      background: 'rgba(34, 197, 94, 0.1)',
                      border: '1px solid rgba(34, 197, 94, 0.2)',
                    }}
                  >
                    ⚡ Customer gets WhatsApp confirmation in 60 seconds
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── PROBLEM ────────────────────────────── */}
        <section
          id="problem"
          ref={setSectionRef('problem')}
          className={`py-20 px-6 ${revealClass('problem')}`}
          style={{ background: 'rgba(255,255,255,0.01)' }}
        >
          <div className="mx-auto max-w-[900px] text-center">
            <p className="text-xs font-semibold tracking-[2.5px] uppercase text-brand-500 mb-3">
              The Problem
            </p>
            <h2 className="font-heading text-[clamp(28px,4vw,40px)] font-bold leading-[1.15] text-slate-100 mb-5">
              Your website tells people you exist.
              <br />
              <span className="gradient-text">It doesn&apos;t book them in.</span>
            </h2>
            <p className="text-[17px] text-slate-400 leading-relaxed max-w-[700px] mx-auto">
              Right now, a customer searches for your trade. They find your site,
              see a phone number, and call. You&apos;re on a roof. They don&apos;t leave a
              voicemail. They click the next result. That lead is gone forever —
              and you never even knew it existed.
            </p>

            <div className="flex gap-6 mt-14 justify-center flex-wrap">
              {PROBLEM_CARDS.map((card) => (
                <div
                  key={card.title}
                  className="glass rounded-2xl p-7 flex-[1_1_240px] max-w-[280px] text-left"
                >
                  <div
                    className="w-9 h-9 rounded-[10px] flex items-center justify-center font-bold text-base mb-3.5"
                    style={{ background: 'rgba(239, 68, 68, 0.1)', color: '#EF4444' }}
                  >
                    {card.icon}
                  </div>
                  <div className="font-semibold text-slate-100 mb-1.5 text-[15px]">
                    {card.title}
                  </div>
                  <div className="text-sm text-slate-500 leading-relaxed">
                    {card.description}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── HOW IT WORKS ───────────────────────── */}
        <section
          id="how-it-works"
          ref={setSectionRef('how-it-works')}
          className={`py-20 px-6 ${revealClass('how-it-works')}`}
        >
          <div className="mx-auto max-w-[900px]">
            <p className="text-xs font-semibold tracking-[2.5px] uppercase text-brand-500 mb-3 text-center">
              How It Works
            </p>
            <h2 className="font-heading text-[clamp(28px,4vw,40px)] font-bold leading-[1.15] text-slate-100 mb-5 text-center">
              From search to JobBrief in under 60 seconds
            </h2>

            <div className="flex flex-col gap-8 mt-12">
              {STEPS.map((item) => (
                <div
                  key={item.step}
                  className="glass glass-hover flex gap-5 p-7 rounded-2xl items-start"
                >
                  <div
                    className="w-10 h-10 rounded-full flex items-center justify-center font-heading font-bold text-base shrink-0"
                    style={{
                      background: 'rgba(34, 197, 94, 0.1)',
                      color: '#22C55E',
                      border: '1px solid rgba(34, 197, 94, 0.2)',
                    }}
                  >
                    {item.step}
                  </div>
                  <div>
                    <h3 className="font-heading font-semibold text-lg text-slate-100 mb-2">
                      {item.title}
                    </h3>
                    <p className="text-[15px] text-slate-400 leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── JOBBRIEF PREVIEW ───────────────────── */}
        <section
          id="jobbrief"
          ref={setSectionRef('jobbrief')}
          className={`py-20 px-6 ${revealClass('jobbrief')}`}
          style={{ background: 'rgba(255,255,255,0.01)' }}
        >
          <div className="mx-auto max-w-[1100px] flex gap-[60px] items-center flex-col lg:flex-row">
            <div className="flex-1">
              <p className="text-xs font-semibold tracking-[2.5px] uppercase text-brand-500 mb-3">
                What You Receive
              </p>
              <h2 className="font-heading text-[clamp(28px,4vw,40px)] font-bold leading-[1.15] text-slate-100 mb-5">
                Not a name and number.
                <br />
                <span className="gradient-text">A fully scoped JobBrief.</span>
              </h2>
              <p className="text-base text-slate-400 leading-relaxed mb-6">
                Every other lead gen site sends you a contact form. CallFirst
                delivers a structured job brief so you can quote confidently
                before you&apos;ve even spoken to the customer.
              </p>
              <p className="text-[15px] text-slate-500 leading-relaxed">
                The suggested opening line removes the anxiety of that first call.
                You sound professional every time — because you already know
                exactly what the customer needs.
              </p>
            </div>

            <div className="flex-1 flex justify-center">
              <div
                className="rounded-2xl p-5 max-w-[360px] w-full"
                style={{
                  background: 'linear-gradient(135deg, rgba(34,197,94,0.08), rgba(16,185,129,0.04))',
                  border: '1px solid rgba(34, 197, 94, 0.15)',
                }}
              >
                <div className="flex justify-between items-center mb-5">
                  <div className="font-bold text-base text-slate-100">New JobBrief</div>
                  <span
                    className="text-xs font-semibold px-2.5 py-1 rounded-full"
                    style={{ background: 'rgba(239, 68, 68, 0.15)', color: '#EF4444' }}
                  >
                    🔥 Hot Lead
                  </span>
                </div>

                {JOBBRIEF_ROWS.map((row, i) => (
                  <div
                    key={row.label}
                    className="flex justify-between py-2.5 text-sm"
                    style={{
                      borderBottom:
                        i < JOBBRIEF_ROWS.length - 1
                          ? '1px solid rgba(255,255,255,0.05)'
                          : 'none',
                    }}
                  >
                    <span className="text-slate-500">{row.label}</span>
                    <span
                      className={`text-right ${
                        row.highlight
                          ? 'text-brand-500 font-semibold'
                          : 'text-slate-200'
                      }`}
                    >
                      {row.value}
                    </span>
                  </div>
                ))}

                <div
                  className="mt-4 p-3.5 rounded-[10px] text-[13px] text-slate-400 leading-relaxed"
                  style={{ background: 'rgba(255,255,255,0.03)' }}
                >
                  <span className="text-slate-500 font-semibold text-[11px] uppercase tracking-[1px]">
                    Opening line
                  </span>
                  <br />
                  &quot;Hi Janet, I&apos;m calling about your chimney scaffolding in
                  Southsea — I see you&apos;ve booked in for 2pm...&quot;
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── FEATURES ───────────────────────────── */}
        <section
          id="features"
          ref={setSectionRef('features')}
          className={`py-20 px-6 ${revealClass('features')}`}
        >
          <div className="mx-auto max-w-[1100px]">
            <p className="text-xs font-semibold tracking-[2.5px] uppercase text-brand-500 mb-3 text-center">
              Everything Included
            </p>
            <h2 className="font-heading text-[clamp(28px,4vw,40px)] font-bold leading-[1.15] text-slate-100 mb-5 text-center">
              Not just a website. A complete{' '}
              <span className="gradient-text">lead generation system.</span>
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 mt-12">
              {FEATURES.map((feature) => (
                <div
                  key={feature.title}
                  className="glass glass-hover p-7 rounded-2xl"
                >
                  <div className="text-[28px] mb-3.5" aria-hidden="true">
                    {feature.icon}
                  </div>
                  <h3 className="font-heading font-semibold text-base text-slate-100 mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-sm text-slate-400 leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── TERRITORY MODEL ────────────────────── */}
        <section
          id="territory"
          ref={setSectionRef('territory')}
          className={`py-20 px-6 ${revealClass('territory')}`}
          style={{ background: 'rgba(255,255,255,0.01)' }}
        >
          <div className="mx-auto max-w-[800px] text-center">
            <p className="text-xs font-semibold tracking-[2.5px] uppercase text-brand-500 mb-3">
              Exclusive Territory Model
            </p>
            <h2 className="font-heading text-[clamp(28px,4vw,40px)] font-bold leading-[1.15] text-slate-100 mb-5">
              Your territory. <span className="gradient-text">Your asset.</span>
            </h2>
            <p className="text-[17px] text-slate-400 leading-relaxed max-w-[640px] mx-auto mb-12">
              Every month you&apos;re with CallFirst, your domain builds more authority
              and becomes harder for competitors to displace. It&apos;s not just a
              website — it&apos;s a compounding digital asset.
            </p>

            <div className="grid grid-cols-2 lg:grid-cols-4 gap-5">
              {TERRITORY_CARDS.map((card) => (
                <div
                  key={card.label}
                  className="glass glow-ring p-7 rounded-2xl text-center"
                >
                  <div className="font-heading text-[32px] font-bold text-brand-500 mb-2">
                    {card.value}
                  </div>
                  <div className="font-semibold text-slate-100 text-sm mb-1">
                    {card.label}
                  </div>
                  <div className="text-[13px] text-slate-500">{card.sub}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── PRICING ────────────────────────────── */}
        <section
          id="pricing"
          ref={setSectionRef('pricing')}
          className={`py-20 px-6 ${revealClass('pricing')}`}
        >
          <div className="mx-auto max-w-[900px] text-center">
            <p className="text-xs font-semibold tracking-[2.5px] uppercase text-brand-500 mb-3">
              Simple Pricing
            </p>
            <h2 className="font-heading text-[clamp(28px,4vw,40px)] font-bold leading-[1.15] text-slate-100 mb-5">
              One job pays for the setup.
              <br />
              <span className="gradient-text">Two jobs a month covers everything.</span>
            </h2>

            <div className="flex gap-6 mt-12 justify-center flex-wrap">
              {PRICING_TIERS.map((tier) => (
                <div
                  key={tier.name}
                  className={`p-9 rounded-[20px] flex-[1_1_320px] max-w-[380px] text-left ${
                    tier.highlighted ? '' : 'glass'
                  }`}
                  style={
                    tier.highlighted
                      ? {
                          background:
                            'linear-gradient(135deg, rgba(34,197,94,0.06), rgba(16,185,129,0.02))',
                          border: '1px solid rgba(34, 197, 94, 0.15)',
                        }
                      : undefined
                  }
                >
                  <div
                    className={`text-[13px] font-semibold uppercase tracking-[1.5px] mb-3 ${
                      tier.highlighted ? 'text-brand-500' : 'text-slate-500'
                    }`}
                  >
                    {tier.name}
                  </div>
                  <div className="flex items-baseline gap-1 mb-5">
                    <span className="font-heading text-[44px] font-bold text-slate-100">
                      {tier.price}
                    </span>
                    <span className="text-slate-500 text-[15px]">{tier.period}</span>
                  </div>
                  <ul className="flex flex-col gap-3" role="list">
                    {tier.features.map((feat) => (
                      <li key={feat} className="flex gap-2.5 text-sm text-slate-400">
                        <span className="text-brand-500 font-bold shrink-0" aria-hidden="true">
                          ✓
                        </span>
                        {feat}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>

            <p className="mt-8 text-sm text-slate-500">
              Optional: AI widget on your existing website — £500 or included when bundled at setup.
            </p>
          </div>
        </section>

        {/* ── NICHES ─────────────────────────────── */}
        <section
          id="niches"
          ref={setSectionRef('niches')}
          className={`py-20 px-6 ${revealClass('niches')}`}
          style={{ background: 'rgba(255,255,255,0.01)' }}
        >
          <div className="mx-auto max-w-[900px] text-center">
            <p className="text-xs font-semibold tracking-[2.5px] uppercase text-brand-500 mb-3">
              Works Across Every Niche
            </p>
            <h2 className="font-heading text-[clamp(28px,4vw,40px)] font-bold leading-[1.15] text-slate-100 mb-5">
              Built for trades.{' '}
              <span className="gradient-text">Ready for any local business.</span>
            </h2>
            <p className="text-base text-slate-400 leading-relaxed max-w-[600px] mx-auto mb-10">
              The AI intake adapts to any niche. Only the three questions change —
              everything else is identical. One system, unlimited verticals.
            </p>

            <div className="flex flex-wrap gap-2.5 justify-center">
              {NICHES.map((niche) => (
                <span
                  key={niche}
                  className="glass px-[18px] py-2 rounded-full text-[13px] text-slate-400 whitespace-nowrap"
                >
                  {niche}
                </span>
              ))}
            </div>
          </div>
        </section>

        {/* ── COMPARISON ─────────────────────────── */}
        <section
          id="compare"
          ref={setSectionRef('compare')}
          className={`py-20 px-6 ${revealClass('compare')}`}
        >
          <div className="mx-auto max-w-[900px]">
            <p className="text-xs font-semibold tracking-[2.5px] uppercase text-brand-500 mb-3 text-center">
              Why CallFirst
            </p>
            <h2 className="font-heading text-[clamp(28px,4vw,40px)] font-bold leading-[1.15] text-slate-100 mb-12 text-center">
              How we compare
            </h2>

            <div className="overflow-x-auto">
              <table className="w-full text-sm min-w-[600px]" style={{ borderCollapse: 'collapse' }}>
                <thead>
                  <tr>
                    <th className="text-left p-3.5 text-slate-500 font-medium" style={{ borderBottom: '1px solid rgba(255,255,255,0.06)' }}>
                      Feature
                    </th>
                    <th className="text-center p-3.5 text-brand-500 font-bold font-heading" style={{ borderBottom: '1px solid rgba(34,197,94,0.2)' }}>
                      CallFirst
                    </th>
                    <th className="text-center p-3.5 text-slate-500 font-medium" style={{ borderBottom: '1px solid rgba(255,255,255,0.06)' }}>
                      Rank &amp; Rent
                    </th>
                    <th className="text-center p-3.5 text-slate-500 font-medium" style={{ borderBottom: '1px solid rgba(255,255,255,0.06)' }}>
                      Directories
                    </th>
                    <th className="text-center p-3.5 text-slate-500 font-medium" style={{ borderBottom: '1px solid rgba(255,255,255,0.06)' }}>
                      Web Agency
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {COMPARISON_ROWS.map((row) => (
                    <tr key={row.feature}>
                      <td className="text-left p-3 text-slate-400" style={{ borderBottom: '1px solid rgba(255,255,255,0.03)' }}>
                        {row.feature}
                      </td>
                      {([row.callfirst, row.rankRent, row.directories, row.webAgency] as const).map(
                        (cell, j) => (
                          <td
                            key={j}
                            className="text-center p-3"
                            style={{
                              borderBottom: '1px solid rgba(255,255,255,0.03)',
                              color:
                                j === 0
                                  ? '#22C55E'
                                  : cell === '✓'
                                    ? '#94A3B8'
                                    : cell === '✕'
                                      ? '#475569'
                                      : '#94A3B8',
                              fontWeight: j === 0 ? 600 : 400,
                              background: j === 0 ? 'rgba(34,197,94,0.03)' : 'transparent',
                            }}
                          >
                            {cell}
                          </td>
                        )
                      )}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* ── FAQ ─────────────────────────────────── */}
        <section
          id="faq"
          ref={setSectionRef('faq')}
          className={`py-20 px-6 ${revealClass('faq')}`}
          style={{ background: 'rgba(255,255,255,0.01)' }}
        >
          <div className="mx-auto max-w-[760px]">
            <p className="text-xs font-semibold tracking-[2.5px] uppercase text-brand-500 mb-3 text-center">
              FAQ
            </p>
            <h2 className="font-heading text-[clamp(28px,4vw,40px)] font-bold leading-[1.15] text-slate-100 mb-12 text-center">
              Common questions
            </h2>

            <div role="list">
              {FAQS.map((faq, i) => (
                <div
                  key={i}
                  role="listitem"
                  style={{ borderBottom: '1px solid rgba(255,255,255,0.06)' }}
                >
                  <button
                    className="w-full bg-transparent border-none text-slate-100 text-base font-medium text-left py-5 cursor-pointer flex justify-between items-center gap-4"
                    onClick={() => handleFaqToggle(i)}
                    aria-expanded={activeFaq === i}
                    aria-controls={`faq-answer-${i}`}
                  >
                    <span>{faq.question}</span>
                    <span
                      className="text-brand-500 text-xl font-light shrink-0 transition-transform duration-200"
                      style={{
                        transform: activeFaq === i ? 'rotate(45deg)' : 'rotate(0deg)',
                      }}
                      aria-hidden="true"
                    >
                      +
                    </span>
                  </button>
                  {activeFaq === i && (
                    <div
                      id={`faq-answer-${i}`}
                      className="text-slate-400 text-[15px] leading-relaxed pb-5"
                      role="region"
                    >
                      {faq.answer}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── CTA + SMARTSUITE FORM ──────────────── */}
        <section
          id="cta"
          ref={setSectionRef('cta')}
          className={`py-[100px] px-6 text-center ${revealClass('cta')}`}
          style={{
            background: 'linear-gradient(180deg, transparent, rgba(34,197,94,0.03))',
          }}
        >
          <div className="mx-auto max-w-[700px]">
            <h2 className="font-heading text-[clamp(28px,4vw,40px)] font-bold leading-[1.15] text-slate-100 mb-5">
              Ready to be the one they call first?
            </h2>
            <p className="text-[17px] text-slate-400 leading-relaxed mb-10">
              Tell us your trade and area. We&apos;ll show you exactly what your
              CallFirst site looks like — on your phone, in under 5 minutes.
            </p>

            <div
              className="glass rounded-[20px] overflow-hidden max-w-[600px] mx-auto"
            >
              <iframe
                src="https://app.smartsuite.com/form/sba974gi/1pfooRmSPQ?header=false"
                width="100%"
                height={600}
                frameBorder={0}
                title="Book a CallFirst demo"
                loading="lazy"
                className="block border-none rounded-[20px]"
              />
            </div>

            <p className="mt-5 text-[13px] text-slate-600">
              No obligation. No credit card. We&apos;ll call you within 24 hours.
            </p>
          </div>
        </section>

        {/* ── SEO CONTENT (below fold, crawlable) ── */}
        <section className="py-20 px-6" style={{ borderTop: '1px solid rgba(255,255,255,0.03)' }}>
          <article className="mx-auto max-w-[760px]">
            <h2 className="font-heading text-[28px] font-bold text-slate-100 mb-6">
              AI Lead Generation for UK Trades and Local Businesses
            </h2>

            <div className="text-[15px] text-slate-400 leading-[1.85] space-y-5">
              <p>
                The way local businesses generate leads in the UK is fundamentally broken.
                Most trade contractors and service businesses rely on word of mouth, tired
                directory listings, and brochure websites that generate nothing. A customer
                searches, finds a phone number, calls, gets no answer because the business
                owner is working, and moves on to the next result. That lead is lost forever
                — and the business never even knew it existed.
              </p>

              <h3 className="font-heading text-xl font-semibold text-slate-200 !mt-8 !mb-3">
                What Is AI Lead Generation?
              </h3>
              <p>
                AI lead generation replaces the traditional contact form with an intelligent
                conversational agent that qualifies leads in real time. Instead of collecting
                a name and phone number — which tells the business nothing about the job —
                an AI intake agent has a brief conversation with the customer, scopes the work,
                provides an instant price estimate, and books a confirmed callback time. The
                business receives a structured job brief rather than a generic enquiry.
              </p>

              <h3 className="font-heading text-xl font-semibold text-slate-200 !mt-8 !mb-3">
                Why the 60-Second Response Changes Everything
              </h3>
              <p>
                Research consistently shows that responding to a lead within five minutes makes
                you twenty-one times more likely to qualify that lead compared to responding
                after thirty minutes. CallFirst responds in sixty seconds — not with a generic
                autoresponder, but with a personalised WhatsApp or SMS message in the business&apos;s
                own name confirming the customer&apos;s callback appointment. The customer feels
                attended to immediately. They stop searching. The lead is locked.
              </p>

              <h3 className="font-heading text-xl font-semibold text-slate-200 !mt-8 !mb-3">
                The Exclusive Territory Model
              </h3>
              <p>
                Unlike directory sites and shared lead platforms where multiple businesses
                compete for the same enquiry, CallFirst operates on an exclusive territory
                model. One site is built per trade per area. If a scaffolding contractor in
                Portsmouth signs up, no other scaffolder in Portsmouth can ever have a CallFirst
                site. The territory is protected permanently, creating a genuine competitive
                advantage that increases in value over time as the domain builds authority.
              </p>

              <h3 className="font-heading text-xl font-semibold text-slate-200 !mt-8 !mb-3">
                How the JobBrief System Works
              </h3>
              <p>
                Every enquiry generates a structured JobBrief delivered directly to the business
                owner&apos;s phone. This includes the job type and scope, an estimated value bracket,
                a lead temperature score, the customer&apos;s confirmed callback time, and a suggested
                opening line for the conversation. The business owner isn&apos;t making a cold call —
                they&apos;re calling a pre-qualified prospect who&apos;s expecting them and whose job has
                already been scoped.
              </p>

              <h3 className="font-heading text-xl font-semibold text-slate-200 !mt-8 !mb-3">
                Organic SEO Without Ad Spend
              </h3>
              <p>
                Every CallFirst site is built on organic search engine optimisation. Before a
                domain is purchased, thorough keyword research identifies exact monthly search
                volumes, competitor domain authority, and the specific phrases customers use when
                looking for that trade in that area. The site is then engineered from the ground
                up to rank for those terms — with proper local schema markup, area pages for
                surrounding towns, and technical SEO built into the foundation. No Google Ads
                budget required.
              </p>

              <h3 className="font-heading text-xl font-semibold text-slate-200 !mt-8 !mb-3">
                Pipeline Management for Business Owners
              </h3>
              <p>
                CallFirst includes built-in pipeline management tools designed for business
                owners who aren&apos;t marketers. A simple dashboard shows all leads with their
                current status. Automated follow-up messages are sent if the owner hasn&apos;t
                responded within twenty-four hours. Dead leads are reactivated after six weeks
                with a single text message. And when a job is marked as completed, the system
                automatically sends the customer a Google review request — building the business&apos;s
                local SEO profile passively over time.
              </p>

              <h3 className="font-heading text-xl font-semibold text-slate-200 !mt-8 !mb-3">
                A Compounding Digital Asset
              </h3>
              <p>
                Unlike a monthly advertising campaign that stops generating results the moment
                you stop paying, a CallFirst site compounds in value. Every month the domain
                builds more authority. Every Google review improves its ranking signals. Every
                year the site becomes harder for competitors to displace. And when a business
                owner eventually retires or sells their business, the territory has real resale
                value — CallFirst facilitates the sale and splits the proceeds fifty-fifty with
                the outgoing client.
              </p>

              <h3 className="font-heading text-xl font-semibold text-slate-200 !mt-8 !mb-3">
                Cross-Niche Adaptability
              </h3>
              <p>
                While CallFirst was originally designed for UK trade contractors — scaffolders,
                roofers, groundworkers, electricians, plumbers — the system is entirely niche
                agnostic. The AI intake agent&apos;s conversational questions are the only element
                that changes between verticals. The same technology serves dentists, veterinary
                practices, solicitors, driving instructors, estate agents, mortgage brokers,
                wedding venues, removal companies, and any other local service business where
                customers search online and expect a fast response.
              </p>

              <p>
                Each territory represents a permanent revenue stream within the CallFirst
                network. Every town and every trade vertical is a separate territory available
                for one exclusive client. The model scales across the entire United Kingdom
                without any additional infrastructure cost per deployment — creating a network
                effect where the aggregate data across all territories improves the accuracy
                of price estimates and seasonal intelligence for every individual client.
              </p>
            </div>
          </article>
        </section>
      </main>

      {/* ── FOOTER ───────────────────────────────── */}
      <footer
  className="py-12 px-6"
  style={{ borderTop: '1px solid rgba(255,255,255,0.05)' }}
>
  <div className="mx-auto max-w-[1200px] flex justify-between items-center flex-wrap gap-4">
    <div>
      <div className="font-heading text-xl font-bold mb-1.5">
        <span className="text-slate-100">Call</span>
        <span className="text-brand-500">First</span>
      </div>
      <div className="text-[13px] text-slate-600">
        AI-powered lead generation for UK businesses.
      </div>
    </div>
    <div className="flex flex-col items-end gap-2">
      <div className="flex gap-4 text-[13px]">
        <a href="/privacy.html" className="text-slate-500 hover:text-slate-300 transition-colors">Privacy Policy</a>
        <a href="/terms.html" className="text-slate-500 hover:text-slate-300 transition-colors">Terms of Service</a>
      </div>
      <div className="text-[13px] text-slate-600">
        © {new Date().getFullYear()} CallFirst. All rights reserved.
      </div>
    </div>
  </div>
</footer>
    </>
  )
}
