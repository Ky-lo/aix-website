import Section from '@/components/ui/Section';
import Button from '@/components/ui/Button';
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
        title="Clients & outcomes"
        intro="AI Democratix works with enterprise and corporate organisations that want to turn AI from a set of tools into real changes in how work gets done. This page highlights selected clients and outcomes from our AI upskilling and Copilot adoption programs."
        background="alt"
      />

      <Section id="client-logos" title="Selected clients" background="default">
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

      <Section id="outcomes" title="Outcomes at a glance" background="alt">
        <div className={styles.outcomesGrid}>
          <div className={styles.outcome}>
            <p className={styles.outcomeValue}>[XX%]</p>
            <p className={styles.outcomeLabel}>of participants reported greater confidence using AI tools in daily work</p>
          </div>
          <div className={styles.outcome}>
            <p className={styles.outcomeValue}>[XX%]</p>
            <p className={styles.outcomeLabel}>would recommend our AI upskilling or Copilot sessions to colleagues</p>
          </div>
          <div className={styles.outcome}>
            <p className={styles.outcomeValue}>[XX%]</p>
            <p className={styles.outcomeLabel}>indicated they discovered new ways of working with AI as a result of the program</p>
          </div>
          <div className={styles.outcome}>
            <p className={styles.outcomeValue}>[N]</p>
            <p className={styles.outcomeLabel}>weeks typical duration for a structured AI upskilling and adoption journey</p>
          </div>
        </div>
      </Section>

      <Section id="case-studies" title="Case studies" intro="Each organisation is different, but the pattern is similar: clear objectives, structured programs, and measurable shifts in confidence and usage." background="default">
        <div className={styles.caseStudy}>
          <h3>Regional financial institution (anonymised)</h3>

          <div className={styles.caseStudySection}>
            <h4>Context</h4>
            <p>The organisation had invested in Microsoft Copilot licences and wanted a structured way to build AI fluency and drive effective usage across business units.</p>
          </div>

          <div className={styles.caseStudySection}>
            <h4>Challenge</h4>
            <p>Employees were unsure how to use Copilot in their day-to-day work, leaders wanted tangible value rather than just usage statistics, and HR/L&D needed a scalable upskilling plan.</p>
          </div>

          <div className={styles.caseStudySection}>
            <h4>Approach</h4>
            <p>AI Democratix co-designed a multi-phase AI Upskilling & Copilot Adoption Program, combining awareness webinars, hands-on prompt-crafting workshops, Office Hours, and champions support.</p>
          </div>

          <div className={styles.caseStudySection}>
            <h4>Program design highlights</h4>
            <ul>
              <li>Duration: [X] weeks</li>
              <li>Audiences: business users, managers, selected champions</li>
              <li>Formats: webinars, workshops, clinics, champions sessions</li>
            </ul>
          </div>

          <div className={styles.caseStudySection}>
            <h4>Outcomes</h4>
            <ul>
              <li>[Placeholder] XX% of participants reported higher confidence using Copilot in their daily work</li>
              <li>[Placeholder] XX% indicated they discovered new ways to use AI in their roles</li>
              <li>Qualitative feedback highlighted clearer understanding of when and how to use AI appropriately</li>
            </ul>
          </div>

          <div className={styles.quote}>
            <p>"[Short sponsor or participant quote to be added here.]"</p>
          </div>
        </div>
      </Section>

      <Section id="testimonials" title="What participants and sponsors say" background="alt">
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
