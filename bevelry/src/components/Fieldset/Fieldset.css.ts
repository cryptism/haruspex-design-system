import { style } from "@vanilla-extract/css";
import { vars } from "../../tokens/theme.css";
import { fontFamily } from "../../tokens/typography.css";
import { face } from "../Bevel/Bevel.css";

// A labeled Panel — the legend sits on the border line (native <legend>
// behavior) with a paper-colored background masking the line behind it,
// same "cut into the border" trick as an OS-native form dialog.
export const fieldset = style([
  face,
  {
    padding: "20px 16px 16px",
    margin: 0,
    minWidth: 0,
  },
]);

export const legend = style({
  padding: "0 8px",
  marginLeft: "4px",
  fontFamily: fontFamily.ui,
  fontSize: "10px",
  fontWeight: 700,
  letterSpacing: "0.12em",
  textTransform: "uppercase",
  color: vars.color.ink,
  background: vars.color.paper,
});
