import Button from '@/components/ui/Button';
import styles from './Hero.module.css';

export default function Hero() {
  return (
    <section className={styles.hero}>
      {/* Animated wave background */}
      <div className={styles.waveBackground}>
        <svg className={styles.wave} viewBox="0 0 1200 600" preserveAspectRatio="none">
          <path className={styles.wave1} d="M0,200 Q300,150 600,200 T1200,200 L1200,600 L0,600 Z" />
          <path className={styles.wave2} d="M0,250 Q300,300 600,250 T1200,250 L1200,600 L0,600 Z" />
          <path className={styles.wave3} d="M0,300 Q300,250 600,300 T1200,300 L1200,600 L0,600 Z" />
        </svg>
      </div>

      <div className={styles.container}>
        <div className={styles.content}>
          {/* Eyebrow with pulse/scope icon */}
          <div className={styles.eyebrowWrapper}>
            <svg className={styles.pulseIcon} viewBox="0 0 40 20" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M 0 10 Q 5 10, 7 5 T 13 10 Q 15 10, 17 15 T 23 10 Q 27 10, 30 7 T 40 10"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
              />
            </svg>
            <p className={styles.eyebrow}>Enterprise AI Upskilling & Adoption</p>
          </div>

          <h1 className={styles.headline}>Making AI Real</h1>

          <p className={styles.subheadline}>
            We partner with you to design programs that upskill employees and accelerate AI adoption and value realization.
          </p>

          <div className={styles.ctaGroup}>
            <Button href="/contact/" variant="primary" size="medium" className={styles.pillButton}>
              Contact Us
            </Button>
            <Button
              href="/programs-services/"
              variant="secondary"
              size="medium"
              className={`${styles.pillButton} ${styles.secondaryButton}`}
            >
              View Programs
            </Button>
          </div>

          <div className={styles.partnerBadge}>
            <img src="/images/hero/Copilot.svg" alt="Microsoft Copilot" className={styles.copilotIcon} />
            <span className={styles.partnerText}>
              A Microsoft partner for Copilot Adoption.
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
