import Button from '@/components/ui/Button';
import styles from './Hero.module.css';

export default function Hero() {
  return (
    <section className={styles.hero}>
      <div className={styles.container}>
        <div className={styles.content}>
          <p className={styles.eyebrow}>AI Upskilling & Adoption for Enterprise</p>
          <h1 className={styles.headline}>Making AI Real</h1>
          <p className={styles.subheadline}>
            We design structured, tailored programs that help employees understand, apply, and embed AI into their daily work.
            <br />
            <span className={styles.highlight}>A Microsoft partner</span> for Copilot Adoption.
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
