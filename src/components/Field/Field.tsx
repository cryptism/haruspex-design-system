import type { HTMLAttributes, InputHTMLAttributes, ReactNode } from "react";
import * as styles from "./Field.css";

export function SunkenField({ className, children, ...rest }: HTMLAttributes<HTMLDivElement>) {
  return (
    <div className={[styles.sunkenField, className].filter(Boolean).join(" ")} {...rest}>
      <span className={styles.sunkenValue}>{children}</span>
    </div>
  );
}

export interface StatRowProps {
  label: ReactNode;
  children: ReactNode;
}

/** Label + sunken value, e.g. `CLASS | Ranger`. */
export function StatRow({ label, children }: StatRowProps) {
  return (
    <div className={styles.row}>
      <span className={styles.label}>{label}</span>
      <SunkenField>{children}</SunkenField>
    </div>
  );
}

export interface TextInputProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: ReactNode;
}

/** A real, typeable field in the same sunken language — for seed/step entry, not just readouts. */
export function TextInput({ label, id, className, ...rest }: TextInputProps) {
  const input = <input id={id} className={[styles.input, className].filter(Boolean).join(" ")} {...rest} />;
  if (!label) return input;
  return (
    <div className={styles.row}>
      <label htmlFor={id} className={styles.label}>
        {label}
      </label>
      {input}
    </div>
  );
}
