export const EMAIL = 'e.nosazena@gmail.com'
export const MAILTO = `mailto:${EMAIL}?subject=${encodeURIComponent("Let's talk")}`

export const workedWith = [
  'Apple',
  'Tommy John',
  "BJ's Wholesale",
  'Caravan Wellness',
  'Nuts.com',
  'Slice',
  'Omnicom',
]

export const stack = [
  { label: 'Languages', items: ['JavaScript', 'Node', 'CSS', 'Tailwind CSS', 'HTML'] },
  { label: 'Frameworks', items: ['React.js', 'Next.js', 'Vue'] },
  { label: 'CMS', items: ['WordPress', 'Shopify', 'Contentful', 'Sanity', 'Bloomreach', 'and more'] },
  { label: 'Marketing', items: ['Klaviyo', 'Google Ads', 'Optimizely', 'VWO', 'Hotjar', 'Yotpo'] },
]

export const principles = [
  {
    title: 'Fast by default',
    text: 'Optimized images, lean JavaScript and clean markup, so pages load quickly and rank well.',
  },
  {
    title: 'Fits your stack',
    text: 'I work inside existing codebases, CMSs and design systems, and alongside product and engineering teams.',
  },
  {
    title: 'Clear to work with',
    text: 'Plain updates, realistic timelines and a site your team can actually run after launch.',
  },
]

export const services = [
  {
    title: 'Custom websites',
    text: 'Fast, mobile friendly sites for any industry, built in React and Next.js with CSS and Tailwind.',
  },
  {
    title: 'Ecommerce',
    text: 'Shopify stores built end to end, from theme and product setup to a checkout that converts.',
  },
  {
    title: 'CMS builds',
    text: 'Content setups in WordPress, Contentful, Sanity and more, so your team can publish without a developer.',
  },
  {
    title: 'Landing pages and support',
    text: 'Campaign pages built to convert, plus ongoing maintenance to keep your site fast and current.',
  },
]

const img = (file) => `/work/${file}.webp`

export const groups = [
  {
    id: 'client',
    title: 'Client projects',
    items: [
      {
        name: 'Caravan Wellness',
        href: 'https://caravanwellness.com/',
        image: img('caravan'),
        tag: 'Design and build',
        text: 'The main site for Caravan’s library of expert wellness content.',
      },
      {
        name: 'Caravan Licensing',
        href: 'https://license.caravanwellness.com/',
        image: img('caravan-license'),
        tag: 'Design and build',
        text: 'Figma wireframes to production for the searchable catalog where partners browse and license wellness content.',
      },
      {
        name: 'Wellbeing',
        href: 'https://app.allinonewellbeing.com/',
        image: img('allinone'),
        tag: 'Design and build',
        text: 'Updated the wellbeing experience with new programs, tools, and a wellness AI.',
      },
      {
        name: 'Apple',
        href: 'https://apple.com/au',
        image: '/apple.webp',
        tag: 'Localization',
        text: 'Created and built localized Apple.com pages for Australia, New Zealand, South East Asia, Canada and other regions.',
      },
      {
        name: 'Circa',
        href: 'https://shop.circajewels.com/',
        image: '/circa.webp',
        tag: 'Shopify',
        text: 'Updated the home page and built landing pages, emails and new features for this Shopify store.',
      },
      {
        name: 'The Ever Cake',
        href: 'https://www.theevercake.com',
        image: '/cake.webp',
        tag: 'Shopify',
        text: 'Designed in Figma and built through to production on Shopify, with ongoing updates as requests come in.',
      },
    ],
  },
  {
    id: 'brand',
    title: 'My own brand',
    layout: 'feature',
    items: [
      {
        name: 'Chili B.',
        href: 'https://chilibeverage.com/',
        image: img('chili-b'),
        tag: 'Founder',
        text: 'My own sparkling beverage brand. I designed it in Figma and built the site through to production.',
      },
    ],
  },
  {
    id: 'teams',
    title: 'Teams I’ve worked with',
    items: [
      {
        name: 'Tommy John',
        href: 'https://tommyjohn.com/',
        image: img('tommy-john'),
        tag: 'Engineering team',
        text: 'Built pages, redesigns and features for this direct to consumer apparel brand.',
      },
      {
        name: 'BJ’s Wholesale Club',
        href: 'https://bjs.com/',
        image: img('bjs'),
        tag: 'Engineering team',
        text: 'Migrated and built pages and features for the ecommerce site of this membership big box store.',
      },
    ],
  },
  {
    id: 'contrib',
    title: 'Projects I contributed to',
    items: [
      {
        name: 'Nuts.com',
        href: 'https://nuts.com/',
        image: img('nuts'),
        tag: 'Contributor',
        text: 'Built features, landing pages and emails for this online snack and pantry retailer.',
      },
      {
        name: 'Slice',
        href: 'https://SliceLife.com/',
        image: img('slice'),
        tag: 'Contributor',
        text: 'Built pages and features for the ordering platform that helps independent pizzerias compete with the big chains.',
      },
      {
        name: 'Omni by Omnicom',
        href: 'https://www.omc.com/omni/',
        image: img('omni'),
        tag: 'Contributor',
        text: 'Developed and refined reusable components for the Omnicom’s AI.',
      },
    ],
  },
  {
    id: 'archive',
    title: 'Campaigns',
    items: [
      {
        name: 'All33',
        image: '/all33Screen.webp',
        tag: 'Archived',
        text: 'A React and Netlify landing page.',
      },
      {
        name: 'Sagewell',
        image: '/sagewellScreen.webp',
        tag: 'Archived',
        text: 'A campaign about retirement planning for teachers.',
      },
      {
        name: 'Pearl Certification',
        image: '/pearlScreen.webp',
        tag: 'Archived',
        text: 'A guided, multi step form that tells visitors whether they qualify for financing.',
      },
    ],
  },
]

