import type { HTMLAttributes, ReactNode } from "react";
import * as styles from "./Dialog.css";

export interface DialogProps extends HTMLAttributes<HTMLDivElement> {
  /** Caption-bar text — GEM/Mac convention is an all-caps "filename.ext"-style handle. */
  title: string;
  onMinimize?: () => void;
  onClose?: () => void;
  children: ReactNode;
}

/** A window: caption bar with widgets, over a raised, chiseled face. */
export function Dialog({ title, onMinimize, onClose, children, className, ...rest }: DialogProps) {
  return (
    <div className={[styles.dialog, className].filter(Boolean).join(" ")} {...rest}>
      <div className={styles.dialogFace}>
        <div className={styles.caption}>
          <span className={styles.captionName}>{title}</span>
          <div className={styles.widgets}>
            {onMinimize && (
              <button type="button" className={styles.widget} onClick={onMinimize} aria-label="Minimize">
                –
              </button>
            )}
            {onClose && (
              <button type="button" className={styles.widget} onClick={onClose} aria-label="Close">
                ×
              </button>
            )}
          </div>
        </div>
        <div className={styles.body}>{children}</div>
      </div>
    </div>
  );
}
