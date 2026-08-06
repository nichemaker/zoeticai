/** Shared site config for layout, nav, and schema. Update before publish. */
export const site = {
  name: 'AI Directory',
  tagline: 'Discover, compare, and choose AI tools and agents.',
  description:
    'A curated directory of AI agents, tools, and platforms — browse categories, compare options, and find the right fit.',
  url: 'https://example.com',
  email: 'hello@example.com',
  /** External CTA for custom / production agent work */
  cta: {
    label: 'Need production AI agents built?',
    href: 'https://example.com/contact',
  },
} as const;

export type NavLink = {
  href: string;
  label: string;
};

export const primaryNav: NavLink[] = [
  { href: '/', label: 'Home' },
  { href: '/platforms/', label: 'Platforms' },
  { href: '/categories/', label: 'Categories' },
  { href: '/compare/', label: 'Compare' },
  { href: '/guides/', label: 'Guides' },
];

export type FooterGroup = {
  heading: string;
  links: NavLink[];
};

export const footerGroups: FooterGroup[] = [
  {
    heading: 'Explore',
    links: [
      { href: '/platforms/', label: 'All platforms' },
      { href: '/categories/', label: 'Categories' },
      { href: '/compare/', label: 'Compare' },
      { href: '/guides/', label: 'Guides' },
      { href: '/submit/', label: 'Submit a listing' },
    ],
  },
  {
    heading: 'Resources',
    links: [
      { href: '/guides/', label: 'Guides' },
      { href: '/blog/', label: 'Blog' },
      { href: '/changelog/', label: 'Changelog' },
    ],
  },
  {
    heading: 'Company',
    links: [
      { href: '/about/', label: 'About' },
      { href: '/contact/', label: 'Contact' },
      { href: '/privacy/', label: 'Privacy' },
      { href: '/terms/', label: 'Terms' },
    ],
  },
];
