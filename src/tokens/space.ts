/**
 * Spacing/radius scale — proposed, not extracted. Neither source repo has
 * a formal scale (the poster hand-tunes mm per component, the map app
 * hand-tunes px); this is the gap-closing default for new components.
 * Bevel line-weights (1px/2px hairlines) deliberately stay outside this
 * scale — they're meant to read as fixed-width pixels at any zoom level,
 * not scale with content the way padding/gaps should.
 */
export const space = {
  1: "4px",
  2: "8px",
  3: "12px",
  4: "16px",
  6: "24px",
  8: "32px",
} as const;
