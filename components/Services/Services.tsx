import styles from './Services.module.scss';

const services = [
  {
    name: 'Branding and identity',
    tagline: 'Making your business stand out.',
    description:
      'Branding and identity design is how your business becomes trusted and memorable. I create strategic brand identities, including logos, visual systems, and cohesive brand guidelines. Designed with growth and conversion in mind, your brand will stand out above the rest, and attract all the right clients.',
  },
  {
    name: 'Web design and development',
    tagline: 'A website tailored to your needs.',
    description:
      'Web design and development tailored to your business goals. I create custom, high-performing websites that are modern, mobile-responsive, and SEO-optimised. Built for both beauty and functionality, your website will reflect your brand, engage your audience, and convert visitors into valuable clients.',
  },
  {
    name: 'Digital design',
    tagline: 'Show up, everywhere.',
    description:
      'Digital design that helps your business show up everywhere with clarity and consistency. From social media graphics and marketing materials, to email and launch visuals. Every design is aligned with your brand identity and created to increase visibility, strengthen recognition, and support your growth online.',
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
