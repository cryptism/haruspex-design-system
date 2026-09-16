import { style } from "@vanilla-extract/css";
import { vars } from "../../tokens/theme.css";

/**
 * The dithered "drop shadow" — a `::before` offset behind the element,
 * filled with the conic dither pattern instead of a blurred alpha shadow
 * (the source medium, print, has no alpha channel to blur). Compose onto
 * any `position:relative` raised element.
 */
export const raisedShadow = style({
  position: "relative",
  selectors: {
    "&::before": {
      content: '""',
      position: "absolute",
      left: "6px",
      top: "6px",
      right: "-6px",
      bottom: "-6px",
      backgroundImage: vars.dither.d50,
      backgroundSize: "4px 4px",
      zIndex: -1,
    },
  },
});

/** Paper face + ink outline shared by every raised surface (dialog, button, field). */
export const face = style({
  position: "relative",
  background: vars.color.paper,
  color: vars.color.ink,
  border: `2px solid ${vars.color.ink}`,
});

/** Inner chisel line for a *raised* face — dither hugs the bottom+right edge. */
export const raisedChisel = style({
  selectors: {
    "&::after": {
      content: '""',
      position: "absolute",
      inset: "3px",
      pointerEvents: "none",
      border: `1px solid ${vars.color.ink}`,
      backgroundImage: `${vars.dither.d25}, ${vars.dither.d25}`,
      backgroundPosition: "left bottom, right top",
      backgroundSize: "3px 3px, 3px 3px",
      backgroundRepeat: "repeat-x, repeat-y",
    },
  },
});

/** Sunken field: same paper+ink face, chisel flipped to top+left, no drop shadow. */
export const sunken = style([
  face,
  {
    selectors: {
      "&::after": {
        content: '""',
        position: "absolute",
        inset: 0,
        pointerEvents: "none",
        backgroundImage: `${vars.dither.d25}, ${vars.dither.d25}`,
        backgroundPosition: "left top, left top",
        backgroundSize: "3px 3px, 3px 3px",
        backgroundRepeat: "repeat-x, repeat-y",
      },
    },
  },
]);

/** Sparse dither fill — caption bars, menu-corner, calibration-style panels. */
export const ditherFill12 = style({
  backgroundImage: vars.dither.d12,
  backgroundSize: "4px 4px",
});
