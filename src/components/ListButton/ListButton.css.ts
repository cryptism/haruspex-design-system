import { globalStyle, style } from "@vanilla-extract/css";
import { vars } from "../../tokens/theme.css";
import { fontFamily } from "../../tokens/typography.css";
import { face, raisedShadow } from "../Bevel/Bevel.css";

export const listButton = style([
  face,
  raisedShadow,
  {
    display: "flex",
    alignItems: "center",
    gap: "10px",
    width: "100%",
    padding: "9px 12px",
    textDecoration: "none",
    cursor: "pointer",
    textAlign: "left",
    selectors: {
      "&:hover": { background: vars.color.ink, color: vars.color.paper },
      "&:active": { padding: "10px 11px 8px 13px" },
      "&:active::before": { display: "none" },
      "&:focus-visible": { outline: `3px solid ${vars.color.ink}`, outlineOffset: "3px" },
    },
  },
]);

// The reverse-video hover flips the icon along with everything else.
globalStyle(`${listButton}:hover svg`, { fill: vars.color.paper });

// minWidth:0 overrides the flex default of refusing to shrink below content's
// intrinsic width — without it, a long `value` (a URL, say) pushes the whole
// button wider than its container instead of wrapping per overflowWrap:anywhere.
export const text = style({ display: "flex", flexDirection: "column", gap: "2px", minWidth: 0 });

export const kicker = style({
  fontFamily: fontFamily.ui,
  fontSize: "8px",
  fontWeight: 700,
  letterSpacing: "0.14em",
  opacity: 0.75,
});

export const value = style({
  fontFamily: fontFamily.body,
  fontSize: "13px",
  fontWeight: 700,
  textDecoration: "underline",
  textUnderlineOffset: "2px",
  overflowWrap: "anywhere",
});
