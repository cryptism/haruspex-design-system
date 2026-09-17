import { vanillaExtractPlugin } from "@vanilla-extract/esbuild-plugin";
import { defineConfig } from "tsup";

export default defineConfig({
  entry: ["src/index.ts"],
  format: ["esm"],
  dts: true,
  clean: true,
  sourcemap: true,
  esbuildPlugins: [vanillaExtractPlugin()],
  // vanilla-extract's esbuild plugin extracts every *.css.ts import into a
  // single stylesheet per entry point, named after the entry: dist/index.css.
  // package.json's "./styles.css" export subpath points at it directly.
  outExtension: () => ({ js: ".js" }),
});
