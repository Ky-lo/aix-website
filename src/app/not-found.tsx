import Link from 'next/link';
import Button from '@/components/ui/Button';
import styles from './not-found.module.css';

export default function NotFound() {
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.code}>404</h1>
        <h2 className={styles.title}>Page Not Found</h2>
        <p className={styles.message}>
          Sorry, we couldn't find the page you're looking for. The page may have been moved or doesn't exist.
        </p>
        <div className={styles.actions}>
          <Button href="/" variant="primary" size="medium">
            Go to Home
          </Button>
          <Button href="/contact/" variant="ghost" size="medium">
            Contact Us
          </Button>
        </div>
      </div>
    </div>
  );
}
