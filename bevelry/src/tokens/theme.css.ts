import { createGlobalTheme, createTheme, createThemeContract } from "@vanilla-extract/css";

/**
 * Four "screens" the same Bevelry chrome can render as — one CSS
 * custom-property contract, six value sets. `dither.*` is never assigned
 * directly: it's derived from `color.ink` per palette (see
 * `paletteTokens` below) so a new palette only ever has to name three
 * colors, the same as the source poster's `:root`/`body.theme-*` blocks.
 */
export const vars = createThemeContract({
  color: {
    ink: null,
    paper: null,
    desk: null,
  },
  dither: {
    /** conic dither, used behind raised chrome as a hard-edged drop shadow */
    d50: null,
    /** radial dither, used as the inner chisel line on raised/sunken faces */
    d25: null,
    /** sparser radial dither, used for caption-bar and menu-corner fill */
    d12: null,
  },
});

function paletteTokens(ink: string, paper: string, desk: string) {
  return {
    color: { ink, paper, desk },
    dither: {
      d50: `repeating-conic-gradient(${vars.color.ink} 0% 25%, transparent 0% 50%)`,
      d25: `radial-gradient(${vars.color.ink} 62%, transparent 63%)`,
      d12: `radial-gradient(${vars.color.ink} 25%, transparent 25%)`,
    },
  };
}

/** Default palette — applied at `:root`, so it's live with no theme class needed. */
createGlobalTheme(":root", vars, paletteTokens("#000000", "#ffffff", "#b8b8b8"));

// Replaces the source poster's separate amber (#ffb228) and phosphor
// (#4dff88) CRT themes — both read as neon next to parchment/mono. One
// worn, desaturated phosphor-green instead: still names "CRT terminal"
// at a glance, without the saturation fighting the rest of the set.
export const terminalTheme = createTheme(vars, paletteTokens("#9db98f", "#0b0f0a", "#050603"));
export const parchmentTheme = createTheme(vars, paletteTokens("#2f2418", "#ece0c6", "#b8a887"));
export const blueprintTheme = createTheme(vars, paletteTokens("#d8e7ff", "#0a2a54", "#05162c"));

export type BevelryTheme = "mono" | "terminal" | "parchment" | "blueprint";

export const themeClassByName: Record<BevelryTheme, string | undefined> = {
  mono: undefined,
  terminal: terminalTheme,
  parchment: parchmentTheme,
  blueprint: blueprintTheme,
};
