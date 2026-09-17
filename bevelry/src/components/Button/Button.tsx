import type { ButtonHTMLAttributes } from "react";
import { button } from "./Button.css";

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  /** "default" is the dotted-ring emphasis a dialog gives its Enter-key action. */
  emphasis?: "plain" | "default";
}

export function Button({ emphasis = "plain", className, type = "button", ...rest }: ButtonProps) {
  return (
    <button
      type={type}
      className={[button({ emphasis }), className].filter(Boolean).join(" ")}
      {...rest}
    />
  );
}
