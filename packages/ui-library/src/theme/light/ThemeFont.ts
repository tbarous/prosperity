import ThemeFontInterface from "@theme/interfaces/ThemeFontInterface";

const ThemeFont: ThemeFontInterface = {
    size: {
        sm: ".75rem",
        md: "0.875rem",
        lg: "1.125rem"
    },
    family: {
        primary: "OpenSans",
        secondary: "Trebuchet"
    },
    weight: {
        light: "300",
        normal: "500",
        bold: "700"
    },
    letterSpacing: {
        zero: "0px",
        small: "1px",
        medium: "2px",
        large: "3px"
    }
}

export default ThemeFont;