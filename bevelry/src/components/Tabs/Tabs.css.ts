import { recipe } from "@vanilla-extract/recipes";
import { style } from "@vanilla-extract/css";
import { vars } from "../../tokens/theme.css";
import { fontFamily } from "../../tokens/typography.css";
import { ditherFill12, face } from "../Bevel/Bevel.css";

export const root = style({ display: "flex", flexDirection: "column", minWidth: 0 });

export const tabList = style({
  display: "flex",
  alignItems: "flex-end",
});

export const tab = recipe({
  base: [
    ditherFill12,
    {
      position: "relative",
      boxSizing: "border-box",
      appearance: "none",
      // ditherFill12 only sets backgroundImage — without an explicit
      // backgroundColor too, the browser's own UA button background
      // shows through behind the sparse dots. It doesn't track the
      // theme, so on dark palettes (terminal, blueprint) a light native
      // button face sat behind light ink text and made inactive tabs
      // unreadable.
      backgroundColor: vars.color.paper,
      border: `2px solid ${vars.color.ink}`,
      // No bottom border on any tab — the panel's own top border (face,
      // below) supplies that line instead. Every tab having its own
      // bottom border on top of the panel's top border read as a
      // doubled line right where they meet.
      borderBottom: "none",
      padding: "7px 16px",
      fontFamily: fontFamily.ui,
      fontSize: "11px",
      fontWeight: 700,
      letterSpacing: "0.08em",
      color: vars.color.ink,
      cursor: "pointer",
      // Borders overlap rather than double up between adjacent tabs.
      selectors: {
        "&:not(:first-child)": { marginLeft: "-2px" },
      },
    },
  ],
  variants: {
    active: {
      true: {
        zIndex: 1,
        background: vars.color.paper,
        backgroundImage: "none",
        // Pulls the active tab down over the panel's top border, so that
        // border segment reads as erased and the tab looks welded to
        // the panel beneath it.
        marginBottom: "-2px",
      },
      false: {
        selectors: {
          "&:hover": { 
            backgroundImage: "none", backgroundColor: vars.color.ink,
            span: {
              backgroundColor:vars.color.ink,
              color:vars.color.paper
            }
          },
        },
      },
    },
  },
  defaultVariants: { active: false },
});

// Same trick as Dialog's captionName: a paper chip behind the text so
// the dither speckle (ditherFill12, on inactive tabs) doesn't run
// straight through the letters.
export const tabLabel = style({
  background: vars.color.paper,
  backgroundClip: "content-box",
  padding: "1px 4px",
  margin: "-1px -4px",
});

export const panel = style([
  face,
  {
    position: "relative",
    padding: "16px",
    minWidth: 0,
  },
]);
