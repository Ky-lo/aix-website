import { CardProps } from '@/types';
import styles from './Card.module.css';

export default function Card({
  icon,
  title,
  description,
  bullets,
  hoverable = false,
  className = '',
}: CardProps) {
  return (
    <div className={`${styles.card} ${hoverable ? styles.hoverable : ''} ${className}`}>
      {icon && <div className={styles.icon}>{icon}</div>}
      <h3 className={styles.title}>{title}</h3>
      {description && <p className={styles.description}>{description}</p>}
      {bullets && bullets.length > 0 && (
        <ul className={styles.bullets}>
          {bullets.map((bullet, index) => (
            <li key={index}>{bullet}</li>
          ))}
        </ul>
      )}
    </div>
  );
}
