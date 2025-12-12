import { ProcessStepProps } from '@/types';
import styles from './ProcessStep.module.css';

export default function ProcessStep({
  number,
  title,
  description,
  isLast = false,
}: ProcessStepProps) {
  return (
    <div className={styles.step}>
      <div className={styles.badge}>{number}</div>
      <div className={styles.content}>
        <h3 className={styles.title}>{title}</h3>
        <p className={styles.description}>{description}</p>
      </div>
      {!isLast && <div className={styles.connector} />}
    </div>
  );
}
