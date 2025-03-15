import globals from "globals";
import pluginJs from "@eslint/js";
import tseslint from "typescript-eslint";
import vitest from "eslint-plugin-vitest";
import eslintConfigPrettier from "eslint-config-prettier";

/** @type {import('eslint').Linter.Config[]} */
export default [
  { files: ["**/*.{js,mjs,cjs,ts}"] },
  {
    languageOptions: {
      globals: {
        ...globals.browser,
        ...globals.node,
        ...vitest.environments.env.globals,
      },
    },
  },
  pluginJs.configs.recommended,
  ...tseslint.configs.recommended,
    vitest.configs.recommended,
  // {
  //   plugins: { prettier }, // Add Prettier plugin
  //   rules: {
  //     ...prettier.configs.recommended.rules, // Use Prettier's recommended rules
  //   },
  // },
  eslintConfigPrettier, // Disable conflicting ESLint rules
  {
    rules: {
      "@typescript-eslint/no-require-imports": "off", // Disable no-require-imports rule
      "@typescript-eslint/no-explicit-any": "off", // Disable no-explicit-any rule
    }
  }
];
