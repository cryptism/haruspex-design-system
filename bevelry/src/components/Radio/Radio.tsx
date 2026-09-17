import type { InputHTMLAttributes, ReactNode } from "react";
import { useRadioGroupName } from "./RadioGroup";
import * as styles from "./Radio.css";

export interface RadioProps extends Omit<InputHTMLAttributes<HTMLInputElement>, "type"> {
  children?: ReactNode;
}

/** Use inside a `RadioGroup` — it supplies `name` if this doesn't have its own. */
export function Radio({ children, className, id, name, ...rest }: RadioProps) {
  const groupName = useRadioGroupName();
  return (
    <label className={styles.label} htmlFor={id}>
      <input
        type="radio"
        id={id}
        name={name ?? groupName}
        className={[styles.input, className].filter(Boolean).join(" ")}
        {...rest}
      />
      <span className={styles.diamond} aria-hidden="true">
        <span className={styles.dot} />
      </span>
      {children}
    </label>
  );
}
