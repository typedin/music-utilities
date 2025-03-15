import globals from "globals";
import pluginJs from "@eslint/js";
import tseslint from "typescript-eslint";
import vitest from "eslint-plugin-vitest";
import eslintConfigPrettier from "eslint-config-prettier";
import eslintPluginPrettier from "eslint-plugin-prettier"; // Add Prettier plugin

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
  eslintConfigPrettier, // Disable conflicting ESLint rules
  {
    plugins: {
      prettier: eslintPluginPrettier,
    },
    rules: {
      "@typescript-eslint/no-explicit-any": "off",
      "@typescript-eslint/no-require-imports": "off", // Disable the no-require-imports rule
      "@typescript-eslint/ban-ts-comment": [
        "error",
        {
          minimumDescriptionLength: 0,
          "ts-check": false,
          "ts-expect-error": "allow-with-description",
          "ts-ignore": false,
          "ts-nocheck": true,
        },
      ], // Allow @ts-ignore without explanation
    },
  },
];
