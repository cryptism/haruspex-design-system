import type { SVGProps } from "react";
import { glyphIcon } from "./Glyph.css";

type IconProps = SVGProps<SVGSVGElement>;

// Sun — a ring with a center dot, the traditional astrological/solar
// mark (☉) rather than a sunburst.
function SunIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 16 16" {...props}>
      <circle cx="8" cy="8" r="5" fill="none" stroke="currentColor" strokeWidth="1.8" />
      <circle cx="8" cy="8" r="1.6" fill="currentColor" />
    </svg>
  );
}

/**
 * A small curated set — kept deliberately short. Add to it rather than
 * accepting arbitrary characters: an uncurated free-text glyph prop
 * would let inconsistent-weight symbols creep into the icon vocabulary
 * one component at a time. (A `dalSegno` mark was tried and dropped —
 * every simplified version either read as "%" or wasn't recognizable at
 * icon size. Worth another attempt later, but not worth guessing at
 * again blind.)
 */
const glyphIcons = {
  sun: SunIcon,
} as const;

export type GlyphName = keyof typeof glyphIcons;

export interface GlyphProps extends IconProps {
  name: GlyphName;
  /** Width and height — Glyph has no size of its own. Ignored inside an `IconBox`, which sizes any SVG child itself. */
  size?: string | number;
}

export function Glyph({ name, size = "1em", className, ...rest }: GlyphProps) {
  const Icon = glyphIcons[name];
  return (
    <Icon
      width={size}
      height={size}
      aria-hidden="true"
      className={[glyphIcon, className].filter(Boolean).join(" ")}
      {...rest}
    />
  );
}
