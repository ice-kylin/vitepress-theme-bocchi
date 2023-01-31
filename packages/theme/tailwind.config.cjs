const defaultTheme = require("tailwindcss/defaultTheme");

/** @type {import("tailwindcss").Config} */
module.exports = {
    content: ["./src/**/*.{vue,js,ts,jsx,tsx}"],
    theme: {
        extend: {
            colors: {
                background: "rgb(var(--md-sys-color-background) / <alpha-value>)",
                error: "rgb(var(--md-sys-color-error) / <alpha-value>)",
                errorContainer: "rgb(var(--md-sys-color-error-container) / <alpha-value>)",
                inverseOnSurface: "rgb(var(--md-sys-color-inverse-on-surface) / <alpha-value>)",
                inversePrimary: "rgb(var(--md-sys-color-inverse-primary) / <alpha-value>)",
                inverseSurface: "rgb(var(--md-sys-color-inverse-surface) / <alpha-value>)",
                onBackground: "rgb(var(--md-sys-color-on-background) / <alpha-value>)",
                onError: "rgb(var(--md-sys-color-on-error) / <alpha-value>)",
                onErrorContainer: "rgb(var(--md-sys-color-on-error-container) / <alpha-value>)",
                onPrimary: "rgb(var(--md-sys-color-on-primary) / <alpha-value>)",
                onPrimaryContainer: "rgb(var(--md-sys-color-on-primary-container) / <alpha-value>)",
                onSecondary: "rgb(var(--md-sys-color-on-secondary) / <alpha-value>)",
                onSecondaryContainer: "rgb(var(--md-sys-color-on-secondary-container) / <alpha-value>)",
                onSurface: "rgb(var(--md-sys-color-on-surface) / <alpha-value>)",
                onSurfaceVariant: "rgb(var(--md-sys-color-on-surface-variant) / <alpha-value>)",
                onTertiary: "rgb(var(--md-sys-color-on-tertiary) / <alpha-value>)",
                onTertiaryContainer: "rgb(var(--md-sys-color-on-tertiary-container) / <alpha-value>)",
                outline: "rgb(var(--md-sys-color-outline) / <alpha-value>)",
                outlineVariant: "rgb(var(--md-sys-color-outline-variant) / <alpha-value>)",
                primary: "rgb(var(--md-sys-color-primary) / <alpha-value>)",
                primaryContainer: "rgb(var(--md-sys-color-primary-container) / <alpha-value>)",
                scrim: "rgb(var(--md-sys-color-scrim) / <alpha-value>)",
                secondary: "rgb(var(--md-sys-color-secondary) / <alpha-value>)",
                secondaryContainer: "rgb(var(--md-sys-color-secondary-container) / <alpha-value>)",
                shadow: "rgb(var(--md-sys-color-shadow) / <alpha-value>)",
                surface: "rgb(var(--md-sys-color-surface) / <alpha-value>)",
                surface1: "rgb(var(--md-sys-color-surface-1) / <alpha-value>)",
                surface2: "rgb(var(--md-sys-color-surface-2) / <alpha-value>)",
                surface3: "rgb(var(--md-sys-color-surface-3) / <alpha-value>)",
                surface4: "rgb(var(--md-sys-color-surface-4) / <alpha-value>)",
                surface5: "rgb(var(--md-sys-color-surface-5) / <alpha-value>)",
                surfaceVariant: "rgb(var(--md-sys-color-surface-variant) / <alpha-value>)",
                tertiary: "rgb(var(--md-sys-color-tertiary) / <alpha-value>)",
                tertiaryContainer: "rgb(var(--md-sys-color-tertiary-container) / <alpha-value>)",
            },
            fontFamily: {
                sans: [
                    "Inter",
                    "Noto Sans SC",
                    ...defaultTheme.fontFamily.sans,
                ],
                serif: [
                    "Noto Serif SC",
                    ...defaultTheme.fontFamily.serif,
                ],
                art: [
                    "Pacifico",
                    ...defaultTheme.fontFamily.serif,
                ],
            },
        },
    },
    plugins: [],
};
