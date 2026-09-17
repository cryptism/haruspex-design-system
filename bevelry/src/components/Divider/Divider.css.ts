import { style } from "@vanilla-extract/css";
import { vars } from "../../tokens/theme.css";

// The source poster's own .divider (a title-flourish rule, 58% width,
// centered) — same double-ruled construction, full width by default for
// use as a general content separator instead.
export const divider = style({
  border: "none",
  margin: 0,
  height: "5px",
  borderTop: `2px solid ${vars.color.ink}`,
  borderBottom: `2px solid ${vars.color.ink}`,
});
