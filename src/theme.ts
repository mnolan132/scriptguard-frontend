import { defineConfig } from "@chakra-ui/react";

const config = defineConfig({
  theme: {
    breakpoints: {
      sm: "320px",
      md: "768px",
      lg: "960px",
      xl: "1200px",
    },
    tokens: {
      colors: {
        red: {
          50: { value: "#FFE5E5" },
          100: { value: "#FFB8B8" },
          200: { value: "#FF8A8A" },
          300: { value: "#FF5C5C" },
          400: { value: "#FF2E2E" },
          500: { value: "#EE0F0F" },
          600: { value: "#C00D0D" },
          700: { value: "#910A0A" },
          800: { value: "#610606" },
          900: { value: "#300303" },
        },
        green: {
          50: { value: "#E5FFE5" },
          100: { value: "#B8FFB8" },
          200: { value: "#8AFF8A" },
          300: { value: "#5CFF5C" },
          400: { value: "#2EFF2E" },
          500: { value: "#0FEE0F" },
          600: { value: "#0DC00D" },
          700: { value: "#0A910A" },
          800: { value: "#066106" },
          900: { value: "#033003" },
        },
        blue: {
          50: { value: "#E5E5FF" },
          100: { value: "#B8B8FF" },
          200: { value: "#8A8AFF" },
          300: { value: "#5C5CFF" },
          400: { value: "#2E2EFF" },
          500: { value: "#0F0FEE" },
          600: { value: "#0D0DC0" },
          700: { value: "#0A0A91" },
          800: { value: "#060661" },
          900: { value: "#030330" },
        },
        gray: {
          50: { value: "#F7FAFC" },
          100: { value: "#EDF2F7" },
          200: { value: "#E2E8F0" },
          300: { value: "#CBD5E0" },
          400: { value: "#A0AEC0" },
          500: { value: "#718096" },
          600: { value: "#4A5568" },
          700: { value: "#2D3748" },
          800: { value: "#1A202C" },
          900: { value: "#171923" },
        },
        backgroundLight: { value: "#F7FAFC" },
        backgroundDark: { value: "#1A202C" },
        textLight: { value: "#1A202C" },
        textDark: { value: "#E2E8F0" },
      },
    },
    semanticTokens: {
      colors: {
        bg: {
          _light: { value: "{colors.backgroundLight}" },
          _dark: { value: "{colors.backgroundDark}" },
        },
        text: {
          _light: { value: "{colors.textLight}" },
          _dark: { value: "{colors.textDark}" },
        },
        danger: { value: "{colors.red.500}" },
        success: { value: "{colors.green.500}" },
        info: { value: "{colors.blue.500}" },
      },
    },
  },
});

export default config;
