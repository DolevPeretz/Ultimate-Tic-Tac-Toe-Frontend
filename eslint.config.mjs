import globals from "globals";
import tseslint from "@typescript-eslint/eslint-plugin";
import parser from "@typescript-eslint/parser";
import pluginReact from "eslint-plugin-react";
import prettier from "eslint-config-prettier";
import pluginPrettier from "eslint-plugin-prettier";

/** @type {import('eslint').Linter.FlatConfig[]} */
export default [
  {
    files: ["**/*.{js,mjs,cjs,ts,jsx,tsx}"],
    languageOptions: {
      parser: parser,
      globals: globals.browser,
      parserOptions: {
        ecmaVersion: "latest",
        sourceType: "module",
        ecmaFeatures: {
          jsx: true,
        },
        project: "./tsconfig.json", 
      },
    },
    plugins: {
      "@typescript-eslint": tseslint,
      react: pluginReact,
      prettier: pluginPrettier,
    },
    settings: {
      react: {
        version: "detect",
      },
    },
    rules: {
      ...tseslint.configs.recommended.rules,
      ...pluginReact.configs.recommended.rules, 
      ...prettier.rules, 
      "prettier/prettier": "error", 
      "react/react-in-jsx-scope": "off", 
      "react/prop-types": "off", 
      "@typescript-eslint/no-unused-vars": [
        "error",
        { argsIgnorePattern: "^_" },
      ],
    },
    extends: [
      "airbnb",
      "airbnb/hooks",
      "prettier", 
    ],
  },
];
