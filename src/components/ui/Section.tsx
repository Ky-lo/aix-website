import { SectionProps } from '@/types';
import styles from './Section.module.css';

export default function Section({
  id,
  eyebrow,
  title,
  intro,
  background = 'default',
  children,
  className = '',
}: SectionProps) {
  return (
    <section
      id={id}
      className={`${styles.section} ${styles[background]} ${className}`}
    >
      <div className={styles.container}>
        {(eyebrow || title || intro) && (
          <div className={styles.header}>
            {eyebrow && <p className={styles.eyebrow}>{eyebrow}</p>}
            {title && <h2 className={styles.title}>{title}</h2>}
            {intro && <p className={styles.intro}>{intro}</p>}
          </div>
        )}
        <div className={styles.content}>{children}</div>
      </div>
    </section>
  );
}
