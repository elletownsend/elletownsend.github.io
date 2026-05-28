// Server component — no 'use client' needed
export default function JsonLd() {
  const schema = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': ['Person', 'LocalBusiness'],
        '@id': 'https://elletownsend.co.uk/#elle',
        name: 'Elle Townsend',
        url: 'https://elletownsend.co.uk',
        description:
          'Freelance web designer and developer based in the UK, specialising in websites, brand identity, and digital design for small and medium-sized businesses.',
        email: 'townsend.e.b1@gmail.com',
        sameAs: ['https://instagram.com/builtbyelle'],
        address: {
          '@type': 'PostalAddress',
          addressCountry: 'GB',
        },
        knowsAbout: [
          'Web Design',
          'Web Development',
          'Brand Identity Design',
          'Logo Design',
          'Digital Design',
          'Social Media Design',
        ],
        hasOfferCatalog: {
          '@type': 'OfferCatalog',
          name: 'Design & Development Services',
          itemListElement: [
            {
              '@type': 'Offer',
              itemOffered: {
                '@type': 'Service',
                name: 'Branding and Identity Design',
                description:
                  'Strategic brand identities including logo suites, colour palettes, typography systems, and brand guidelines. Delivered in 2–3 weeks.',
              },
            },
            {
              '@type': 'Offer',
              itemOffered: {
                '@type': 'Service',
                name: 'Web Design and Development',
                description:
                  'Custom, mobile-responsive, SEO-optimised websites built on Framer, Squarespace, Webflow, or Next.js — tailored to your brand and goals. Most projects delivered in 4–6 weeks.',
              },
            },
            {
              '@type': 'Offer',
              itemOffered: {
                '@type': 'Service',
                name: 'Digital Design',
                description:
                  'Social media graphics, marketing materials, email templates, and launch visuals aligned with your brand identity.',
              },
            },
          ],
        },
      },
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