// A short list for the paid traffic landing page
const all = groups.flatMap((g) => g.items)
export const featured = ['Caravan Wellness', 'Chili B.', 'Tommy John', 'BJ’s Wholesale Club', 'Nuts.com', 'Omni by Omnicom']
  .map((name) => all.find((i) => i.name === name))

export const about = {
  headshot: '/me.jpg',
  alt: 'Portrait of Nosazena',
  title: 'Hi, I’m Zena.',
  text: 'A software engineer with an eye for design and a mind for business. I build digital experiences from wireframe to launch day and beyond, mixing clean code and strategy to deliver products that perform. These two projects offer a glimpse into how I work.',
}

export const caseStudies = [
  {
    id: 'circa',
    name: 'Circa',
    title: 'Circa: Building a faster, conversion focused digital storefront.',
    href: 'https://shop.circajewels.com/',
    image: '/circa.webp',
    tags: ['Shopify', 'eCommerce', 'Web Development', 'CRO', 'New features'],
    intro:
      'A performance driven eCommerce experience designed to reduce friction across the customer journey, improve product discovery and support scalable revenue growth.',
    did: [
      'Developed a responsive, mobile first storefront.',
      'Optimized site performance, asset delivery and rendering.',
      'Streamlined product discovery, navigation and purchase flows',
      'Built reusable components to accelerate future feature releases.',
      'Integrated analytics and marketing tools to support data-driven optimization.',
      'Increased eCommerce conversion rates by 28%, from 2.1% to 2.69%, through an optimized shopping experience.',
      'Reduced page load times by 54%, from 4.8 seconds to 2.2 seconds, improving overall site performance.',
      'Email marketing initiatives accounted for 14% of total online revenue.'
    ],
    takeaway:
      'Delivered a scalable digital storefront designed to improve conversion, accelerate marketing initiatives and create a stronger foundation for long term eCommerce growth.',
  },
  {
    id: 'chili-b',
    name: 'Chili B.',
    title: 'Chili B.: Taking a functional beverage brand from concept to commerce.',
    href: 'https://chilibeverage.com/',
    image: '/work/chili-b-tall.webp',
    tags: ['DTC', 'CPG', 'Shopify', '0-1 Product Development'],
    intro:
      'Building the digital infrastructure for an emerging consumer packaged goods brand, connecting brand storytelling, customer acquisition, eCommerce and multichannel distribution.',
    did: [
      'Designed and developed a custom Shopify eCommerce experience.',
      'Established the brand digital identity and product storytelling',
      'Optimized product pages and customer journeys.',
      'Developed customer acquisition and retention strategies across digital channels.',
      'Expanded the eCommerce ecosystem to include Amazon',
      'Achieved a 3.2% eCommerce conversion rate through a streamlined, mobile first shopping experience.',
      'Achieved a 1.8 second Largest Contentful Paint (LCP), delivering a fast and responsive storefront.'
    ],
    takeaway:
      'Took a consumer product from concept to commercial availability, establishing distribution across 50+ independent New York City retailers and expanding into direct to consumer and marketplace sales.',
  },
]
