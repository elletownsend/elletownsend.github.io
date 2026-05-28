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
            I&rsquo;m a creative at heart, weaving digital masterpieces for brands of all
            sizes. From small businesses to established brands, I help bring your vision
            to life through strategic design. I work with clients across various industries,
            delivering designs that inspire, engage, and create results.
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
