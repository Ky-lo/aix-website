'use client';

import { useState, FormEvent } from 'react';
import FormField from '@/components/ui/FormField';
import Button from '@/components/ui/Button';
import { SITE_CONFIG } from '@/lib/constants';
import styles from './ContactForm.module.css';

interface FormData {
  name: string;
  organisation: string;
  role: string;
  email: string;
  country: string;
  message: string;
  source: string;
}

interface FormErrors {
  [key: string]: string;
}

export default function ContactForm() {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    organisation: '',
    role: '',
    email: '',
    country: '',
    message: '',
    source: '',
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const validateForm = (): FormErrors => {
    const newErrors: FormErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
    }

    if (!formData.organisation.trim()) {
      newErrors.organisation = 'Organisation is required';
    }

    if (!formData.role.trim()) {
      newErrors.role = 'Role/Department is required';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Work email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
    }

    if (!formData.message.trim()) {
      newErrors.message = 'Please tell us what you would like to discuss';
    }

    return newErrors;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors((prev) => {
        const newErrors = { ...prev };
        delete newErrors[name];
        return newErrors;
      });
    }
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    const validationErrors = validateForm();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      setIsSubmitting(false);
      return;
    }

    // Format email body
    const subject = 'Contact from AI Democratix Website';
    const body = `
Name: ${formData.name}
Organisation: ${formData.organisation}
Role/Department: ${formData.role}
Work Email: ${formData.email}
${formData.country ? `Country/Region: ${formData.country}` : ''}

What would you like to discuss?
${formData.message}

${formData.source ? `How did you hear about us?\n${formData.source}` : ''}
    `.trim();

    // Create mailto link
    const mailtoLink = `mailto:${SITE_CONFIG.email}?subject=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(body)}`;

    // Open email client
    window.location.href = mailtoLink;

    setIsSubmitting(false);
  };

  return (
    <form onSubmit={handleSubmit} className={styles.form}>
      <FormField
        label="Name"
        name="name"
        type="text"
        required
        value={formData.name}
        onChange={handleChange}
        error={errors.name}
      />

      <FormField
        label="Organisation"
        name="organisation"
        type="text"
        required
        value={formData.organisation}
        onChange={handleChange}
        error={errors.organisation}
      />

      <FormField
        label="Role / Department"
        name="role"
        type="text"
        required
        value={formData.role}
        onChange={handleChange}
        error={errors.role}
      />

      <FormField
        label="Work email"
        name="email"
        type="email"
        required
        value={formData.email}
        onChange={handleChange}
        error={errors.email}
      />

      <FormField
        label="Country / Region"
        name="country"
        type="text"
        value={formData.country}
        onChange={handleChange}
      />

      <FormField
        label="What would you like to discuss?"
        name="message"
        type="textarea"
        required
        rows={6}
        value={formData.message}
        onChange={handleChange}
        error={errors.message}
      />

      <FormField
        label="How did you hear about AI Democratix?"
        name="source"
        type="text"
        value={formData.source}
        onChange={handleChange}
      />

      <p className={styles.privacy}>We will use your details only to respond to your enquiry.</p>

      <div className={styles.submitWrapper}>
        <Button variant="primary" size="large" onClick={() => {}}>
          {isSubmitting ? 'Sending...' : 'Send Message'}
        </Button>
      </div>
    </form>
  );
}
