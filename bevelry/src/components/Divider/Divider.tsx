import type { HTMLAttributes } from "react";
import { divider } from "./Divider.css";

/** A double-ruled horizontal break — the source poster's own title-divider construction, used for content instead. */
export function Divider({ className, ...rest }: HTMLAttributes<HTMLHRElement>) {
  return <hr className={[divider, className].filter(Boolean).join(" ")} {...rest} />;
}
