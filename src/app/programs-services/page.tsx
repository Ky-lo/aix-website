import Section from '@/components/ui/Section';
import Card from '@/components/ui/Card';
import Button from '@/components/ui/Button';
import { GraduationCap, Sparkles, Users2, TrendingUp, Layers, Grid3x3, Lightbulb, Settings } from 'lucide-react';
import { SITE_CONFIG } from '@/lib/constants';
import styles from './page.module.css';

export const metadata = {
  title: `Programs & Services - ${SITE_CONFIG.name}`,
  description: 'Structured AI upskilling and Microsoft Copilot adoption programs for enterprise organizations.',
};

export default function ProgramsServicesPage() {
  return (
    <div>
      <Section
        id="programs-intro"
        eyebrow="WHAT WE OFFER"
        eyebrowIcon={<Layers />}
        title="Programs & Services"
        intro="We designs structured AI upskilling and adoption programs that fit your organisation – your roles, your workflows, and your level of AI readiness. We focus on helping your people use AI confidently in the tools they already work with, especially Microsoft 365 Copilot."
        background="alt"
      >
      </Section>

      <Section
        id="program-pillars"
        eyebrow="FOUR CORE PILLARS"
        eyebrowIcon={<Grid3x3 />}
        title="Our program pillars"
        intro="We organise our work into a few clear pillars so you can see where we can support you."
        background="default"
      >
        <div className={styles.pillarsGrid}>
          <Card
            icon={<GraduationCap size={32} />}
            title="AI Upskilling & AI Fluency"
            description="Foundational and role-relevant learning for employees and leaders."
            hoverable
          />
          <Card
            icon={<Sparkles size={32} />}
            title="Microsoft Copilot Onboarding"
            description="Structured journeys that help people move beyond demos into real usage."
            hoverable
          />
          <Card
            icon={<Users2 size={32} />}
            title="AI Adoption & Champions Programs"
            description="Support structures that sustain momentum and build internal communities."
            hoverable
          />
          <Card
            icon={<TrendingUp size={32} />}
            title="Advisory on AI Upskilling Strategy"
            description="Partnership with your HR, L&D, and transformation teams to shape your AI learning roadmap."
            hoverable
          />
        </div>
      </Section>

      <Section
        id="tailoring"
        eyebrow="CUSTOMIZATION"
        eyebrowIcon={<Settings />}
        title="How we tailor programs"
        background="alt"
      >
        <div className={styles.tailoringContent}>
          <p>Every organisation is different. We use a consistent approach, but the actual program is always tailored to your context.</p>
          <h4>Typical tailoring levers:</h4>
          <ul>
            <li>Roles and audiences we focus on</li>
            <li>Use cases and scenarios we bring into workshops</li>
            <li>Mix of formats (webinars, workshops, clinics, champions activities)</li>
            <li>Timing, cadence, and integration with existing initiatives</li>
          </ul>
        </div>
      </Section>

      <Section id="cta" background="default">
        <div className={styles.ctaContent}>
          <p>
            If you are planning or running AI upskilling or Copilot adoption initiatives, we can help you design and deliver a structured program that fits your organisation.
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
