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
}

/**
 * A fixed-height scrolling log — auto-scrolls to the newest entry. Feed it
 * heretical-historian's step/query results directly: `meta` for the epoch,
 * `body` for the event's own prose.
 */
export function Chronicle({ entries, className, ...rest }: ChronicleProps) {
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = scrollRef.current;
    if (el) el.scrollTop = el.scrollHeight;
  }, [entries.length]);

  return (
    <div ref={scrollRef} className={[styles.chronicle, className].filter(Boolean).join(" ")} {...rest}>
      {entries.map((e) => (
        <div key={e.id} className={styles.entry}>
          {e.meta !== undefined && <span className={styles.entryMeta}>{e.meta}</span>}
          <p className={styles.entryBody}>{e.body}</p>
        </div>
      ))}
    </div>
  );
}
