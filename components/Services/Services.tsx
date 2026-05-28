import styles from './Services.module.scss';

const services = [
  {
    name: 'Branding and identity',
    tagline: 'Making your business stand out.',
    description:
      'A strong brand identity is how your business becomes trusted and memorable. I create complete brand identities — logo suites, colour palettes, typography systems, and brand guidelines — built around your business goals. Every element is designed to attract the right clients and give you a consistent, professional presence everywhere you show up. Most branding projects are delivered within 2–3 weeks.',
  },
  {
    name: 'Web design and development',
    tagline: 'A website tailored to your needs.',
    description:
      'Custom websites designed and built to fit your brand and convert visitors into clients. I work with a range of platforms depending on your needs — from content-managed sites on WordPress or Webflow to bespoke builds using Next.js — all delivered mobile-responsive and SEO-optimised from day one. Your site will look great, load fast, and be easy to manage. Most projects are delivered within 4–6 weeks.',
  },
  {
    name: 'Digital design',
    tagline: 'Show up, everywhere.',
    description:
      'On-brand digital assets that help you show up with clarity wherever your audience is. From social media graphics and email templates to launch visuals and marketing materials — every piece is aligned with your brand identity and designed to increase visibility and drive engagement. Offered as one-off projects or as an ongoing design partnership.',
  },
];

export default function Services() {
  return (
    <section id="services" className={styles.services}>
      <h2 className={styles.heading}>What I Offer</h2>

      <div className={styles.grid}>
        {services.map((s) => (
          <article key={s.name} className={styles.card}>
            <p className={styles.description}>{s.description}</p>
            <div className={styles.footer}>
              <h3 className={styles.name}>{s.name}</h3>
              <p className={styles.tagline}>{s.tagline}</p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
