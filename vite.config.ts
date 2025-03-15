import { defineConfig } from "vite";
import tsconfigPaths from "vite-tsconfig-paths";
import { resolve } from "path";

export default defineConfig({
  build: {
    lib: {
      entry: "src/index.ts", // Define your entry point
      formats: ["es", "cjs"],
      fileName: (format) => `index.${format}.js`
    },
    rollupOptions: {
      external: [], // List dependencies here if needed
    }
  },
  plugins: [tsconfigPaths()], // Enable path alias resolution
  resolve: {
    alias: {
      "@": resolve(__dirname, "src"), // Alias '@' to 'src/' directory
    },
  },
});
