import {
    argbFromHex,
    blueFromArgb,
    greenFromArgb,
    redFromArgb,
    Scheme,
    themeFromSourceColor,
} from "@material/material-color-utilities";
import {colorBlend, colorToHex} from "@antv/smart-color";

abstract class CssScheme {
    primary: string;
    onPrimary: string;
    primaryContainer: string;
    onPrimaryContainer: string;
    secondary: string;
    onSecondary: string;
    secondaryContainer: string;
    onSecondaryContainer: string;
    tertiary: string;
    onTertiary: string;
    tertiaryContainer: string;
    onTertiaryContainer: string;
    error: string;
    onError: string;
    errorContainer: string;
    onErrorContainer: string;
    background: string;
    onBackground: string;
    surface: string;
    surface1: string;
    surface2: string;
    surface3: string;
    surface4: string;
    surface5: string;
    onSurface: string;
    surfaceVariant: string;
    onSurfaceVariant: string;
    outline: string;
    outlineVariant: string;
    shadow: string;
    scrim: string;
    inverseSurface: string;
    inverseOnSurface: string;
    inversePrimary: string;

    protected constructor(scheme: Scheme) {
        const primary = scheme.primary;
        const surface = scheme.surface;

        this.primary = hexNumToHexString(primary);
        this.onPrimary = hexNumToHexString(scheme.onPrimary);
        this.primaryContainer = hexNumToHexString(scheme.primaryContainer);
        this.onPrimaryContainer = hexNumToHexString(scheme.onPrimaryContainer);
        this.secondary = hexNumToHexString(scheme.secondary);
        this.onSecondary = hexNumToHexString(scheme.onSecondary);
        this.secondaryContainer = hexNumToHexString(scheme.secondaryContainer);
        this.onSecondaryContainer = hexNumToHexString(scheme.onSecondaryContainer);
        this.tertiary = hexNumToHexString(scheme.tertiary);
        this.onTertiary = hexNumToHexString(scheme.onTertiary);
        this.tertiaryContainer = hexNumToHexString(scheme.tertiaryContainer);
        this.onTertiaryContainer = hexNumToHexString(scheme.onTertiaryContainer);
        this.error = hexNumToHexString(scheme.error);
        this.onError = hexNumToHexString(scheme.onError);
        this.errorContainer = hexNumToHexString(scheme.errorContainer);
        this.onErrorContainer = hexNumToHexString(scheme.onErrorContainer);
        this.background = hexNumToHexString(scheme.background);
        this.onBackground = hexNumToHexString(scheme.onBackground);
        this.surface = hexNumToHexString(surface);
        this.surface1 = getSurface(1, primary, surface);
        this.surface2 = getSurface(2, primary, surface);
        this.surface3 = getSurface(3, primary, surface);
        this.surface4 = getSurface(4, primary, surface);
        this.surface5 = getSurface(5, primary, surface);
        this.onSurface = hexNumToHexString(scheme.onSurface);
        this.surfaceVariant = hexNumToHexString(scheme.surfaceVariant);
        this.onSurfaceVariant = hexNumToHexString(scheme.onSurfaceVariant);
        this.outline = hexNumToHexString(scheme.outline);
        this.outlineVariant = hexNumToHexString(scheme.outlineVariant);
        this.shadow = hexNumToHexString(scheme.shadow);
        this.scrim = hexNumToHexString(scheme.scrim);
        this.inverseSurface = hexNumToHexString(scheme.inverseSurface);
        this.inverseOnSurface = hexNumToHexString(scheme.inverseOnSurface);
        this.inversePrimary = hexNumToHexString(scheme.inversePrimary);
    }
}

class LightScheme extends CssScheme {
    constructor(scheme: Scheme) {
        super(scheme);
    }
}

class DarkScheme extends CssScheme {
    constructor(scheme: Scheme) {
        super(scheme);
    }
}

function hexNumToHexString(hexNum: number): string {
    return `#${hexNum.toString(16).slice(2)}`;
}

function getSurface(level: number, primary: number, surface: number): string {
    const opacities = [0.05, 0.08, 0.11, 0.12];
    let opacity: number;

    if (level <= 4 && level >= 1) {
        opacity = opacities[Math.trunc(level - 1)];
    } else if (level > 4) {
        opacity = 0.14;
    } else {
        throw new Error("Level must be greater than 0");
    }

    const rst = colorBlend({
        "model": "rgba",
        "value": {"r": redFromArgb(surface), "g": greenFromArgb(surface), "b": blueFromArgb(surface), "a": 1},
    }, {
        "model": "rgba",
        "value": {"r": redFromArgb(primary), "g": greenFromArgb(primary), "b": blueFromArgb(primary), "a": opacity},
    }, "overlay");

    return colorToHex(rst);
}

export default function (source: string): [LightScheme, DarkScheme] {
    const theme = themeFromSourceColor(argbFromHex(source));

    return [
        new LightScheme(theme.schemes.light),
        new DarkScheme(theme.schemes.dark),
    ];
}
