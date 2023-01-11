import fontConfig from "./fonts";
import * as React from 'react';
import {
    MD3LightTheme as DefaultTheme,
} from 'react-native-paper';
const theme = {
    ...DefaultTheme,
    colors: {
        primary: "rgb(152, 72, 19)",
        onPrimary: "rgb(255, 255, 255)",
        primaryContainer: "rgb(255, 219, 202)",
        onPrimaryContainer: "rgb(51, 17, 0)",
        secondary: "rgb(118, 88, 72)",
        onSecondary: "rgb(255, 255, 255)",
        secondaryContainer: "rgb(255, 219, 202)",
        onSecondaryContainer: "rgb(43, 22, 10)",
        tertiary: "rgb(100, 96, 50)",
        onTertiary: "rgb(255, 255, 255)",
        tertiaryContainer: "rgb(235, 228, 170)",
        onTertiaryContainer: "rgb(31, 28, 0)",
        error: "rgb(186, 26, 26)",
        onError: "rgb(255, 255, 255)",
        errorContainer: "rgb(255, 218, 214)",
        onErrorContainer: "rgb(65, 0, 2)",
        background: "rgb(255, 251, 255)",
        onBackground: "rgb(32, 26, 23)",
        surface: "rgb(255, 251, 255)",
        onSurface: "rgb(32, 26, 23)",
        surfaceVariant: "rgb(244, 222, 212)",
        onSurfaceVariant: "rgb(82, 68, 61)",
        outline: "rgb(133, 116, 107)",
        outlineVariant: "rgb(215, 194, 185)",
        shadow: "rgb(0, 0, 0)",
        scrim: "rgb(0, 0, 0)",
        inverseSurface: "rgb(54, 47, 44)",
        inverseOnSurface: "rgb(251, 238, 233)",
        inversePrimary: "rgb(255, 182, 144)",
        elevation: {
            level0: "transparent",
            level1: "rgb(250, 242, 243)",
            level2: "rgb(247, 237, 236)",
            level3: "rgb(244, 231, 229)",
            level4: "rgb(243, 230, 227)",
            level5: "rgb(241, 226, 222)"
        },
        surfaceDisabled: "rgba(32, 26, 23, 0.12)",
        onSurfaceDisabled: "rgba(32, 26, 23, 0.38)",
        backdrop: "rgba(59, 46, 39, 0.4)",
        fonts: fontConfig,
    }
};
export default theme;