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
        intro="Partner with you to design programs that build AI fluency and drive sustainable adoption."
        background="default"
        className="reveal"
      >
      <div className={styles.whatWeDoLayout}>
        <div className={styles.pillar}>
          <span className={styles.pillarNumber}>01</span>
          <h3>AI Upskilling & AI Fluency</h3>
          <ul>
            <li>What AI is and how it supports work</li>
            <li>Using AI in everyday tasks</li>
            <li>Practical examples from real work scenarios</li>
            <li>Learning through application, not theory</li>
          </ul>
        </div>

        <div className={styles.pillar}>
          <span className={styles.pillarNumber}>02</span>
          <h3>Microsoft Copilot Onboarding</h3>
          <ul>
            <li>Getting started with Microsoft Copilot</li>
            <li>Applying Copilot in daily work</li>
            <li>Using Copilot within real workflows</li>
            <li>Responsible and secure usage</li>
          </ul>
        </div>

        <div className={styles.pillar}>
          <span className={styles.pillarNumber}>03</span>
          <h3>AI Adoption & Champions Programs</h3>
          <ul>
            <li>Supporting sustained AI usage</li>
            <li>Enabling internal AI champions</li>
            <li>Ongoing guidance and coaching</li>
            <li>Continuous improvement through feedback</li>
          </ul>
        </div>

        <div className={styles.pillar}>
          <span className={styles.pillarNumber}>04</span>
          <h3>Advisory on AI Upskilling Strategy</h3>
          <ul>
            <li>Partnering with HR, L&amp;D, and transformation teams</li>
            <li>Designing role-based AI learning plans</li>
            <li>Integrating AI into existing training programs</li>
            <li>Aligning stakeholders on a clear approach</li>
          </ul>
        </div>
      </div>
      </Section>

      {/* Who We Help */}
      <Section
        id="who-we-help"
        eyebrow="OUR BUSINESS PARTNERS"
        eyebrowIcon={<Users2 />}
        title="Who we help"
        intro="Teams responsible for driving AI upskilling and adoption within the organization."
        background="alt"
        className="reveal"
      >
        <div className={styles.whoWeHelpLayout}>
          <div className={styles.helpBlock}>
            <h3>HR & Learning Development</h3>
            <ul>
              <li>Design AI upskilling journeys</li>
              <li>Integrate into existing programs</li>
              <li>Build workforce readiness</li>
            </ul>
          </div>
          <div className={styles.helpBlock}>
            <h3>Digital Transformation & IT</h3>
            <ul>
              <li>Turn AI investments into real usage</li>
              <li>Support governance with practical training</li>
              <li>Align with business priorities</li>
            </ul>
          </div>
          <div className={styles.helpBlock}>
            <h3>Business & Functional Leaders</h3>
            <ul>
              <li>Discover practical AI use cases</li>
              <li>Encourage experimentation</li>
              <li>Build tangible adoption stories</li>
            </ul>
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
        title="Measurable outcomes"
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
                users trained acorss various programs in 2025
              </p>
            </div>
            <div className={styles.stat}>
              <p className={styles.statValue}>4.6/5</p>
              <p className={styles.statLabel}>overall satisfaction rating across all sessions</p>
            </div>
            <div className={styles.stat}>
              <p className={styles.statValue}>91.4%</p>
              <p className={styles.statLabel}>
                would recommend the program to colleagues
              </p>
            </div>
          </div>
          <div className={styles.teaserCta}>
            <Button href="/programs-services/" variant="secondary" size="medium" className={styles.pillButton}>
              View Programs
            </Button>
          </div>
        </div>
      </Section>
    </div>
  );
}
