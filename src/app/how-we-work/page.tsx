import Section from '@/components/ui/Section';
import ProcessStep from '@/components/ui/ProcessStep';
import Button from '@/components/ui/Button';
import { SITE_CONFIG } from '@/lib/constants';
import styles from './page.module.css';

export const metadata = {
  title: `How We Work - ${SITE_CONFIG.name}`,
  description: 'Our structured approach to AI upskilling and adoption programs.',
};

export default function HowWeWorkPage() {
  return (
    <div>
      <Section
        id="how-intro"
        title="How we work"
        intro="We use a simple, structured approach to help you plan, deliver, and sustain AI upskilling and adoption. Every organisation is different, but our way of working is consistent: understand your context, co-design the program, deliver with your teams, and help you sustain momentum."
        background="alt"
      />

      <Section id="engagement-model" title="Our 4-step engagement model" background="default">
        <div className={styles.processSteps}>
          <ProcessStep
            number={1}
            title="Understand & Align"
            description="We start by understanding your organisation's priorities, current AI readiness, and the roles you want to support."
          />
          <ProcessStep
            number={2}
            title="Design the Program"
            description="We co-design a structured AI upskilling and adoption journey – defining audiences, learning outcomes, content, and formats."
          />
          <ProcessStep
            number={3}
            title="Deliver & Support"
            description="We run sessions, workshops, and support activities that fit your employees' schedules and workflows."
          />
          <ProcessStep
            number={4}
            title="Sustain & Scale"
            description="We help you build internal champions, feedback loops, and follow-up activities so AI usage continues to grow after the initial rollout."
            isLast
          />
        </div>
      </Section>

      <Section id="stakeholders" title="Working with your teams" background="alt">
        <div className={styles.stakeholdersContent}>
          <p>AI upskilling and adoption is a team effort. We typically work with a core group of stakeholders to ensure that programs are relevant, responsible, and sustainable.</p>
          <h4>Typical stakeholders we partner with:</h4>
          <div className={styles.stakeholdersList}>
            <div>
              <strong>HR, Learning & Development, and Talent teams</strong>
              <p>to align programs with existing learning frameworks and initiatives.</p>
            </div>
            <div>
              <strong>Digital transformation, innovation, and IT</strong>
              <p>to align with tools, platforms, and governance.</p>
            </div>
            <div>
              <strong>Business and functional leaders</strong>
              <p>to anchor programs in real business priorities and workflows.</p>
            </div>
            <div>
              <strong>AI champions and community leads</strong>
              <p>to sustain momentum within teams after the initial rollout.</p>
            </div>
          </div>
        </div>
      </Section>

      <Section id="deliverables" title="What we deliver at each stage" intro="The exact deliverables depend on your needs, but below is what a typical engagement might include." background="default">
        <div className={styles.deliverablesGrid}>
          <div className={styles.stage}>
            <h3>Stage 1: Understand & Align</h3>
            <p>Typical activities and outputs:</p>
            <ul>
              <li>Conversations with key stakeholders</li>
              <li>Review of existing initiatives, tools, and constraints</li>
              <li>High-level view of target audiences and roles</li>
              <li>Agreed objectives and success measures</li>
            </ul>
          </div>
          <div className={styles.stage}>
            <h3>Stage 2: Design the Program</h3>
            <p>Typical activities and outputs:</p>
            <ul>
              <li>Program structure and phases</li>
              <li>Definition of key sessions</li>
              <li>Audience segmentation and learning paths</li>
              <li>Draft of scenarios and use cases</li>
            </ul>
          </div>
          <div className={styles.stage}>
            <h3>Stage 3: Deliver & Support</h3>
            <p>Typical activities and outputs:</p>
            <ul>
              <li>Delivery of agreed sessions</li>
              <li>Adjustments based on feedback</li>
              <li>Practical examples, prompts, and templates</li>
              <li>Ongoing coordination with internal teams</li>
            </ul>
          </div>
          <div className={styles.stage}>
            <h3>Stage 4: Sustain & Scale</h3>
            <p>Typical activities and outputs:</p>
            <ul>
              <li>Recommendations on how to continue</li>
              <li>Activities for champions and communities</li>
              <li>Suggestions for follow-up sessions or clinics</li>
              <li>Inputs to communications and change plans</li>
            </ul>
          </div>
        </div>
      </Section>

      <Section id="measurement" title="Readiness, feedback, and measurement" background="alt">
        <div className={styles.measurementContent}>
          <p>We work with you to define what "success" looks like for your AI upskilling and adoption initiatives, and we use simple mechanisms to gather feedback and track progress.</p>
          <div className={styles.measurementGrid}>
            <div>
              <h4>Readiness & baselines</h4>
              <p>We can help you assess initial readiness and confidence levels through simple surveys or check-ins, so you know where you are starting from.</p>
            </div>
            <div>
              <h4>Feedback during programs</h4>
              <p>We encourage ongoing feedback from participants and stakeholders, using post-session surveys and informal channels to refine the experience.</p>
            </div>
            <div>
              <h4>Indicators of progress</h4>
              <p>Rather than relying only on generic metrics, we work with you to identify indicators that matter – such as confidence, perceived usefulness, and the quality of real use cases emerging from your teams.</p>
            </div>
          </div>
        </div>
      </Section>

      <Section id="cta" background="default">
        <div className={styles.ctaContent}>
          <p>
            If you have AI upskilling, Copilot rollout, or AI adoption plans in progress – or if you are just getting started – we can help you turn them into a structured, practical program for your organisation.
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
