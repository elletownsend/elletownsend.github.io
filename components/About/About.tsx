import Image from 'next/image';
import styles from './About.module.scss';

export default function About() {
  return (
    <section id="about" className={styles.about}>
      {/* ── Left: editorial photo ── */}
      <div className={styles.imageCol}>
        <Image
          src="/images/palace-interior-2.webp"
          alt="Ornate palace interior"
          fill
          sizes="(max-width: 768px) 100vw, 45vw"
          style={{ objectFit: 'cover', objectPosition: 'center top' }}
          priority
        />
      </div>

      {/* ── Right: bio text ── */}
      <div className={styles.contentCol}>
        {/* Visually hidden H2 preserves heading hierarchy (H1 is in Hero) */}
        <h2 className="sr-only">About Elle Townsend</h2>

        <div className={styles.block}>
          <h3 className={styles.label}>Bio</h3>
          <p className={styles.body}>
            I&rsquo;m a designer and developer with a genuine interest in both the visual
            and technical side of things. I&rsquo;ve worked with small businesses and growing
            brands across different industries — usually when they need their visual presence
            to properly reflect who they are. I care about the craft, and it shows in the details.
          </p>
        </div>

        <div className={styles.block}>
          <h3 className={styles.label}>What I Do Best</h3>
          <ul className={styles.list}>
            <li>Brand identity</li>
            <li>Web design</li>
            <li>Web development</li>
            <li>Digital design</li>
          </ul>
        </div>
      </div>

      {/* ── Collage overlays ── */}
      <div className={styles.tornBookshelf} aria-hidden="true">
        <Image
          src="/images/torn-bookshelf.webp"
          alt=""
          fill
          style={{ objectFit: 'fill' }}
        />
      </div>

    </section>
  );
}
