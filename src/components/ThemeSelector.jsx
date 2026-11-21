/* Copyright (c) 2026 Wings8 Technology.
   Distributed under the license specified in the root directory of this project. */

import { THEMES } from "../constants/themes.js";

const LABELS = {
  light: "Clair",
  dark: "Sombre",
};

// Theme selector: two dots (light / dark). The active dot reflects the resolved
// theme, so system mode highlights whichever theme the OS currently uses.
// Clicking the already-explicit dot returns to system mode (follows the OS).
function ThemeSelector({ currentTheme, resolvedTheme, onThemeChange }) {
  return (
    <div className="theme-selector" role="group" aria-label="Thème">
      {Object.values(THEMES).map((theme) => {
        const active = resolvedTheme === theme.id;
        const label =
          currentTheme === "system" ? `${LABELS[theme.id]} (système)` : LABELS[theme.id];
        return (
          <button
            type="button"
            key={theme.id}
            className={`theme-dot ${active ? "active" : ""}`}
            style={{ background: theme.preview }}
            onClick={() => onThemeChange(currentTheme === theme.id ? "system" : theme.id)}
            title={label}
            aria-label={`Thème : ${label}`}
            aria-pressed={active}
          />
        );
      })}
    </div>
  );
}

export default ThemeSelector;
