'use client';

import Hero from '@/components/home/Hero';
import Section from '@/components/ui/Section';
import Button from '@/components/ui/Button';
import { Target, Sparkles, Users2, TrendingUp } from 'lucide-react';
import { useScrollReveal } from '@/hooks/useScrollReveal';
import styles from './page.module.css';

export default function Home() {
  useScrollReveal();

  return (
    <div>
      {/* Hero Section */}
      <Hero />

      {/* What We Do */}
      <Section
        id="what-we-do"
        eyebrow="OUR SERVICES"
        eyebrowIcon={<Sparkles />}
        title="What we do"
        intro="Structured programs that build AI fluency and sustainable adoption."
        background="default"
        className="reveal"
      >
        <div className={styles.whatWeDoLayout}>
          <div className={styles.pillar}>
            <span className={styles.pillarNumber}>01</span>
            <h3>AI Upskilling & AI Fluency</h3>
            <p>Foundational and role-relevant learning paths that build confidence using AI tools in everyday tasks. Awareness sessions, hands-on practice, and practical habits over theory.</p>
          </div>

          <div className={`${styles.pillar} ${styles.pillarEmphasized}`}>
            <span className={styles.pillarNumber}>02</span>
            <h3>Microsoft Copilot Onboarding</h3>
            <p>Structured onboarding programs that help employees move beyond demos into meaningful, repeatable usage of Microsoft Copilot. Feature understanding in real workflows, tailored prompting practices, and responsible usage guidance.</p>
          </div>

          <div className={`${styles.pillar} ${styles.pillarEmphasized}`}>
            <span className={styles.pillarNumber}>03</span>
            <h3>AI Adoption & Champions Programs</h3>
            <p>Support structures that help organisations move from early pilots to sustained, organisation-wide adoption. Champions enablement, office hours and coaching, and continuous improvement feedback loops.</p>
          </div>

          <div className={styles.pillar}>
            <span className={styles.pillarNumber}>04</span>
            <h3>Advisory on AI Upskilling Strategy</h3>
            <p>Partnership with your HR, L&D, and transformation teams to shape AI learning and adoption roadmaps. Co-design learning journeys, integrate with existing programs, and align stakeholders around a clear approach.</p>
          </div>
        </div>
      </Section>

      {/* Who We Help */}
      <Section
        id="who-we-help"
        eyebrow="OUR BUSINESS PARTNERS"
        eyebrowIcon={<Users2 />}
        title="Who we help"
        intro="Enterprise teams turning AI into everyday practice."
        background="alt"
        className="reveal"
      >
        <div className={styles.whoWeHelpLayout}>
          <div className={`${styles.helpBlock} ${styles.helpBlock1}`}>
            <h3>HR & Learning Development</h3>
            <p>Design AI upskilling journeys, integrate into existing programs, build workforce readiness.</p>
          </div>
          <div className={`${styles.helpBlock} ${styles.helpBlock2}`}>
            <h3>Digital Transformation & IT</h3>
            <p>Turn AI investments into real usage, support governance with practical training, align with business priorities.</p>
          </div>
          <div className={`${styles.helpBlock} ${styles.helpBlock3}`}>
            <h3>Business & Functional Leaders</h3>
            <p>Discover practical AI use cases, encourage experimentation, build tangible adoption stories.</p>
          </div>
        </div>
      </Section>

      {/* How We Work */}
      <Section
        id="how-we-work"
        eyebrow="OUR PROCESS"
        eyebrowIcon={<Target />}
        title="How we work"
        intro="Tailored engagements with a consistent, structured approach."
        background="default"
        className="reveal"
      >
        <div className={styles.timelineLayout}>
          <div className={styles.timelineItem}>
            <div className={styles.timelineMarker}>01</div>
            <div className={styles.timelineContent}>
              <h3>Understand & Align</h3>
              <p>We start by understanding your priorities, context, and current AI readiness.</p>
            </div>
          </div>
          <div className={styles.timelineItem}>
            <div className={styles.timelineMarker}>02</div>
            <div className={styles.timelineContent}>
              <h3>Design the Program</h3>
              <p>We co-design an AI upskilling and adoption journey tailored to your organisation.</p>
            </div>
          </div>
          <div className={styles.timelineItem}>
            <div className={styles.timelineMarker}>03</div>
            <div className={styles.timelineContent}>
              <h3>Deliver & Support</h3>
              <p>We run sessions, workshops, and support activities that fit your people and workflows.</p>
            </div>
          </div>
          <div className={styles.timelineItem}>
            <div className={styles.timelineMarker}>04</div>
            <div className={styles.timelineContent}>
              <h3>Sustain & Scale</h3>
              <p>We help you build champions, feedback loops, and ways to sustain momentum.</p>
            </div>
          </div>
        </div>
      </Section>

      {/* Clients & Outcomes Teaser */}
      <Section
        id="clients-outcomes"
        eyebrow="PROVEN RESULTS"
        eyebrowIcon={<TrendingUp />}
        title="Clients & outcomes"
        background="alt"
        className="reveal"
      >
        <div className={styles.outcomesTeaser}>
          <p className={styles.teaserText}>
            Making AI tangible, measurable, and sustainable for enterprise organisations.
          </p>
          <div className={styles.placeholderStats}>
            <div className={styles.stat}>
              <p className={styles.statValue}>{'>'}10k</p>
              <p className={styles.statLabel}>
                corporate users trained in 2025
              </p>
            </div>
            <div className={styles.stat}>
              <p className={styles.statValue}>4.6/5</p>
              <p className={styles.statLabel}>overall satisfaction across all sessions</p>
            </div>
            <div className={styles.stat}>
              <p className={styles.statValue}>91.4%</p>
              <p className={styles.statLabel}>
                would recommend the program to colleagues
              </p>
            </div>
          </div>
          <div className={styles.teaserCta}>
            <Button href="/clients-outcomes/" variant="secondary" size="medium">
              View Clients & Outcomes
            </Button>
          </div>
        </div>
      </Section>
    </div>
  );
}
