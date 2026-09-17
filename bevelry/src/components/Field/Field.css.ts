import { style } from "@vanilla-extract/css";
import { vars } from "../../tokens/theme.css";
import { fontFamily } from "../../tokens/typography.css";
import { sunken } from "../Bevel/Bevel.css";

export const row = style({
  display: "flex",
  alignItems: "center",
  gap: "8px",
});

export const label = style({
  fontFamily: fontFamily.ui,
  fontSize: "9.5px",
  fontWeight: 700,
  letterSpacing: "0.12em",
  textTransform: "uppercase",
  // minWidth, not width: short labels ("SEED") still line up to a
  // consistent column, but a longer one ("OFFICIANT") grows to fit its
  // own text instead of clipping/overflowing into the field beside it.
  minWidth: "64px",
  whiteSpace: "nowrap",
  flex: "0 0 auto",
  textAlign: "right",
  color: vars.color.ink,
});

export const sunkenField = style([
  sunken,
  {
    flex: 1,
    padding: "2px 8px",
    fontFamily: fontFamily.body,
    fontSize: "12px",
    fontWeight: 600,
  },
]);

export const sunkenValue = style({
  position: "relative",
  zIndex: 1,
});

export const input = style([
  sunken,
  {
    flex: 1,
    padding: "4px 8px",
    fontFamily: fontFamily.numeric,
    fontSize: "13px",
    fontWeight: 700,
    color: vars.color.ink,
    outline: "none",
    selectors: {
      "&::placeholder": { opacity: 0.5 },
      "&:focus-visible": { outline: `2px solid ${vars.color.ink}`, outlineOffset: "1px" },
      "&:disabled": { cursor: "not-allowed", opacity: 0.5 },
    },
  },
]);

export const textarea = style([
  sunken,
  {
    flex: 1,
    width: "100%",
    padding: "6px 8px",
    fontFamily: fontFamily.body,
    fontSize: "13px",
    fontWeight: 500,
    lineHeight: 1.4,
    color: vars.color.ink,
    outline: "none",
    resize: "vertical",
    minHeight: "64px",
    selectors: {
      "&::placeholder": { opacity: 0.5 },
      "&:focus-visible": { outline: `2px solid ${vars.color.ink}`, outlineOffset: "1px" },
      "&:disabled": { cursor: "not-allowed", opacity: 0.5, resize: "none" },
    },
  },
]);

export const selectWrap = style({ position: "relative", flex: 1, display: "flex" });

export const select = style([
  sunken,
  {
    flex: 1,
    width: "100%",
    padding: "4px 26px 4px 8px",
    fontFamily: fontFamily.ui,
    fontSize: "13px",
    fontWeight: 600,
    color: vars.color.ink,
    outline: "none",
    appearance: "none",
    cursor: "pointer",
    selectors: {
      "&:focus-visible": { outline: `2px solid ${vars.color.ink}`, outlineOffset: "1px" },
      "&:disabled": { cursor: "not-allowed", opacity: 0.5 },
    },
  },
]);

export const selectChevron = style({
  position: "absolute",
  zIndex: 1,
  right: "10px",
  top: "50%",
  transform: "translateY(-50%)",
  pointerEvents: "none",
  fontSize: "8px",
  color: vars.color.ink,
});
