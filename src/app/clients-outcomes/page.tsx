import Section from '@/components/ui/Section';
import Button from '@/components/ui/Button';
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
        id="clients-intro"
        eyebrow="IMPACT & RESULTS"
        eyebrowIcon={<Award />}
        title="Clients & outcomes"
        intro="We work with enterprise and corporate organisations that want to turn AI from a set of tools into real changes in how work gets done. This page highlights selected clients and outcomes from our AI upskilling and Copilot adoption programs."
        background="alt"
      />

      <Section
        id="client-logos"
        eyebrow="OUR CLIENTS"
        eyebrowIcon={<Building2 />}
        title="Clients we work with"
        background="default"
      >
        <div className={styles.logosGrid}>
          <div className={styles.logoPlaceholder}>
            <img src="/images/clients/placeholder-logo.svg" alt="Client logo" width="200" height="100" />
          </div>
          <div className={styles.logoPlaceholder}>
            <img src="/images/clients/placeholder-logo.svg" alt="Client logo" width="200" height="100" />
          </div>
          <div className={styles.logoPlaceholder}>
            <img src="/images/clients/placeholder-logo.svg" alt="Client logo" width="200" height="100" />
          </div>
          <div className={styles.logoPlaceholder}>
            <img src="/images/clients/placeholder-logo.svg" alt="Client logo" width="200" height="100" />
          </div>
        </div>
        <p className={styles.logoNote}>Logos of selected clients will be displayed here once finalised.</p>
      </Section>

      <Section
        id="outcomes"
        eyebrow="KEY METRICS"
        eyebrowIcon={<TrendingUp />}
        title="Outcomes at a glance"
        background="alt"
      >
        <div className={styles.outcomesGrid}>
          <div className={styles.outcome}>
            <p className={styles.outcomeValue}>93.6%</p>
            <p className={styles.outcomeLabel}>of participants regularly use AI tools in their day-to-day work</p>
          </div>
          <div className={styles.outcome}>
            <p className={styles.outcomeValue}>88.6%</p>
            <p className={styles.outcomeLabel}>say AI tools save time and improve the quality of their work</p>
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
        background="dark"
      >
        <div className={styles.testimonialsGrid}>
          <div className={styles.testimonial}>
            <p className={styles.testimonialText}>"[AI Democratix] helped our teams move from curiosity about AI to practical, confident usage in their daily work."</p>
            <p className={styles.testimonialAuthor}>– [Role, Organisation]</p>
          </div>
          <div className={styles.testimonial}>
            <p className={styles.testimonialText}>"Short testimonials from program sponsors, HR/L&D partners, or participants can be featured here once available."</p>
            <p className={styles.testimonialAuthor}>– [Role, Organisation]</p>
          </div>
        </div>
      </Section>

      <Section id="cta" background="default">
        <div className={styles.ctaContent}>
          <p>
            If you would like to explore how similar programs and outcomes could look in your organisation, let's have a conversation.
          </p>
          <div className={styles.ctaButton}>
            <Button href="/contact/" variant="primary" size="large">
              Contact Us
            </Button>
          </div>
        </div>
      </Section>
    </div>
  );
}
