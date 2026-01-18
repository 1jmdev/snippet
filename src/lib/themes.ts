import type { BundledTheme } from "shiki";

export interface ThemeConfig {
    id: BundledTheme;
    name: string;
    background: string;
    isDark: boolean;
}

export const themes: ThemeConfig[] = [
    {
        id: "dracula",
        name: "Dracula",
        background: "#282a36",
        isDark: true,
    },
    {
        id: "one-dark-pro",
        name: "One Dark Pro",
        background: "#282c34",
        isDark: true,
    },
    {
        id: "github-dark",
        name: "GitHub Dark",
        background: "#0d1117",
        isDark: true,
    },
    {
        id: "nord",
        name: "Nord",
        background: "#2e3440",
        isDark: true,
    },
    {
        id: "tokyo-night",
        name: "Tokyo Night",
        background: "#1a1b26",
        isDark: true,
    },
    {
        id: "catppuccin-mocha",
        name: "Catppuccin Mocha",
        background: "#1e1e2e",
        isDark: true,
    },
    {
        id: "vitesse-dark",
        name: "Vitesse Dark",
        background: "#121212",
        isDark: true,
    },
    {
        id: "ayu-dark",
        name: "Ayu Dark",
        background: "#0b0e14",
        isDark: true,
    },
    {
        id: "material-theme-darker",
        name: "Material Darker",
        background: "#212121",
        isDark: true,
    },
    {
        id: "slack-dark",
        name: "Slack Dark",
        background: "#222222",
        isDark: true,
    },
];

export const defaultTheme = themes[0];
