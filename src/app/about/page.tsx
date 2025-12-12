import Section from '@/components/ui/Section';
import Card from '@/components/ui/Card';
import { SITE_CONFIG, FOUNDER } from '@/lib/constants';
import styles from './page.module.css';

export const metadata = {
  title: `About - ${SITE_CONFIG.name}`,
  description: 'Learn about AI Democratix and our mission to make AI real in everyday work.',
};

export default function AboutPage() {
  return (
    <div>
      <Section
        id="about-intro"
        title="About AI Democratix"
        intro="AI Democratix is a Singapore-based consultancy focused on one thing: helping enterprise and corporate teams make AI real in everyday work. We design and deliver structured AI upskilling and Microsoft Copilot adoption programs so your people can use AI confidently, responsibly, and productively."
        background="alt"
      >
        <></>
      </Section>

      <Section id="our-story" title="Our story" background="default">
        <div className={styles.content}>
          <p>AI Democratix was founded by Yam Seng Or, a 20-year Microsoft veteran who has spent his career helping organisations adopt technology and new ways of working.</p>
          <p>After two decades at Microsoft, working with enterprise customers and internal teams, Yam Seng saw a clear gap: many organisations were investing in AI tools, but employees lacked the fluency, confidence, and practical habits to turn those tools into real value.</p>
          <p>AI Democratix was created to close that gap. Instead of focusing only on features and tools, we focus on people, workflows, and sustainable habits – so AI becomes part of how work actually gets done.</p>
        </div>
      </Section>

      <Section id="who-we-are" title="Who we are" background="alt">
        <div className={styles.founderSection}>
          <div className={styles.founderImage}>
            <img src="/images/founder/placeholder-headshot.svg" alt={FOUNDER.name} width="250" height="250" />
          </div>
          <div className={styles.founderContent}>
            <h3>Led by a 20-year Microsoft veteran</h3>
            <p>AI Democratix is led by Yam Seng Or, a 20-year Microsoft veteran and Microsoft partner for AI Upskilling & Adoption.</p>
            <p>Yam Seng has worked with enterprise customers across the region to introduce new technologies, drive adoption, and help business users succeed with tools like Microsoft 365 and, more recently, Microsoft Copilot.</p>
            <h4>At a glance:</h4>
            <ul>
              <li>20 years at Microsoft, focused on enterprise customers and adoption</li>
              <li>Deep experience in Microsoft 365 and Microsoft Copilot scenarios</li>
              <li>Hands-on work with HR, L&D, transformation, and business leaders</li>
              <li>Based in Singapore, serving enterprise and corporate organisations</li>
            </ul>
          </div>
        </div>
      </Section>

      <Section id="our-focus" title="Our focus" intro="We focus on practical, structured AI upskilling and adoption for enterprise and corporate environments." background="default">
        <div className={styles.focusGrid}>
          <Card
            title="AI Upskilling & AI Fluency"
            description="Helping employees understand what AI can and cannot do, and how to use it effectively in their day-to-day tasks."
            hoverable
          />
          <Card
            title="Microsoft Copilot Adoption"
            description="Designing Copilot onboarding and usage journeys that move beyond product demos into real, sustainable usage in Microsoft 365 tools."
            hoverable
          />
          <Card
            title="Sustainable AI Habits"
            description="Building prompting skills, patterns, and team practices that make AI a natural part of everyday work rather than a one-off experiment."
            hoverable
          />
        </div>
      </Section>

      <Section id="our-philosophy" title='Our philosophy: "Making AI Real"' intro="We believe that the magic doesn't start with AI – it starts with your people, their questions, and their workflows." background="alt">
        <div className={styles.principlesGrid}>
          <div className={styles.principle}>
            <h3>People-first, tools-second</h3>
            <p>We start with roles, workflows, and pain points, then map AI tools to them – not the other way round.</p>
          </div>
          <div className={styles.principle}>
            <h3>Habits over hype</h3>
            <p>We focus on repeatable prompting patterns and everyday scenarios instead of one-off demos or "wow" moments.</p>
          </div>
          <div className={styles.principle}>
            <h3>Structured, not ad-hoc</h3>
            <p>We design programs as journeys – with clear phases, learning outcomes, and follow-through – rather than isolated training events.</p>
          </div>
          <div className={styles.principle}>
            <h3>Enterprise-ready</h3>
            <p>We work alongside HR, L&D, IT, and governance leaders so that AI upskilling fits your policies, culture, and risk appetite.</p>
          </div>
        </div>
      </Section>

      <Section id="why-work-with-us" title="Why organisations work with AI Democratix" background="default">
        <div className={styles.reasonsGrid}>
          <Card
            title="Deep Microsoft heritage"
            description="20 years of experience inside Microsoft, plus current partnership for AI Upskilling & Adoption."
            hoverable
          />
          <Card
            title="Enterprise context, not consumer AI"
            description="We design programs for Microsoft 365 and enterprise-grade AI environments, with HR, IT, and governance in mind."
            hoverable
          />
          <Card
            title="Structured, tailored programs"
            description="No one-size-fits-all decks. We co-design journeys based on your roles, priorities, and constraints."
            hoverable
          />
          <Card
            title="Hands-on, habit-building approach"
            description="We emphasise practice, reflection, and real work scenarios so employees build lasting AI habits."
            hoverable
          />
          <Card
            title="Focus on value and outcomes"
            description="We look at readiness, confidence, and usage, and work with you to define what 'value from AI' looks like for your organisation."
            hoverable
          />
        </div>
      </Section>

      <Section id="where-we-operate" title="Where we operate and who we work with" background="alt">
        <div className={styles.content}>
          <p>AI Democratix is based in Singapore and works primarily with enterprise and corporate organisations in Singapore and the wider Asia-Pacific region.</p>
          <p>We partner with HR, L&D, transformation, IT, and business leaders who are responsible for planning and delivering AI upskilling, Copilot onboarding, and AI adoption initiatives across their organisations.</p>
        </div>
      </Section>
    </div>
  );
}
