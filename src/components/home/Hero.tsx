import Button from '@/components/ui/Button';
import styles from './Hero.module.css';

export default function Hero() {
  return (
    <section className={styles.hero}>
      <div className={styles.container}>
        <div className={styles.content}>
          <p className={styles.eyebrow}>AI Upskilling & Adoption</p>
          <h1 className={styles.headline}>Making AI Real</h1>
          <p className={styles.subheadline}>
            Structured programs that build AI fluency and sustainable adoption.
            <br />
            Microsoft partner for Copilot Adoption.
          </p>
          <div className={styles.cta}>
            <Button href="/contact/" variant="primary" size="large">
              Contact Us
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
