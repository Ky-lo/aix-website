import Section from '@/components/ui/Section';
import Card from '@/components/ui/Card';
import Button from '@/components/ui/Button';
import { GraduationCap, Sparkles, Users2, TrendingUp } from 'lucide-react';
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
        title="Programs & Services"
        intro="AI Democratix designs structured AI upskilling and adoption programs that fit your organisation – your roles, your workflows, and your level of AI readiness. We focus on helping your people use AI confidently in the tools they already work with, especially Microsoft 365 Copilot."
        background="alt"
      >
        <div className={styles.keyPoints}>
          <ul>
            <li>AI Upskilling & AI Fluency programs</li>
            <li>Microsoft Copilot onboarding and usage journeys</li>
            <li>AI adoption and champions support</li>
          </ul>
        </div>
      </Section>

      <Section
        id="program-pillars"
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

      <Section id="pillar-1" title="AI Upskilling & AI Fluency" background="alt">
        <div className={styles.pillarDetail}>
          <p className={styles.description}>
            Build a shared understanding of AI and practical prompting skills across your teams, so employees know when and how to use AI in their day-to-day work.
          </p>
          <div className={styles.detailGrid}>
            <div>
              <h4>Who this is for</h4>
              <ul>
                <li>Employees and knowledge workers who are new to AI or Copilot</li>
                <li>People managers and team leads who need to model and support AI usage</li>
                <li>HR and L&D teams planning AI learning journeys</li>
              </ul>
            </div>
            <div>
              <h4>Typical formats</h4>
              <ul>
                <li>Awareness and "AI 101" sessions for broad audiences</li>
                <li>Role-relevant hands-on workshops</li>
                <li>Multi-session learning paths over several weeks</li>
              </ul>
            </div>
            <div>
              <h4>Typical topics</h4>
              <ul>
                <li>What AI is (and is not) in practical terms</li>
                <li>Prompting fundamentals and patterns for everyday tasks</li>
                <li>Using AI for research, writing, communication, and summarisation</li>
                <li>Safe and responsible AI usage within enterprise constraints</li>
              </ul>
            </div>
            <div>
              <h4>Outcomes</h4>
              <ul>
                <li>Employees understand when and how to use AI in their work</li>
                <li>Increased confidence and willingness to experiment with AI tools</li>
                <li>Shared language and concepts around AI and prompting across teams</li>
              </ul>
            </div>
          </div>
        </div>
      </Section>

      <Section id="pillar-2" title="Microsoft Copilot Onboarding" background="default">
        <div className={styles.pillarDetail}>
          <p className={styles.description}>
            Help your employees move beyond "Copilot is available" announcements into real, meaningful usage embedded in Microsoft 365 workflows.
          </p>
          <div className={styles.detailGrid}>
            <div>
              <h4>Who this is for</h4>
              <ul>
                <li>Organisations rolling out Microsoft Copilot licences</li>
                <li>Business units piloting Copilot in specific teams</li>
                <li>HR, L&D, and IT teams responsible for Copilot enablement</li>
              </ul>
            </div>
            <div>
              <h4>Typical formats</h4>
              <ul>
                <li>Copilot awareness and demo sessions</li>
                <li>Hands-on prompt-crafting workshops for key roles</li>
                <li>Scenario-based labs using realistic work examples</li>
                <li>Follow-up Office Hours or clinics</li>
              </ul>
            </div>
            <div>
              <h4>Typical topics</h4>
              <ul>
                <li>Using Copilot in Outlook, Word, PowerPoint, Excel, and Teams</li>
                <li>Crafting prompts that match real work scenarios</li>
                <li>Reviewing and refining AI-generated outputs</li>
                <li>Working within security, compliance, and data boundaries</li>
              </ul>
            </div>
            <div>
              <h4>Outcomes</h4>
              <ul>
                <li>Higher confidence using Copilot in everyday Microsoft 365 work</li>
                <li>More employees using Copilot for meaningful tasks</li>
                <li>Clear understanding of good prompting practices and review habits</li>
              </ul>
            </div>
          </div>
        </div>
      </Section>

      <Section id="pillar-3" title="AI Adoption & Champions Programs" background="alt">
        <div className={styles.pillarDetail}>
          <p className={styles.description}>
            Create internal momentum, support structures, and communities that help AI usage grow and sustain beyond the initial rollout.
          </p>
          <div className={styles.detailGrid}>
            <div>
              <h4>Who this is for</h4>
              <ul>
                <li>Organisations that have started AI or Copilot pilots and want to scale</li>
                <li>HR, L&D, and transformation teams responsible for change and adoption</li>
                <li>Identified AI champions and community leads</li>
              </ul>
            </div>
            <div>
              <h4>Typical formats</h4>
              <ul>
                <li>Champions onboarding and enablement sessions</li>
                <li>Regular Office Hours, Q&A clinics, and use-case clinics</li>
                <li>Community-of-practice support and facilitation</li>
                <li>Feedback and insight sessions to refine programs over time</li>
              </ul>
            </div>
            <div>
              <h4>Typical topics</h4>
              <ul>
                <li>How to be an effective AI champion</li>
                <li>Facilitating peer learning and sharing success stories</li>
                <li>Identifying and refining high-value AI use cases</li>
                <li>Gathering feedback and surfacing risks or blockers</li>
              </ul>
            </div>
            <div>
              <h4>Outcomes</h4>
              <ul>
                <li>A network of internal champions who can support colleagues</li>
                <li>Ongoing learning and sharing around AI usage</li>
                <li>Better visibility into what is working and where support is needed</li>
              </ul>
            </div>
          </div>
        </div>
      </Section>

      <Section id="pillar-4" title="Advisory on AI Upskilling Strategy" background="default">
        <div className={styles.advisoryContent}>
          <p>
            For organisations that are still shaping their AI learning and adoption plans, AI Democratix can work alongside HR, L&D, transformation, and IT leaders to design a pragmatic roadmap.
          </p>
          <p>
            This can include clarifying objectives, mapping roles and needs, sequencing initiatives, and aligning stakeholders on a shared approach.
          </p>
        </div>
      </Section>

      <Section id="tailoring" title="How we tailor programs" background="alt">
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
