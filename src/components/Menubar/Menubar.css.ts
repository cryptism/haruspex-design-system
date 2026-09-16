import { style } from "@vanilla-extract/css";
import { vars } from "../../tokens/theme.css";
import { fontFamily } from "../../tokens/typography.css";
import { ditherFill12, face } from "../Bevel/Bevel.css";

export const menubar = style([
  face,
  {
    display: "flex",
    fontFamily: fontFamily.ui,
    fontSize: "10.5px",
    fontWeight: 700,
    letterSpacing: "0.1em",
  },
]);

export const item = style({
  boxSizing: "border-box",
  // Same class of bug as box-sizing: a <button> never inherits
  // font-family/size/weight from an ancestor by default — it uses the
  // browser's own UA font (Arial, on most systems) unless told
  // otherwise. `menubar`'s font declarations on the container div never
  // reached this button at all.
  font: "inherit",
  padding: "6px 12px",
  borderRight: `2px solid ${vars.color.ink}`,
  background: "none",
  color: vars.color.ink,
  cursor: "pointer",
  selectors: {
    "&:last-child": { borderRight: "none" },
    "&:hover": { background: vars.color.ink, color: vars.color.paper },
  },
});

export const spacerItem = style([ditherFill12, { marginLeft: "auto" }]);
