import Section from '@/components/ui/Section';
import ContactForm from '@/components/contact/ContactForm';
import { Mail, Linkedin, MessageCircle } from 'lucide-react';
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
        eyebrow="GET IN TOUCH"
        eyebrowIcon={<MessageCircle />}
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

    </div>
  );
}
