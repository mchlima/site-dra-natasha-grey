import type { Config } from "tailwindcss";

export default <Partial<Config>>{
  corePlugins: {
    preflight: true,
  },
  theme: {
    extend: {
      colors: {
        primary: "#5e6150",
        "primary-light": "#7a7d6b",
        secondary: "#c3a27c",
        accent: "#a67f5a",
        background: "#ffffff",
        "background-alt": "#f8f5f0",
        text: "#2c2c2c",
        muted: "#555555",
        success: "#2e7d32",
        warning: "#ff8f00",
        danger: "#c62828",
      },
    },
  },
  content: [],
  plugins: [],
};
