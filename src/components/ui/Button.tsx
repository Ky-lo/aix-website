import Link from 'next/link';
import { ButtonProps } from '@/types';
import styles from './Button.module.css';

export default function Button({
  variant = 'primary',
  size = 'medium',
  href,
  onClick,
  children,
  className = '',
}: ButtonProps) {
  const classNames = `${styles.button} ${styles[variant]} ${styles[size]} ${className}`;

  if (href) {
    return (
      <Link href={href} className={classNames}>
        {children}
      </Link>
    );
  }

  return (
    <button onClick={onClick} className={classNames}>
      {children}
    </button>
  );
}
