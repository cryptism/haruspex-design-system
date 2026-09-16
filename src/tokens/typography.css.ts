/**
 * Font tokens don't vary per palette (unlike color/dither in ./theme.css.ts),
 * so these are plain constants rather than theme-contract entries.
 *
 * The host app is responsible for loading the faces — this library never
 * injects a network `@import` into shipped CSS. Add to the host's HTML head:
 *
 *   <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Jacquard+12&family=Alegreya:ital,wght@0,500;0,700;0,900;1,500&family=Handjet:wght@400;700&display=swap">
 *
 * or self-host the same three families for production.
 */
export const fontFamily = {
  /** Jacquard 12 — pixel blackletter. Display only: illegible below ~24px, don't set in all caps (a property of the typeface, not a bug — carried over from poster/poster-online.html's own comment). */
  display: '"Jacquard 12", Georgia, serif',
  /** Alegreya — carries both body copy and UI labels; weight does the work of distinguishing hierarchy. */
  body: '"Alegreya", Georgia, "Century Schoolbook", serif',
  /** Handjet — pixel-constructed condensed, variable 100-900. Reserved in the source poster for stat/numeric readouts; wired up here for that use. */
  numeric: '"Handjet", "JetBrains Mono", ui-monospace, monospace',
} as const;
