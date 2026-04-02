import { Helmet } from 'react-helmet-async'
import CallFirstHomepage from '@/components/CallFirstHomepage'
import { STRUCTURED_DATA } from '@/data/content'

const PAGE_TITLE = 'CallFirst | Never Miss a Lead Again | UK Trades'
const PAGE_DESCRIPTION =
  'AI-powered lead generation that responds to your customers in 60 seconds. Exclusive territory. No ad spend. One trade, one area, yours forever. From £199/month.'
const CANONICAL_URL = 'https://callfirst.co.uk'
const OG_IMAGE = 'https://callfirst.co.uk/og-callfirst.jpg'

export default function HomePage(): JSX.Element {
  return (
    <>
      <Helmet>
        {/* Point 1: Title Tag (55-60 chars) */}
        <title>{PAGE_TITLE}</title>

        {/* Point 2: Meta Description (150-160 chars) */}
        <meta name="description" content={PAGE_DESCRIPTION} />

        {/* Point 3: Canonical URL */}
        <link rel="canonical" href={CANONICAL_URL} />

        {/* Point 4: Robots Meta */}
        <meta
          name="robots"
          content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1"
        />

        {/* Point 5: Viewport Meta (set in index.html, reinforced here) */}
        <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=5.0" />

        {/* Point 6: OG Title */}
        <meta property="og:type" content="website" />
        <meta property="og:title" content={PAGE_TITLE} />
        <meta property="og:url" content={CANONICAL_URL} />
        <meta property="og:site_name" content="CallFirst" />

        {/* Point 7: OG Description */}
        <meta property="og:description" content={PAGE_DESCRIPTION} />

        {/* Point 8: OG Image (1200x630px) */}
        <meta property="og:image" content={OG_IMAGE} />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:image:alt" content="CallFirst — AI Lead Generation for UK Trades" />

        {/* Point 9: Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={PAGE_TITLE} />
        <meta name="twitter:description" content={PAGE_DESCRIPTION} />
        <meta name="twitter:image" content={OG_IMAGE} />

        {/* Point 10: Author & Brand Signals */}
        <meta name="author" content="CallFirst" />
        <meta name="publisher" content="CallFirst" />

        {/* Language */}
        <html lang="en-GB" />

        {/* Point 11: All 8 JSON-LD Schemas */}
        <script type="application/ld+json">
          {JSON.stringify(STRUCTURED_DATA)}
        </script>
      </Helmet>

      {/* Points 12-15 are handled within the component:
        - Point 12: Content structure (H1, H2-H4, 2500+ words) ✓
        - Point 13: 10 FAQ blocks with schema ✓
        - Point 14: Quick answer box via speakable schema ✓
        - Point 15: Internal links (added as site grows) */}

      <CallFirstHomepage />
    </>
  )
}
