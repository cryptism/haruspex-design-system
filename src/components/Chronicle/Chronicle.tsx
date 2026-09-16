import { type HTMLAttributes, type ReactNode, useEffect, useRef } from "react";
import * as styles from "./Chronicle.css";

export interface ChronicleEntryData {
  id: string;
  /** Short tag before the line — e.g. an epoch/step number. Rendered in the numeric face, muted. */
  meta?: ReactNode;
  body: ReactNode;
}

export interface ChronicleProps extends HTMLAttributes<HTMLDivElement> {
  entries: ChronicleEntryData[];
  /** Shows a blinking text cursor after the last line, as if still being typed. */
  live?: boolean;
}

/**
 * A fixed-height scrolling log — auto-scrolls to the newest entry. Feed it
 * heretical-historian's step/query results directly: `meta` for the epoch,
 * `body` for the event's own prose.
 */
export function Chronicle({ entries, live = false, className, ...rest }: ChronicleProps) {
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = scrollRef.current;
    if (el) el.scrollTop = el.scrollHeight;
  }, [entries.length]);

  return (
    <div ref={scrollRef} className={[styles.chronicle, className].filter(Boolean).join(" ")} {...rest}>
      {entries.map((e, i) => {
        const isLast = i === entries.length - 1;
        return (
          <div key={e.id} className={styles.entry}>
            {e.meta !== undefined && <span className={styles.entryMeta}>{e.meta}</span>}
            <p className={styles.entryBody}>
              {e.body}
              {live && isLast && <span className={styles.cursor} aria-hidden="true" />}
            </p>
          </div>
        );
      })}
    </div>
  );
}
