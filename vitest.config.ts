import { defineConfig } from "vitest/config";

export default defineConfig({
  test: {
    globals: true, // Enable global test functions like describe, test, expect
    environment: "node", // Set the environment to Node.js
    includeSource: ["src/**/*.ts"],
  },
});
