import styles from './Services.module.scss';

const services = [
  {
    name: 'Branding and identity',
    tagline: 'Identity that holds together.',
    description:
      'Brand identity is work I really enjoy. I build complete systems — logo suites, colour palettes, typography, and brand guidelines — designed to hold together wherever they show up, from a business card to a social post. The goal is consistency and clarity, not just something that looks nice.',
  },
  {
    name: 'Web design and development',
    tagline: 'Websites that actually work.',
    description:
      'I design and build websites that fit the brand properly — not just visually, but in how they\'re structured and how they work. I\'m comfortable across Framer, Squarespace, Webflow, and Next.js, so the platform choice comes down to what\'s actually right for the project. Everything comes out mobile-responsive and SEO-considered from the start.',
  },
  {
    name: 'Digital design',
    tagline: 'Show up, everywhere.',
    description:
      'Social graphics, email templates, launch visuals, marketing materials — the assets that keep a brand looking consistent in everyday use. I enjoy this kind of work. It\'s detail-oriented, and doing it well is what makes everything else feel more intentional and put-together.',
  },
];

export default function Services() {
  return (
    <section id="services" className={styles.services}>
      <h2 className={styles.heading}>What I Do</h2>

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
