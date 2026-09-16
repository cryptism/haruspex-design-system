import { style } from "@vanilla-extract/css";
import { vars } from "../../tokens/theme.css";
import { fontFamily } from "../../tokens/typography.css";
import { ditherFill12, face, raisedChisel, raisedShadow } from "../Bevel/Bevel.css";

export const dialog = style([raisedShadow, { display: "inline-flex", flexDirection: "column" }]);

export const dialogFace = style([face, raisedChisel, { display: "flex", flexDirection: "column" }]);

export const caption = style([
  ditherFill12,
  {
    position: "relative",
    zIndex: 1,
    display: "flex",
    alignItems: "center",
    gap: "6px",
    // Generous, asymmetric padding rather than a fixed height flush with
    // the face's edges — the widgets need real clearance from both the
    // 2px outer border and raisedChisel's inset dither line (3px in), or
    // they read as colliding with it in the corner. The source poster
    // sidesteps this entirely by absolutely positioning its caption 5px
    // inset from the face; padding is the equivalent here.
    padding: "6px 10px 6px 10px",
    borderBottom: `2px solid ${vars.color.ink}`,
  },
]);

export const captionName = style({
  fontFamily: fontFamily.body,
  fontSize: "11px",
  fontWeight: 700,
  letterSpacing: "0.14em",
  color: vars.color.ink,
});

export const widgets = style({
  marginLeft: "auto",
  display: "flex",
  gap: "5px",
});

export const widget = style({
  width: "16px",
  height: "16px",
  padding: 0,
  border: `2px solid ${vars.color.ink}`,
  background: vars.color.paper,
  color: vars.color.ink,
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  fontSize: "9px",
  fontWeight: 700,
  lineHeight: 1,
  cursor: "pointer",
  selectors: {
    "&:hover": {
      background: vars.color.ink,
      color: vars.color.paper,
    },
  },
});

export const body = style({
  position: "relative",
  zIndex: 1,
  padding: "14px 16px",
});
