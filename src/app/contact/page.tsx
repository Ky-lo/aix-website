import Section from '@/components/ui/Section';
import ContactForm from '@/components/contact/ContactForm';
import { Mail, Linkedin } from 'lucide-react';
import { SITE_CONFIG } from '@/lib/constants';
import styles from './page.module.css';

export const metadata = {
  title: `Contact Us - ${SITE_CONFIG.name}`,
  description: 'Get in touch with AI Democratix to discuss AI upskilling and Copilot adoption programs for your organisation.',
};

export default function ContactPage() {
  return (
    <div>
      <Section
        id="contact-header"
        title="Contact us"
        intro="If you are planning or running AI upskilling, Microsoft Copilot onboarding, or AI adoption initiatives, we would be happy to explore how we can support you. Share a bit about your organisation and what you are looking for, and we will get back to you to discuss next steps."
        background="alt"
      >
        <div className={styles.scenarios}>
          <h3>When organisations typically contact us</h3>
          <ul>
            <li>You are planning an AI upskilling or AI fluency program for employees or leaders.</li>
            <li>You are rolling out Microsoft Copilot and want a structured onboarding and adoption journey.</li>
            <li>You have started pilots and want to scale AI usage with champions and support.</li>
            <li>You need help shaping an overall AI upskilling and adoption roadmap.</li>
          </ul>
        </div>
      </Section>

      <Section id="contact-form" background="default">
        <ContactForm />
      </Section>

      <Section
        id="other-contact"
        title="Other ways to connect"
        background="alt"
      >
        <div className={styles.contactMethods}>
          <a href={`mailto:${SITE_CONFIG.email}`} className={styles.contactMethod}>
            <Mail size={24} />
            <span>{SITE_CONFIG.email}</span>
          </a>
          <a href={SITE_CONFIG.linkedin} target="_blank" rel="noopener noreferrer" className={styles.contactMethod}>
            <Linkedin size={24} />
            <span>linkedin.com/in/yamseng</span>
          </a>
        </div>
      </Section>
    </div>
  );
}
