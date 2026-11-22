/* Copyright (c) 2026 Wings8 Technology.
   Distributed under the license specified in the root directory of this project. */

// Theme configuration for PDF Tools app
// Wings8 Technology theme: #0B1F4B + white/black only

export const THEMES = {
  dark: {
    id: "dark",
    name: "Dark",
    preview: "#0a0a0f",
    colors: {
      // Background colors - near black with slight tint
      "--bg-primary": "#0a0a0f",
      "--bg-secondary": "#12121a",
      "--bg-tertiary": "#1a1a25",
      "--bg-card": "#12121a",
      // Accent - Wings8 purple #0B1F4B
      "--accent-primary": "#F99634",
      "--accent-secondary": "#FEBF69",
      "--accent-gradient": "#F99634",
      "--accent-glow": "rgba(249, 150, 52, 0.15)",
      // Text colors - white scale
      "--text-primary": "#ffffff",
      "--text-secondary": "#a0a0b0",
      "--text-muted": "#606070",
      // Feature colors - all use Wings8 purple
      "--compress-color": "#0B1F4B",
      "--merge-color": "#0B1F4B",
      "--split-color": "#0B1F4B",
      // Borders
      "--border-color": "rgba(255, 255, 255, 0.1)",
    },
  },
  light: {
    id: "light",
    name: "Light",
    preview: "#ffffff",
    colors: {
      // Background colors - white scale
      "--bg-primary": "#f8f8fb",
      "--bg-secondary": "#ffffff",
      "--bg-tertiary": "#f0f0f5",
      "--bg-card": "#ffffff",
      // Accent - Wings8 purple #0B1F4B
      "--accent-primary": "#0B1F4B",
      "--accent-secondary": "#081A3E",
      "--accent-gradient": "#0B1F4B",
      "--accent-glow": "rgba(11, 31, 75, 0.1)",
      // Text colors - black scale
      "--text-primary": "#1a1a2e",
      "--text-secondary": "#4a4a5a",
      "--text-muted": "#8a8a9a",
      // Feature colors - all use Wings8 purple
      "--compress-color": "#0B1F4B",
      "--merge-color": "#0B1F4B",
      "--split-color": "#0B1F4B",
      // Borders
      "--border-color": "rgba(0, 0, 0, 0.1)",
    },
  },
};

// Apply theme to document root
export function applyTheme(theme) {
  const root = document.documentElement;
  Object.entries(theme.colors).forEach(([property, value]) => {
    root.style.setProperty(property, value);
  });
}
