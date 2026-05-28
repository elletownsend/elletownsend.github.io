import Image from 'next/image';
import styles from './Contact.module.scss';

export default function Contact() {
  return (
    <section id="contact" className={styles.contact}>
      {/* Full-bleed background photo */}
      <Image
        src="/images/palace-interior.png"
        alt=""
        fill
        sizes="100vw"
        style={{ objectFit: 'cover', objectPosition: 'center' }}
        aria-hidden="true"
      />

      {/* Dark overlay */}
      <div className={styles.overlay} aria-hidden="true" />

      {/* Torn architecture collage — top-right corner */}
      <div className={styles.tornArchitecture} aria-hidden="true">
        <Image
          src="/images/torn-architecture.png"
          alt=""
          fill
          style={{ objectFit: 'contain', objectPosition: 'top left' }}
        />
      </div>

      {/* Content */}
      <div className={styles.content}>
        <h2 className={styles.heading}>Let&rsquo;s get to work</h2>

        <div className={styles.links}>
          <a
            href="https://instagram.com/builtbyelle"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.link}
          >
            @builtbyelle
          </a>
          <a
            href="mailto:townsend.e.b1@gmail.com"
            className={styles.link}
          >
            Email me
          </a>
        </div>
      </div>
    </section>
  );
}
