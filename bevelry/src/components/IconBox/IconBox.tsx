import type { HTMLAttributes, ReactNode } from "react";
import { iconBox } from "./IconBox.css";

export function IconBox({ children, className, ...rest }: HTMLAttributes<HTMLSpanElement> & { children: ReactNode }) {
  return (
    <span className={[iconBox, className].filter(Boolean).join(" ")} {...rest}>
      {children}
    </span>
  );
}
