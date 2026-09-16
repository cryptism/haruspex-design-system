import { globalStyle, style } from "@vanilla-extract/css";
import { vars } from "../../tokens/theme.css";

export const iconBox = style({
  flex: "none",
  width: "26px",
  height: "26px",
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
