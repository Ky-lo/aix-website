import Button from '@/components/ui/Button';
import styles from './Hero.module.css';

export default function Hero() {
  return (
    <section className={styles.hero}>
      <div className={styles.container}>
        <div className={styles.content}>
          <p className={styles.eyebrow}>AI Upskilling & Adoption for Enterprise</p>
          <h1 className={styles.headline}>Making AI Real in everyday work</h1>
          <p className={styles.subheadline}>
            AI Democratix helps organisations design and deliver structured AI upskilling and
            Microsoft Copilot adoption programs, so employees build real fluency and sustainable
            new ways of working.
          </p>
          <div className={styles.cta}>
            <Button href="/contact/" variant="primary" size="large">
              Contact Us
            </Button>
          </div>
          <p className={styles.secondary}>
            Based in Singapore. Led by a 20-year Microsoft veteran and Microsoft partner for AI
            Upskilling & Adoption.
          </p>
        </div>
        <div className={styles.visual}>
          <img
            src="/images/hero/placeholder-hero.svg"
            alt="AI Democratix - Making AI Real"
            width="600"
            height="400"
            loading="eager"
          />
        </div>
      </div>
    </section>
  );
}
