import globals from "globals";
import pluginJs from "@eslint/js";


export default [
  {
    files: ["**/*.js"],
    languageOptions: { sourceType: "commonjs" },
    rules: {
      "no-unused-vars": "error",
      "no-empty": "error",
      "no-extra-semi": "error",
      "no-multiple-empty-lines": ["error", { "max": 1 }],
      //מותר שיהיה עד שורה אחת של רווח...
    }
  },
  {
    languageOptions: { globals: globals.browser },
  },
  pluginJs.configs.recommended,
];