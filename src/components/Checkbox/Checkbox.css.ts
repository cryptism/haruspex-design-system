import { globalStyle, style } from "@vanilla-extract/css";
import { vars } from "../../tokens/theme.css";
import { fontFamily } from "../../tokens/typography.css";
import { face, visuallyHiddenInput } from "../Bevel/Bevel.css";

export const label = style({
  display: "inline-flex",
  alignItems: "center",
  gap: "8px",
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

// Square — the checkbox's own shape is the thing that distinguishes it
// from Radio's diamond. No chisel/shadow here (unlike SunkenField): at
// 16px it would just read as noise.
export const box = style([
  face,
  {
    flex: "none",
    width: "16px",
    height: "16px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
]);

export const mark = style({
  width: "70%",
  height: "70%",
  opacity: 0,
  color: vars.color.ink,
});

globalStyle(`${input}:checked + ${box} ${mark}`, { opacity: 1 });
globalStyle(`${input}:focus-visible + ${box}`, {
  outline: `2px solid ${vars.color.ink}`,
  outlineOffset: "2px",
});
