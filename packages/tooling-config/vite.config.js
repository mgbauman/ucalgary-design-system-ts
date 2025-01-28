import { defineConfig } from "vite";

export default defineConfig({
  build: {
    lib: {
      entry: ["src/index.js"],
      formats: ["es"],
    },
    rollupOptions: {
      // Exclude dependencies from the bundle
      external: ["lit"],
      output: {
        globals: {
          lit: "Lit",
        },
      },
    },
  },
});
