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
  fontFamily: fontFamily.body,
  fontSize: "9.5px",
  fontWeight: 700,
  letterSpacing: "0.12em",
  textTransform: "uppercase",
  width: "64px",
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
    },
  },
]);
