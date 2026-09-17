import { style } from "@vanilla-extract/css";
import { vars } from "../../tokens/theme.css";
import { fontFamily } from "../../tokens/typography.css";

export const display = style({
  fontFamily: fontFamily.display,
  fontWeight: 400,
  lineHeight: 0.95,
  margin: 0,
  color: vars.color.ink,
});

export const body = style({
  fontFamily: fontFamily.body,
  fontWeight: 500,
  lineHeight: 1.4,
  margin: 0,
  color: vars.color.ink,
});

export const numeric = style({
  fontFamily: fontFamily.numeric,
  fontWeight: 700,
  letterSpacing: "0.02em",
  fontVariantNumeric: "tabular-nums",
  color: vars.color.ink,
});
