import { style } from "@vanilla-extract/css";

// Drawn shapes, not font glyphs — a Unicode symbol's ink is rarely
// centered in its own advance width (worse for astrological/musical
// ranges, which most fonts treat as an afterthought), so no amount of
// box centering fixed the uneven padding. A drawn shape has an exact,
// known bounding box instead. shapeRendering:crispEdges gives the
// pixelated look directly — no hunting for a font that happens to
// render two arbitrary symbols well.
export const glyphIcon = style({
  display: "block",
  color: "currentColor",
  shapeRendering: "crispEdges",
});
