import ThemeInterface from "@theme/interfaces/ThemeInterface";
import ThemeBorder from "@theme/light/ThemeBorder";
import ThemeBreakpoint from "@theme/light/ThemeBreakpoint";
import ThemeColor from "@theme/light/ThemeColor";
import ThemeSpacing from "@theme/light/ThemeSpacing";
import ThemeShadow from "@theme/light/ThemeShadow";
import ThemeDimension from "@theme/light/ThemeDimension";
import ThemeFontSize from "@theme/light/ThemeFontSize";
import ThemeFontFamily from "@theme/light/ThemeFontFamily";
import ThemeFontWeight from "@theme/light/ThemeFontWeight";
import ThemeBorderRadius from "@theme/light/ThemeBorderRadius";
import ThemeLineHeight from "@theme/light/ThemeLineHeight";
import ThemeTransition from "@theme/light/ThemeTransition";
import ThemeLetterSpacing from "@theme/light/ThemeLetterSpacing";
import ThemeBrightness from "@theme/light/ThemeBrightness";

const Light: ThemeInterface = {
    breakpoint: ThemeBreakpoint,
    color: ThemeColor,
    shadow: ThemeShadow,
    spacing: ThemeSpacing,
    dimension: ThemeDimension,
    fontSize: ThemeFontSize,
    fontFamily: ThemeFontFamily,
    fontWeight: ThemeFontWeight,
    letterSpacing: ThemeLetterSpacing,
    borderRadius: ThemeBorderRadius,
    border: ThemeBorder,
    lineHeight: ThemeLineHeight,
    transition: ThemeTransition,
    brightness: ThemeBrightness
}

export default Light;