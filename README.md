# Haruspex

A design system I wanted to standardise for a bunch of CRPG-related tools. Divergent, but spiritually similar.

## Side A - Verdant Hold
World-eating egregore, hidden somewhere in the MUD. Dithered texturing and colours evocative of torchlight against cold stone. Inspired by Acorn 3.x and pre '95 CRPGs of the time, such as Gold Box series, Lands of Lore, Wizardry, and the gorgeous [Kagerou Meikyuu](https://www.youtube.com/watch?v=64DcjaSG7wI).

## Side B - Bevelry
Monochrome, halftone GEM hauntologies. Colours include two light modes, an inverted scheme inspired by classic TSR cartographies and a mossy "terminal" dark mode that contains a fragment of its sister side.

# Usage

Each side is its own package, side by side in this repo:

```bash
$ cd bevelry        # or verdant-hold
$ npm install
$ npm run dev        # demo at http://localhost:5173
$ npm run build:demo
```

Both use Nix for tooling — `nix develop --command npm ...` if `node` isn't already on `PATH`.