import { Metadata } from 'next';

export const siteConfig = {
  name: 'MINERVA',
  title: 'MINERVA - AI-Powered Digital Twin for Sustainable Manufacturing',
  description: 'MINERVA delivers real-time Digital Twin AI Optimization for industrial manufacturing. Winner of 2025 Hackathon powered by Ericsson & Qualcomm. Transform your operations with energy efficiency, predictive analytics, and smart manufacturing solutions.',
  url: process.env.NEXT_PUBLIC_SITE_URL || 'https://minerva-energy.com',
  author: 'MINERVA Team',
  keywords: [
    'Digital Twin',
    'AI Manufacturing',
    'Energy Optimization',
    'Industrial AI',
    'Sustainable Manufacturing',
    'Smart Factory',
    'Predictive Maintenance',
    'Industry 4.0',
    '5G Manufacturing',
    'IoT Industrial',
    'Energy Management',
    'Manufacturing AI',
  ],
  social: {
    twitter: '@minervaenergy',
    linkedin: 'company/minerva-energy',
  },
};

export function generateMetadata({
  title,
  description,
  image = '/og-image.jpg',
  noIndex = false,
}: {
  title?: string;
  description?: string;
  image?: string;
  noIndex?: boolean;
}): Metadata {
  const pageTitle = title ? `${title} | ${siteConfig.name}` : siteConfig.title;
  const pageDescription = description || siteConfig.description;

  return {
    title: pageTitle,
    description: pageDescription,
    keywords: siteConfig.keywords,
    authors: [{ name: siteConfig.author }],
    creator: siteConfig.author,
    publisher: siteConfig.name,
    robots: noIndex ? 'noindex, nofollow' : 'index, follow',

    // OpenGraph
    openGraph: {
      type: 'website',
      locale: 'en_US',
      url: siteConfig.url,
      title: pageTitle,
      description: pageDescription,
      siteName: siteConfig.name,
      images: [
        {
          url: `${siteConfig.url}${image}`,
          width: 1200,
          height: 630,
          alt: pageTitle,
        },
      ],
    },

    // Twitter
    twitter: {
      card: 'summary_large_image',
      title: pageTitle,
      description: pageDescription,
      images: [`${siteConfig.url}${image}`],
      creator: siteConfig.social.twitter,
    },

    // Additional meta tags
    alternates: {
      canonical: siteConfig.url,
    },

    // Verification (add your codes when available)
    verification: {
      google: process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION,
      // yandex: '',
      // other: {},
    },
  };
}

/**
 * Structured data for organization (JSON-LD)
 */
export function getOrganizationSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: siteConfig.name,
    description: siteConfig.description,
    url: siteConfig.url,
    logo: `${siteConfig.url}/logo/MINERVA%20logo.png`,
    email: 'minervaenergyid@gmail.com',
    telephone: '+62-822-1725-7007',
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'Jl. Telekomunikasi No. 1, Terusan Buahbatu, Bojongsoang',
      addressLocality: 'Bandung',
      addressRegion: 'Jawa Barat',
      postalCode: '40257',
      addressCountry: 'ID',
    },
    sameAs: [
      // Add your social media URLs here
      'https://linkedin.com/company/minerva-energy',
      'https://twitter.com/minervaenergy',
    ],
  };
}

/**
 * Structured data for product (JSON-LD)
 */
export function getProductSchema(product: {
  id: number;
  title: string;
  oneLiner: string;
  icon: string;
}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Product',
    name: product.title,
    description: product.oneLiner,
    image: `${siteConfig.url}${product.icon}`,
    brand: {
      '@type': 'Organization',
      name: siteConfig.name,
    },
    offers: {
      '@type': 'Offer',
      availability: 'https://schema.org/InStock',
      url: `${siteConfig.url}/product/${product.id}`,
    },
  };
}
