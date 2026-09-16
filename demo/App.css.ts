import { style } from "@vanilla-extract/css";
import { vars } from "../src/tokens/theme.css";

export const page = style({
  minHeight: "100vh",
  background: vars.color.desk,
  color: vars.color.ink,
  padding: "48px 24px 80px",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  gap: "28px",
});

export const themeRow = style({
  display: "flex",
  gap: "8px",
  flexWrap: "wrap",
  justifyContent: "center",
});

export const columns = style({
  display: "flex",
  gap: "24px",
  flexWrap: "wrap",
  justifyContent: "center",
  alignItems: "flex-start",
  width: "100%",
  maxWidth: "900px",
});

export const stack = style({
  display: "flex",
  flexDirection: "column",
  gap: "16px",
});

export const dialogBody = style({
  display: "flex",
  flexDirection: "column",
  gap: "10px",
  width: "260px",
});

export const buttonRow = style({
  display: "flex",
  gap: "10px",
  marginTop: "4px",
});
