import type { HTMLAttributes } from "react";
import * as styles from "./Typography.css";

export interface DisplayTitleProps extends HTMLAttributes<HTMLHeadingElement> {
  /** Jacquard 12 is illegible below ~24px and shouldn't be set in all caps — both properties of the typeface, not this component. */
  as?: "h1" | "h2";
}

export function DisplayTitle({ as: Tag = "h1", className, ...rest }: DisplayTitleProps) {
  return <Tag className={[styles.display, className].filter(Boolean).join(" ")} {...rest} />;
}

export function BodyText({ className, ...rest }: HTMLAttributes<HTMLParagraphElement>) {
  return <p className={[styles.body, className].filter(Boolean).join(" ")} {...rest} />;
}

export interface NumericReadoutProps extends HTMLAttributes<HTMLSpanElement> {
  size?: "sm" | "md" | "lg";
}

const numericSize: Record<NonNullable<NumericReadoutProps["size"]>, string> = {
  sm: "14px",
  md: "20px",
  lg: "32px",
};

export function NumericReadout({ size = "md", className, style, ...rest }: NumericReadoutProps) {
  return (
    <span
      className={[styles.numeric, className].filter(Boolean).join(" ")}
      style={{ fontSize: numericSize[size], ...style }}
      {...rest}
    />
  );
}
