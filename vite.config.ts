import { defineConfig } from "vite";
import tsconfigPaths from "vite-tsconfig-paths";
import { resolve } from "path";

export default defineConfig({
  plugins: [tsconfigPaths()], // Enable path alias resolution
  resolve: {
    alias: {
      "@": "/src", // This allows you to use @ as an alias for src/
    },
    // Ensure aliasing also works with test files
    test: {
      globals: true,
      environment: "node",
    },
  },
});
