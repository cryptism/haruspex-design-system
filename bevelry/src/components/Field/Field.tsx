import type { HTMLAttributes, InputHTMLAttributes, ReactNode, SelectHTMLAttributes, TextareaHTMLAttributes } from "react";
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

export interface TextAreaProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  label?: ReactNode;
}

export function TextArea({ label, id, className, ...rest }: TextAreaProps) {
  const area = <textarea id={id} className={[styles.textarea, className].filter(Boolean).join(" ")} {...rest} />;
  if (!label) return area;
  return (
    <div className={styles.row} style={{ alignItems: "flex-start" }}>
      <label htmlFor={id} className={styles.label} style={{ paddingTop: "4px" }}>
        {label}
      </label>
      {area}
    </div>
  );
}

export interface SelectProps extends SelectHTMLAttributes<HTMLSelectElement> {
  label?: ReactNode;
}

export function Select({ label, id, className, children, ...rest }: SelectProps) {
  const control = (
    <span className={styles.selectWrap}>
      <select id={id} className={[styles.select, className].filter(Boolean).join(" ")} {...rest}>
        {children}
      </select>
      <span className={styles.selectChevron} aria-hidden="true">
        ▼
      </span>
    </span>
  );
  if (!label) return control;
  return (
    <div className={styles.row}>
      <label htmlFor={id} className={styles.label}>
        {label}
      </label>
      {control}
    </div>
  );
}
