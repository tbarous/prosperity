import ThemeInterface from "@theme/interfaces/ThemeInterface";
import ThemeBorder from "@theme/light/ThemeBorder";
import ThemeBreakpoint from "@theme/light/ThemeBreakpoint";
import ThemeColor from "@theme/light/ThemeColor";
import ThemeSpacing from "@theme/light/ThemeSpacing";
import ThemeShadow from "@theme/light/ThemeShadow";
import ThemeDimension from "@theme/light/ThemeDimension";
import ThemeFontSize from "@theme/light/ThemeFontSizeInterface";
import ThemeFontFamily from "@theme/light/ThemeFontFamilyInterface";
import ThemeFontWeight from "@theme/light/ThemeFontWeightInterface";
import ThemeFontLetterSpacing from "@theme/light/ThemeFontLetterSpacingInterface";
import ThemeBorderRadius from "@theme/light/ThemeBorderRadius";
import ThemeCursor from "@theme/light/ThemeCursor";
import ThemeBoxSizing from "@theme/light/ThemeBoxSizing";
import ThemeDisplay from "@theme/light/ThemeDisplay";
import ThemePosition from "@theme/light/ThemePosition";

const Light: ThemeInterface = {
    breakpoint: ThemeBreakpoint,
    color: ThemeColor,
    shadow: ThemeShadow,
    spacing: ThemeSpacing,
    dimension: ThemeDimension,
    fontSize: ThemeFontSize,
    fontFamily: ThemeFontFamily,
    fontWeight: ThemeFontWeight,
    fontLetterSpacing: ThemeFontLetterSpacing,
    borderRadius: ThemeBorderRadius,
    border: ThemeBorder,
    cursor: ThemeCursor,
    boxSizing: ThemeBoxSizing,
    display: ThemeDisplay,
    position: ThemePosition
}

export default Light;