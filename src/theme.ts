import { defineConfig } from "@chakra-ui/react";

const config = defineConfig({
  theme: {
    tokens: {
      colors: {
        red: { value: "#EE0F0F" },
        green: { value: "#0FEE0F" },
        blue: { value: "#0F0FEE" },
        backgroundLight: { value: "#F7FAFC" },
        backgroundDark: { value: "#1A202C" },
        textLight: { value: "#1A202C" },
        textDark: { value: "#E2E8F0" },
      },
    },
    semanticTokens: {
      colors: {
        bg: {
          _light: {value: "{colors.backgroundLight}"},
          _dark: {value: "{colors.backgroundDark}"},
        },
        text: {
          _light: {value: "{colors.textLight}"},
          _dark: {value: "{colors.textDark}"},
        },
      },
    },
  },
});

export default config;
