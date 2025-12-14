import Section from '@/components/ui/Section';
import Button from '@/components/ui/Button';
import TestimonialCarousel from '@/components/ui/TestimonialCarousel';
import LogoMarquee from '@/components/ui/LogoMarquee';
import { Award, TrendingUp, MessageSquare, Building2 } from 'lucide-react';
import { SITE_CONFIG } from '@/lib/constants';
import styles from './page.module.css';

export const metadata = {
  title: `Clients & Outcomes - ${SITE_CONFIG.name}`,
  description: 'Case studies and outcomes from our AI upskilling and Copilot adoption programs.',
};

export default function ClientsOutcomesPage() {
  return (
    <div>

      <Section
        id="client-logos"
        eyebrow="OUR CLIENTS"
        eyebrowIcon={<Building2 />}
        title="Clients we work with"
        background="alt"
      >
        <LogoMarquee />
      </Section>

      <Section
        id="outcomes"
        eyebrow="KEY METRICS"
        eyebrowIcon={<TrendingUp />}
        title="Outcomes at a glance"
        background="default"
      >
        <div className={styles.outcomesGrid}>
          <div className={styles.outcome}>
            <p className={styles.outcomeValue}>93.6%</p>
            <p className={styles.outcomeLabel}>of participants use AI tools regularly in their daily work after attending the workshop</p>
          </div>
          <div className={styles.outcome}>
            <p className={styles.outcomeValue}>88.6%</p>
            <p className={styles.outcomeLabel}>say AI tools help them save time and improve the quality of their work</p>
          </div>
          <div className={styles.outcome}>
            <p className={styles.outcomeValue}>91.4%</p>
            <p className={styles.outcomeLabel}>would recommend our AI upskilling or Copilot sessions to colleagues</p>
          </div>
        </div>
      </Section>

      <Section
        id="testimonials"
        eyebrow="CLIENT VOICES"
        eyebrowIcon={<MessageSquare />}
        title="What participants say"
        background="alt"
      >
        <TestimonialCarousel />
      </Section>

      <Section id="cta" background="default">
        <div className={styles.ctaContent}>
          <p>
            If you would like to explore how similar programs and outcomes could look in your organisation, let's have a conversation.
          </p>
          <div className={styles.ctaButton}>
            <Button href="/contact/" variant="primary" size="large" className={styles.pillButton}>
              Contact Us
            </Button>
          </div>
        </div>
      </Section>
    </div>
  );
}
