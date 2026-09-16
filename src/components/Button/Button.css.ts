import { recipe } from "@vanilla-extract/recipes";
import { style } from "@vanilla-extract/css";
import { vars } from "../../tokens/theme.css";
import { fontFamily } from "../../tokens/typography.css";
import { face, raisedShadow } from "../Bevel/Bevel.css";

const defaultRing = style({
  selectors: {
    "&::after": {
      content: '""',
      position: "absolute",
      inset: "3px",
      border: `1px dotted ${vars.color.ink}`,
      pointerEvents: "none",
    },
  },
});

export const button = recipe({
  base: [
    face,
    raisedShadow,
    {
      display: "inline-flex",
      alignItems: "center",
      gap: "8px",
      padding: "7px 16px",
      fontFamily: fontFamily.body,
      fontSize: "12px",
      fontWeight: 700,
      letterSpacing: "0.08em",
      cursor: "pointer",
      appearance: "none",
      selectors: {
        "&:active": {
          // No transform: that would give the button its own stacking
          // context and the dithered shadow would paint over the face
          // instead of behind it (see poster/poster-online.html's own
          // note on .contactbtn:active). Nudge padding + drop the shadow
          // instead — same pressed feel, no stacking-context side effect.
          padding: "8px 15px 6px 17px",
        },
        "&:active::before": { display: "none" },
        "&:focus-visible": {
          outline: `3px solid ${vars.color.ink}`,
          outlineOffset: "2px",
        },
        "&:disabled": {
          cursor: "not-allowed",
          opacity: 0.5,
        },
      },
    },
  ],
  variants: {
    emphasis: {
      plain: {},
      /** The dotted inset ring a GEM/Mac dialog gives its default (Enter-key) action. */
      default: [defaultRing],
    },
  },
  defaultVariants: {
    emphasis: "plain",
  },
});
