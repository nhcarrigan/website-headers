import NaomisConfig from "@nhcarrigan/eslint-config";
import globals from "globals";

export default [
  ...NaomisConfig,
  {
    languageOptions: {
        globals: {
            ...globals.browser
        }
    }
  },
  {
    rules: {
      "no-console": "off"
    }
  }
];
