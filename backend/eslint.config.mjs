import globals from "globals";
import tseslint from "typescript-eslint";
import { defineConfig } from "eslint/config";

export default defineConfig([
    {
        ignores: ["node_modules", "dist", "coverage"],
    },

    {
        files: ["**/*.{ts,js}"],
        languageOptions: {
            globals: {
                ...globals.node,
            },
        },
    },

    ...tseslint.configs.recommended,

    {
        rules: {
            "no-console": "warn",
            "@typescript-eslint/no-explicit-any": "warn",
            "@typescript-eslint/no-unused-vars": [
                "warn",
                {
                    argsIgnorePattern: "^_",
                },
            ],
        },
    },
]);