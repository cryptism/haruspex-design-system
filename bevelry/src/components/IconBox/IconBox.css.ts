import { globalStyle, style } from "@vanilla-extract/css";
import { vars } from "../../tokens/theme.css";

// Square, like the source poster's own .iconbox — tried a circle (to
// disambiguate from Checkbox's square and Radio's diamond) but square
// reads fine in practice, so back to it. Glyph.tsx is the actual answer
// to "how do we tell it apart from a checkbox": a checkbox is empty
// unless checked, an icon box always holds a mark.
export const iconBox = style({
  flex: "none",
  boxSizing: "border-box",
  width: "26px",
  height: "26px",
  fontSize: "15px",
  color: vars.color.ink,
  border: `2px solid ${vars.color.ink}`,
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
});

globalStyle(`${iconBox} svg`, {
  width: "70%",
  height: "70%",
  fill: vars.color.ink,
  shapeRendering: "crispEdges",
});
