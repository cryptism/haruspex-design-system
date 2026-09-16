import type { InputHTMLAttributes, ReactNode } from "react";
import * as styles from "./Checkbox.css";

export interface CheckboxProps extends Omit<InputHTMLAttributes<HTMLInputElement>, "type"> {
  children?: ReactNode;
}

export function Checkbox({ children, className, id, ...rest }: CheckboxProps) {
  return (
    <label className={styles.label} htmlFor={id}>
      <input type="checkbox" id={id} className={[styles.input, className].filter(Boolean).join(" ")} {...rest} />
      <span className={styles.box} aria-hidden="true">
        <svg className={styles.mark} viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M3 8.5 6.5 12 13 4.5" />
        </svg>
      </span>
      {children}
    </label>
  );
}
