'use client';

import dynamic from 'next/dynamic';
import styles from './Hero.module.scss';

const SculptureViewer = dynamic(
  () => import('../SculptureViewer/SculptureViewer'),
  {
    ssr: false,
    loading: () => <div className={styles.sculptureLoading} aria-hidden="true" />,
  }
);

export default function Hero() {
  return (
    <section id="hero" className={styles.hero}>
      <div className={styles.content}>
        <p className={styles.nameTag}>
          <span>Elle Townsend,</span>
          <span>Web Designer &amp; Developer</span>
        </p>

        <h1 className={styles.headline}>
          Gorgeous<br />
          websites,<br />
          tailored to<br />
          <em>
            your business
            <span className={styles.cursor} aria-hidden="true">_</span>
          </em>
        </h1>
      </div>

      <div className={styles.sculptureWrapper}>
        <SculptureViewer />
      </div>
    </section>
  );
}
