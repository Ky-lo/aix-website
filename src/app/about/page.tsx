import Section from '@/components/ui/Section';
import Card from '@/components/ui/Card';
import { SITE_CONFIG, FOUNDER } from '@/lib/constants';
import { Building2, Target, Compass, Award, Users2, Globe } from 'lucide-react';
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
        eyebrow="WHO WE ARE"
        eyebrowIcon={<Building2 />}
        title="About AI Democratix"
        intro="We are a Singapore-based consultancy focused on one thing: helping enterprise and corporate teams make AI real in everyday work. We design and deliver structured AI upskilling and Microsoft Copilot adoption programs so your people can use AI confidently, responsibly, and productively."
        background="alt"
      >
        <></>
      </Section>

      <Section
        id="our-story"
        eyebrow="OUR JOURNEY"
        eyebrowIcon={<Building2 />}
        title="Our story"
        background="default"
      >
        <div className={styles.content}>
          <p>AI Democratix was founded by Yam Seng Or, a 20-year Microsoft veteran who has spent his career helping organisations adopt technology and new ways of working.</p>
          <p>After two decades at Microsoft, working with enterprise customers and internal teams, Yam Seng saw a clear gap: many organisations were investing in IT tools, but employees lacked the fluency, confidence, and practical habits to turn those tools into real value.</p>
          <p>AI Democratix was created to close that gap. Instead of focusing only on features and tools, we focus on people, workflows, and sustainable habits – so IT tools becomes part of how work actually gets done.</p>
        </div>
      </Section>

      <Section
        id="our-philosophy"
        eyebrow="OUR PHILOSOPHY"
        eyebrowIcon={<Compass />}
        title='Our philosophy: "Making AI Real"'
        intro="We believe that the magic doesn't start with AI – it starts with your people, their questions, and their workflows."
        background="dark"
      >
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

    </div>
  );
}
