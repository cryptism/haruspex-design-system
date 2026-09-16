import type { HTMLAttributes } from "react";
import { panel } from "./Panel.css";

/** A plain bordered content block — see Fieldset for one with a labeled edge, Dialog for one with a title bar. */
export function Panel({ className, ...rest }: HTMLAttributes<HTMLDivElement>) {
  return <div className={[panel, className].filter(Boolean).join(" ")} {...rest} />;
}
