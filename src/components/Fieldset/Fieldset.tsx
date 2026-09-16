import type { FieldsetHTMLAttributes, ReactNode } from "react";
import * as styles from "./Fieldset.css";

export interface FieldsetProps extends FieldsetHTMLAttributes<HTMLFieldSetElement> {
  legend: ReactNode;
}

/** A labeled Panel — real `<fieldset>`/`<legend>`, so it groups correctly for assistive tech too. */
export function Fieldset({ legend, children, className, ...rest }: FieldsetProps) {
  return (
    <fieldset className={[styles.fieldset, className].filter(Boolean).join(" ")} {...rest}>
      <legend className={styles.legend}>{legend}</legend>
      {children}
    </fieldset>
  );
}
