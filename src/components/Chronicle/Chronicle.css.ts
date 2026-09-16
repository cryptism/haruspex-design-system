import { keyframes, style } from "@vanilla-extract/css";
import { vars } from "../../tokens/theme.css";
import { fontFamily } from "../../tokens/typography.css";
import { sunken } from "../Bevel/Bevel.css";

/**
 * PC-88-era message window: a fixed-height text strip a game streamed
 * narration into line by line, rather than a dialog that appears and is
 * dismissed. Kept in Bevelry's own bevel language (sunken chisel,
 * ink/paper, no hue) rather than importing PC-88's box-drawing border —
 * one border vocabulary for the whole track.
 */
export const chronicle = style([
  sunken,
  {
    display: "flex",
    flexDirection: "column",
    gap: "6px",
    padding: "10px 12px",
    overflowY: "auto",
    scrollbarWidth: "thin",
  },
]);

export const entry = style({
  display: "flex",
  alignItems: "baseline",
  gap: "10px",
});

export const entryMeta = style({
  flex: "0 0 auto",
  fontFamily: fontFamily.numeric,
  fontSize: "11px",
  fontWeight: 700,
  opacity: 0.6,
  color: vars.color.ink,
  minWidth: "3.5em",
});

export const entryBody = style({
  fontFamily: fontFamily.body,
  fontWeight: 500,
  fontSize: "13px",
  lineHeight: 1.4,
  color: vars.color.ink,
  margin: 0,
});

const blink = keyframes({
  "0%, 49%": { opacity: 1 },
  "50%, 100%": { opacity: 0 },
});

export const cursor = style({
  display: "inline-block",
  width: "0.55em",
  height: "1em",
  marginLeft: "2px",
  verticalAlign: "text-bottom",
  background: vars.color.ink,
  animation: `${blink} 1s step-end infinite`,
  "@media": {
    "(prefers-reduced-motion: reduce)": {
      animation: "none",
      opacity: 1,
    },
  },
});
