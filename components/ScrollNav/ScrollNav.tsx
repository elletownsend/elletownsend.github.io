'use client';

import { useEffect, useState } from 'react';
import styles from './ScrollNav.module.scss';

const sections = [
  { id: 'hero',     label: 'Home' },
  { id: 'about',    label: 'About' },
  { id: 'services', label: 'Services' },
  { id: 'contact',  label: 'Contact' },
];

export default function ScrollNav() {
  const [active, setActive] = useState('hero');

  useEffect(() => {
    const observers: IntersectionObserver[] = [];

    sections.forEach(({ id }) => {
      const el = document.getElementById(id);
      if (!el) return;

      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) setActive(id);
        },
        { threshold: 0.4 }
      );

      observer.observe(el);
      observers.push(observer);
    });

    return () => observers.forEach((o) => o.disconnect());
  }, []);

  return (
    <nav className={styles.nav} aria-label="Page sections">
      <div className={styles.track}>
        {sections.map(({ id, label }) => (
          <a
            key={id}
            href={`#${id}`}
            className={`${styles.item} ${active === id ? styles.active : ''}`}
            aria-label={`Go to ${label} section`}
            aria-current={active === id ? 'true' : undefined}
          >
            <span className={styles.tick} />
            <span className={styles.label}>{label}</span>
          </a>
        ))}
      </div>
    </nav>
  );
}
