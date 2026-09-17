import type { AnchorHTMLAttributes, ButtonHTMLAttributes, ReactNode } from "react";
import { IconBox } from "../IconBox/IconBox";
import * as styles from "./ListButton.css";

interface ListButtonContentProps {
  icon?: ReactNode;
  kicker: ReactNode;
  children: ReactNode;
}

function Content({ icon, kicker, children }: ListButtonContentProps) {
  return (
    <>
      {icon && <IconBox>{icon}</IconBox>}
      <span className={styles.text}>
        <span className={styles.kicker}>{kicker}</span>
        <span className={styles.value}>{children}</span>
      </span>
    </>
  );
}

export type ListButtonProps = ListButtonContentProps &
  (
    | ({ as?: "button" } & ButtonHTMLAttributes<HTMLButtonElement>)
    | ({ as: "a" } & AnchorHTMLAttributes<HTMLAnchorElement>)
  );

/** A full-width row action — icon, kicker label, and the value as its own underlined link text. Reverse-video on hover/active. */
export function ListButton({ icon, kicker, children, className, ...rest }: ListButtonProps) {
  const classes = [styles.listButton, className].filter(Boolean).join(" ");
  if (rest.as === "a") {
    const { as: _as, ...anchorRest } = rest;
    return (
      <a className={classes} {...anchorRest}>
        <Content icon={icon} kicker={kicker}>
          {children}
        </Content>
      </a>
    );
  }
  const { as: _as, type = "button", ...buttonRest } = rest as { as?: "button" } & ButtonHTMLAttributes<HTMLButtonElement>;
  return (
    <button type={type} className={classes} {...buttonRest}>
      <Content icon={icon} kicker={kicker}>
        {children}
      </Content>
    </button>
  );
}
