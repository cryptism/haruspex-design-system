import { globalStyle, style } from "@vanilla-extract/css";
import { vars } from "../../tokens/theme.css";
import { fontFamily } from "../../tokens/typography.css";
import { visuallyHiddenInput } from "../Bevel/Bevel.css";

export const group = style({
  display: "flex",
  flexDirection: "column",
  gap: "8px",
});

export const groupRow = style({
  flexDirection: "row",
  flexWrap: "wrap",
  gap: "16px",
});

export const label = style({
  display: "inline-flex",
  alignItems: "center",
  gap: "9px",
  cursor: "pointer",
  fontFamily: fontFamily.ui,
  fontSize: "12px",
  fontWeight: 500,
  color: vars.color.ink,
  selectors: {
    "&:has(:disabled)": { cursor: "not-allowed", opacity: 0.5 },
  },
});

export const input = style([visuallyHiddenInput]);

// Motif's own convention: radio = diamond, checkbox = square. Rotating a
// square 12px on a side (rather than drawing a diamond path) means the
// inner dot only has to be a plain centered square — it inherits the
// parent's rotation for free.
export const diamond = style({
  flex: "none",
  boxSizing: "border-box",
  width: "12px",
  height: "12px",
  transform: "rotate(45deg)",
  border: `2px solid ${vars.color.ink}`,
  background: vars.color.paper,
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
});

export const dot = style({
  width: "50%",
  height: "50%",
  background: vars.color.ink,
  opacity: 0,
});

globalStyle(`${input}:checked + ${diamond} ${dot}`, { opacity: 1 });
globalStyle(`${input}:focus-visible + ${diamond}`, {
  outline: `2px solid ${vars.color.ink}`,
  outlineOffset: "3px",
});
