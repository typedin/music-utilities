import { defineConfig } from "vite";
import tsconfigPaths from "vite-tsconfig-paths";
import { resolve } from "path";

export default defineConfig({
  plugins: [tsconfigPaths()], // Enable path alias resolution
  resolve: {
    alias: {
      "@": resolve(__dirname, "src"), // Alias '@' to 'src/' directory
    },
  },
});
