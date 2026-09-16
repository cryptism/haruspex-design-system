import type { ReactNode } from "react";
import { type BevelryTheme, themeClassByName } from "../../tokens/theme.css";

export interface ThemeProviderProps {
  /** Which of the four screens to render as. Defaults to "mono" — plain ink-on-paper. */
  theme?: BevelryTheme;
  children: ReactNode;
  className?: string;
}

/**
 * Applies one of Bevelry's four palettes to everything inside it.
 * "mono" needs no class (it's the `:root` default from tokens/theme.css.ts) —
 * wrap only the subtree that should switch away from it.
 */
export function ThemeProvider({ theme = "mono", children, className }: ThemeProviderProps) {
  const themeClass = themeClassByName[theme];
  const classes = [themeClass, className].filter(Boolean).join(" ");
  return <div className={classes || undefined}>{children}</div>;
}
