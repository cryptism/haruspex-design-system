/**
 * Font tokens don't vary per palette (unlike color/dither in ./theme.css.ts),
 * so these are plain constants rather than theme-contract entries.
 *
 * The host app is responsible for loading the faces — this library never
 * injects a network `@import` into shipped CSS. Add to the host's HTML head:
 *
 *   <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Jacquard+12&family=Alegreya:ital,wght@0,500;0,700;0,900;1,500&family=VT323&family=IBM+Plex+Sans:wght@400;600;700&family=Noto+Sans+Symbols+2&display=swap">
 *
 * or self-host the same families for production.
 */
export const fontFamily = {
  /** Jacquard 12 — pixel blackletter. Display only: illegible below ~24px, don't set in all caps (a property of the typeface, not a bug — carried over from poster/poster-online.html's own comment). */
  display: '"Jacquard 12", Georgia, serif',
  /** Alegreya — reading content: prose, notes, chronicle entries, sunken-field readouts. Not UI chrome — see `ui`. */
  body: '"Alegreya", Georgia, "Century Schoolbook", serif',
  /**
   * IBM Plex Sans — UI chrome text: buttons, dialog captions, fieldset
   * legends, tab/menu labels, field labels, checkbox/radio labels. Real
   * GEM/Mac interfaces set chrome in a sans system font and reserved
   * serif for document content; everything here used to be set in
   * `body` (Alegreya), which flattened that distinction.
   *
   * Wrapped in `var(--bevelry-ui-font, …)` — a real, permanent escape
   * hatch (`ThemeProvider`'s `style` prop is the way to set it on a
   * subtree), not just how the demo's font comparison worked. Chosen
   * over Silkscreen/VT323/Jost after trying all four live in the demo.
   */
  ui: 'var(--bevelry-ui-font, "IBM Plex Sans", sans-serif)',
  /** VT323 — fixed-width terminal face. Numeric/data readouts: TextInput, NumericReadout, Glyph. Replaces Handjet, dropped entirely — VT323 read as the more legible fixed-width option in the same comparison. */
  numeric: '"VT323", "JetBrains Mono", ui-monospace, monospace',
} as const;
