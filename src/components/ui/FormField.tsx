import { FormFieldProps } from '@/types';
import styles from './FormField.module.css';

export default function FormField({
  label,
  name,
  type,
  required = false,
  placeholder,
  rows = 4,
  error,
  value,
  onChange,
}: FormFieldProps) {
  const inputProps = {
    id: name,
    name,
    required,
    placeholder,
    value,
    onChange,
    className: `${styles.input} ${error ? styles.error : ''}`,
    'aria-invalid': error ? ('true' as const) : ('false' as const),
    'aria-describedby': error ? `${name}-error` : undefined,
  };

  return (
    <div className={styles.fieldWrapper}>
      <label htmlFor={name} className={styles.label}>
        {label}
        {required && <span className={styles.required}> *</span>}
      </label>
      {type === 'textarea' ? (
        <textarea {...inputProps} rows={rows} />
      ) : (
        <input {...inputProps} type={type} />
      )}
      {error && (
        <p id={`${name}-error`} className={styles.errorMessage} role="alert">
          {error}
        </p>
      )}
    </div>
  );
}
