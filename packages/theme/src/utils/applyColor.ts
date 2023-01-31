import {themeStore} from "../store";
import {CssScheme} from "./m3CssColor";

export default function () {
    const root = document.querySelector(":root");
    let scheme: CssScheme;

    if (themeStore().darkMode) {
        scheme = themeStore().darkScheme;
    } else {
        scheme = themeStore().lightScheme;
    }

    if (root) {
        root.setAttribute("style", `
        --md-sys-color-primary: ${scheme.primary};
        --md-sys-color-on-primary: ${scheme.onPrimary};
        --md-sys-color-primary-container: ${scheme.primaryContainer};
        --md-sys-color-on-primary-container: ${scheme.onPrimaryContainer};
        --md-sys-color-secondary: ${scheme.secondary};
        --md-sys-color-on-secondary: ${scheme.onSecondary};
        --md-sys-color-secondary-container: ${scheme.secondaryContainer};
        --md-sys-color-on-secondary-container: ${scheme.onSecondaryContainer};
        --md-sys-color-tertiary: ${scheme.tertiary};
        --md-sys-color-on-tertiary: ${scheme.onTertiary};
        --md-sys-color-tertiary-container: ${scheme.tertiaryContainer};
        --md-sys-color-on-tertiary-container: ${scheme.onTertiaryContainer};
        --md-sys-color-error: ${scheme.error};
        --md-sys-color-on-error: ${scheme.onError};
        --md-sys-color-error-container: ${scheme.errorContainer};
        --md-sys-color-on-error-container: ${scheme.onErrorContainer};
        --md-sys-color-background: ${scheme.background};
        --md-sys-color-on-background: ${scheme.onBackground};
        --md-sys-color-surface: ${scheme.surface};
        --md-sys-color-surface-1: ${scheme.surface1};
        --md-sys-color-surface-2: ${scheme.surface2};
        --md-sys-color-surface-3: ${scheme.surface3};
        --md-sys-color-surface-4: ${scheme.surface4};
        --md-sys-color-surface-5: ${scheme.surface5};
        --md-sys-color-on-surface: ${scheme.onSurface};
        --md-sys-color-surface-variant: ${scheme.surfaceVariant};
        --md-sys-color-on-surface-variant: ${scheme.onSurfaceVariant};
        --md-sys-color-outline: ${scheme.outline};
        --md-sys-color-outline-variant: ${scheme.outlineVariant};
        --md-sys-color-shadow: ${scheme.shadow};
        --md-sys-color-shadow-scrim: ${scheme.scrim};
        --md-sys-color-inverse-surface: ${scheme.inverseSurface};
        --md-sys-color-inverse-on-surface: ${scheme.inverseOnSurface};
        --md-sys-color-inverse-primary: ${scheme.inversePrimary};
        `);
    }
}
