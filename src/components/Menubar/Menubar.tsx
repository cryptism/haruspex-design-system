import type { HTMLAttributes, ReactNode } from "react";
import * as styles from "./Menubar.css";

export interface MenubarItemData {
  key: string;
  label: ReactNode;
  onSelect?: () => void;
  /** Pushes this item (and everything after it) to the right, dither-filled — the "?" help-menu convention. */
  align?: "end";
}

export interface MenubarProps extends HTMLAttributes<HTMLDivElement> {
  items: MenubarItemData[];
}

export function Menubar({ items, className, ...rest }: MenubarProps) {
  return (
    <div className={[styles.menubar, className].filter(Boolean).join(" ")} {...rest}>
      {items.map((it) => (
        <button
          key={it.key}
          type="button"
          className={it.align === "end" ? [styles.item, styles.spacerItem].join(" ") : styles.item}
          onClick={it.onSelect}
        >
          {it.label}
        </button>
      ))}
    </div>
  );
}
