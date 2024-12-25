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
        project: "./tsconfig.json", // ודאי שזה הנתיב הנכון לקובץ tsconfig שלך
      },
    },
    plugins: {
      "@typescript-eslint": tseslint,
      react: pluginReact,
      prettier: pluginPrettier, // הוספת Prettier
    },
    settings: {
      react: {
        version: "detect", // מזהה אוטומטית את גרסת React
      },
    },
    rules: {
      ...tseslint.configs.recommended.rules, // חוקים עבור TypeScript
      ...pluginReact.configs.recommended.rules, // חוקים עבור React
      ...prettier.rules, // ביטול חוקים מתנגשים עם Prettier
      "prettier/prettier": "error", // הפיכת שגיאות עיצוב לשגיאות ESLint
      "react/react-in-jsx-scope": "off", // עבור React 17+
      "react/prop-types": "off", // לא נדרש ב-TypeScript
      "@typescript-eslint/no-unused-vars": [
        "error",
        { argsIgnorePattern: "^_" },
      ],
    },
  },
];