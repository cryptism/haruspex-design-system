import { style } from "@vanilla-extract/css";
import { vars } from "../../tokens/theme.css";
import { fontFamily } from "../../tokens/typography.css";
import { face, raisedChisel, raisedShadow } from "../Bevel/Bevel.css";

export const dialog = style([raisedShadow, { display: "inline-flex", flexDirection: "column" }]);

// raisedChisel moved to `body` only (below) — applied to the whole face
// it ran straight through the caption bar, which read as the texture
// colliding with the title rather than framing the content beneath it.
export const dialogFace = style([face, { display: "flex", flexDirection: "column" }]);

export const caption = style({
  position: "relative",
  zIndex: 1,
  display: "flex",
  alignItems: "center",
  gap: "6px",
  // Plain paper, not ditherFill12 — dither is reserved for "this is an
  // interactive control's inactive state" (Tab). A caption is a static
  // heading, not a control with states, and sharing Tab's exact texture
  // was why the two read as the same kind of thing at a glance. See the
  // "Text roles" note in .claude/CLAUDE.md.
  background: vars.color.paper,
  // Real padding rather than a fixed height flush with the face's
  // edges — text needs clearance from the 2px outer border, or it
  // reads as colliding with it in the corner. The source poster
  // sidesteps this entirely by absolutely positioning its caption 5px
  // inset from the face; padding is the equivalent here.
  padding: "6px 10px 6px 10px",
  borderBottom: `2px solid ${vars.color.ink}`,
});

export const captionName = style({
  fontFamily: fontFamily.ui,
  fontSize: "11px",
  fontWeight: 700,
  letterSpacing: "0.14em",
  color: vars.color.ink,
});

export const body = style([
  raisedChisel,
  {
    position: "relative",
    zIndex: 1,
    padding: "14px 16px",
  },
]);
