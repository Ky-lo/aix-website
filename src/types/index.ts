export interface NavLink {
  href: string;
  label: string;
}

export interface ButtonProps {
  variant?: 'primary' | 'secondary' | 'ghost';
  size?: 'small' | 'medium' | 'large';
  href?: string;
  onClick?: () => void;
  children: React.ReactNode;
  className?: string;
}

export interface CardProps {
  icon?: React.ReactNode;
  title: string;
  description?: string;
  bullets?: string[];
  hoverable?: boolean;
  className?: string;
}

export interface SectionProps {
  id?: string;
  eyebrow?: string;
  title?: string;
  intro?: string;
  background?: 'default' | 'alt';
  children?: React.ReactNode;
  className?: string;
}

export interface FormFieldProps {
  label: string;
  name: string;
  type: 'text' | 'email' | 'textarea';
  required?: boolean;
  placeholder?: string;
  rows?: number;
  error?: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
}

export interface ProcessStepProps {
  number: number;
  title: string;
  description: string;
  isLast?: boolean;
}
