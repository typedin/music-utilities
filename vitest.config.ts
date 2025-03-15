import { defineConfig } from "vitest/config";
import tsconfigPaths from "vite-tsconfig-paths";
import { resolve } from "path";

export default defineConfig({
  test: {
    globals: true, // Enable global test functions like describe, test, expect
    environment: "node", // Set the environment to Node.js
    includeSource: ["src/**/*.ts"],
  },
  plugins: [tsconfigPaths()], // Enable path alias resolution
  resolve: {
    alias: {
      '@': resolve(__dirname, './src'),
      // Add other aliases here
    },
  },
});
