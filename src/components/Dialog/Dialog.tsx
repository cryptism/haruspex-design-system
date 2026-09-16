import type { HTMLAttributes, ReactNode } from "react";
import * as styles from "./Dialog.css";

export interface DialogProps extends HTMLAttributes<HTMLDivElement> {
  /** Caption-bar text — GEM/Mac convention is an all-caps "filename.ext"-style handle. */
  title: string;
  children: ReactNode;
}

/**
 * A titled panel: caption bar over a raised, chiseled face. No window
 * controls — a minimize/close widget pair implies a real multi-window
 * desktop, which a first-pass web app isn't taking on. Bring them back
 * (see git history on Dialog.css.ts's `widget`/`widgets` styles) if this
 * ever becomes one.
 */
export function Dialog({ title, children, className, ...rest }: DialogProps) {
  return (
    <div className={[styles.dialog, className].filter(Boolean).join(" ")} {...rest}>
      <div className={styles.dialogFace}>
        <div className={styles.caption}>
          <span className={styles.captionName}>{title}</span>
        </div>
        <div className={styles.body}>{children}</div>
      </div>
    </div>
  );
}
