import { style } from "@vanilla-extract/css";
import { face } from "../Bevel/Bevel.css";

// Deliberately the plainest box in the system: border + paper, no drop
// shadow, no chisel, no caption bar. Dialog says "this is a window";
// Panel just says "this is a group of content" — for grouping inside a
// page that isn't trying to be a desktop.
export const panel = style([
  face,
  {
    padding: "16px",
    minWidth: 0,
  },
]);
