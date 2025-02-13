/* eslint-disable import/no-extraneous-dependencies */
import { playwrightLauncher } from "@web/test-runner-playwright";
import { esbuildPlugin } from "@web/dev-server-esbuild";

const filteredLogs = ["Running in dev mode", "Lit is in dev mode"];

// When a css file is imported, mock it.
/* eslint-disable consistent-return */
const cssStubPlugin = {
  name: "stub-package",
  serve(context) {
    if (context.path.endsWith(".css?inline") || context.path.endsWith(".css")) {
      return `
        export default ""`;
    }
  },
};

export default /** @type {import("@web/test-runner").TestRunnerConfig} */ ({
  // Set the rootDir back to this packages directory so that file imports resolve properly.
  rootDir: "../../",

  /** Test files to run */
  files: "**/test/*.test.ts",
  mimeTypes: {
    "**/*.css": "js",
    "**/*.css?inline": "js",
  },
  plugins: [
    esbuildPlugin({
      ts: true,
      // Need to import the tsconfig so that esbuild will properly use our
      // settings - especially adding decorator support.
      // tsconfig: fileURLToPath(new URL('./tsconfig.json', import.meta.url))
      tsconfig: "./tsconfig.json",
    }),
    cssStubPlugin,
  ],

  /** Resolve bare module imports */
  nodeResolve: true,

  /** Analyze test coverage */
  coverage: true,

  /** Filter out lit dev mode logs */
  filterBrowserLogs(log) {
    for (const arg of log.args) {
      if (
        typeof arg === "string" &&
        filteredLogs.some((l) => arg.includes(l))
      ) {
        return false;
      }
    }
    return true;
  },
  /** Compile JS for older browsers. Requires @web/dev-server-esbuild plugin */
  esbuildTarget: "auto",

  /** Amount of browsers to run concurrently */
  concurrentBrowsers: 2,

  /** Amount of test files per browser to test concurrently */
  concurrency: 1,

  /** Browsers to run tests on */
  browsers: [
    playwrightLauncher({ product: "chromium" }),
    playwrightLauncher({ product: "firefox" }),
    playwrightLauncher({ product: "webkit" }),
  ],
});
