import { SITE_CONFIG } from '@/lib/constants';
import { Mail, Linkedin } from 'lucide-react';
import styles from './Footer.module.css';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.content}>
          <div className={styles.branding}>
            <h3 className={styles.brandName}>{SITE_CONFIG.name}</h3>
            <p className={styles.tagline}>{SITE_CONFIG.tagline}</p>
          </div>

          <div className={styles.contact}>
            <a href={`mailto:${SITE_CONFIG.email}`} className={styles.contactLink}>
              <Mail size={18} />
              <span>{SITE_CONFIG.email}</span>
            </a>
            <a
              href={SITE_CONFIG.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.contactLink}
            >
              <Linkedin size={18} />
              <span>LinkedIn</span>
            </a>
          </div>
        </div>

        <div className={styles.copyright}>
          <p>© {currentYear} {SITE_CONFIG.name}. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
