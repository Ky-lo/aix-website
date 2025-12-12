import Hero from '@/components/home/Hero';
import Section from '@/components/ui/Section';
import Card from '@/components/ui/Card';
import ProcessStep from '@/components/ui/ProcessStep';
import Button from '@/components/ui/Button';
import { Users, Zap, Target, GraduationCap, Sparkles, Users2, TrendingUp } from 'lucide-react';
import { FOUNDER } from '@/lib/constants';
import styles from './page.module.css';

export default function Home() {
  return (
    <div>
      {/* Hero Section */}
      <Hero />

      {/* Who We Help */}
      <Section
        id="who-we-help"
        title="Who we help"
        intro="We work with enterprise and corporate teams who are responsible for turning AI from a tool into everyday practice."
        background="default"
      >
        <div className={styles.cardGrid}>
          <Card
            icon={<Users size={32} />}
            title="HR and Learning & Development teams"
            bullets={[
              'Design AI upskilling and AI fluency journeys for employees',
              'Integrate AI into existing learning programs',
              'Build confidence and readiness for AI in the workforce',
            ]}
            hoverable
          />
          <Card
            icon={<Zap size={32} />}
            title="Digital Transformation, Innovation, and IT"
            bullets={[
              'Turn AI and Copilot investments into real usage and value',
              'Support governance and guardrails with practical training',
              'Align AI initiatives with business priorities and workflows',
            ]}
            hoverable
          />
          <Card
            icon={<Target size={32} />}
            title="Business and Functional Leaders"
            bullets={[
              'Help teams discover practical AI use cases in their day-to-day work',
              'Encourage healthy AI habits and experimentation',
              'Build stories and examples that make AI adoption tangible',
            ]}
            hoverable
          />
        </div>
      </Section>

      {/* What We Do */}
      <Section
        id="what-we-do"
        title="What we do"
        intro="We design structured, tailored programs that help your people understand, apply, and sustain AI in their daily work."
        background="alt"
      >
        <div className={styles.cardGrid4}>
          <Card
            icon={<GraduationCap size={32} />}
            title="AI Upskilling & AI Fluency"
            description="Foundational and role-relevant learning paths that build confidence using AI tools in everyday tasks."
            bullets={[
              'Awareness and introductory sessions on AI and Copilot',
              'Hands-on practice with real work scenarios',
              'Focus on practical habits, not theory',
            ]}
            hoverable
          />
          <Card
            icon={<Sparkles size={32} />}
            title="Microsoft Copilot Onboarding"
            description="Structured onboarding programs that help employees move beyond demos into meaningful, repeatable usage of Microsoft Copilot."
            bullets={[
              'Copilot feature understanding in the context of real workflows',
              'Prompting practices tailored to common roles and tasks',
              'Guidance on responsible and secure usage',
            ]}
            hoverable
          />
          <Card
            icon={<Users2 size={32} />}
            title="AI Adoption & Champions Programs"
            description="Support structures that help organisations move from early pilots to sustained, organisation-wide adoption."
            bullets={[
              'Champions enablement and community support',
              'Office Hours, clinics, and coaching',
              'Feedback loops and continuous improvement',
            ]}
            hoverable
          />
          <Card
            icon={<TrendingUp size={32} />}
            title="Advisory on AI Upskilling Strategy"
            description="Partnership with your HR, L&D, and transformation teams to shape AI learning and adoption roadmaps."
            bullets={[
              'Co-design of AI learning journeys',
              'Integration with existing programs and initiatives',
              'Help aligning stakeholders around a clear approach',
            ]}
            hoverable
          />
        </div>
      </Section>

      {/* How We Work */}
      <Section
        id="how-we-work"
        title="How we work"
        intro="Every engagement is tailored, but the way we work is consistent and structured."
        background="default"
      >
        <div className={styles.processSteps}>
          <ProcessStep
            number={1}
            title="Understand & Align"
            description="We start by understanding your priorities, context, and current AI readiness."
          />
          <ProcessStep
            number={2}
            title="Design the Program"
            description="We co-design an AI upskilling and adoption journey tailored to your organisation."
          />
          <ProcessStep
            number={3}
            title="Deliver & Support"
            description="We run sessions, workshops, and support activities that fit your people and workflows."
          />
          <ProcessStep
            number={4}
            title="Sustain & Scale"
            description="We help you build champions, feedback loops, and ways to sustain momentum."
            isLast
          />
        </div>
      </Section>

      {/* Clients & Outcomes Teaser */}
      <Section
        id="clients-outcomes"
        title="Clients & outcomes"
        background="alt"
      >
        <div className={styles.outcomesTeaser}>
          <p className={styles.teaserText}>
            We partner with enterprise and corporate organisations to make AI tangible, measurable,
            and sustainable. Selected clients and outcomes will be showcased here.
          </p>
          <div className={styles.placeholderStats}>
            <div className={styles.stat}>
              <p className={styles.statValue}>[XX%]</p>
              <p className={styles.statLabel}>
                of participants reported greater confidence using AI tools in daily work
              </p>
            </div>
            <div className={styles.stat}>
              <p className={styles.statValue}>[XX%]</p>
              <p className={styles.statLabel}>would recommend the program to colleagues</p>
            </div>
            <div className={styles.stat}>
              <p className={styles.statValue}>[XX%]</p>
              <p className={styles.statLabel}>
                measurable uplift in AI adoption across targeted groups
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

      {/* Founder Note */}
      <Section id="founder" title="Led by a 20-year Microsoft veteran" background="default">
        <div className={styles.founderNote}>
          <div className={styles.founderImage}>
            <img
              src="/images/founder/placeholder-headshot.svg"
              alt={FOUNDER.name}
              width="300"
              height="300"
            />
          </div>
          <div className={styles.founderBio}>
            {FOUNDER.bio.split('\n\n').map((paragraph, index) => (
              <p key={index}>{paragraph}</p>
            ))}
          </div>
        </div>
      </Section>
    </div>
  );
}
