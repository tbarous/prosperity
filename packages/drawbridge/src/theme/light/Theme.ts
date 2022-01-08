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
import ThemeZIndex from "@theme/light/ThemeZIndex";
import ThemeTransform from "@theme/light/ThemeTransform";
import ThemeOpacity from "@theme/light/ThemeOpacity";
import ThemeCursor from "@theme/light/ThemeCursor";
import ThemeBoxSizing from "@theme/light/ThemeBoxSizing";
import ThemeDisplay from "@theme/light/ThemeDisplay";
import ThemePosition from "@theme/light/ThemePosition";
import ThemeObjectFit from "@theme/light/ThemeObjectFit";
import ThemeTextDecoration from "@theme/light/ThemeTextDecoration";
import ThemeFlexGrow from "@theme/light/ThemeFlexGrow";
import ThemeFlexWrap from "@theme/light/ThemeFlexWrap";
import ThemeAlignItems from "@theme/light/ThemeAlignItems";
import ThemeOverflow from "@theme/light/ThemeOverflow";
import ThemeTextAlign from "@theme/light/ThemeTextAlign";
import ThemeJustifyContent from "@theme/light/ThemeJustifyContent";
import ThemeAnimation from "@theme/light/ThemeAnimation";

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
    brightness: ThemeBrightness,
    zIndex: ThemeZIndex,
    transform: ThemeTransform,
    opacity: ThemeOpacity,
    cursor: ThemeCursor,
    boxSizing: ThemeBoxSizing,
    display: ThemeDisplay,
    position: ThemePosition,
    objectFit: ThemeObjectFit,
    textDecoration: ThemeTextDecoration,
    flexGrow: ThemeFlexGrow,
    flexWrap: ThemeFlexWrap,
    alignItems: ThemeAlignItems,
    overflow: ThemeOverflow,
    textAlign: ThemeTextAlign,
    justifyContent: ThemeJustifyContent,
    animation: ThemeAnimation
}

export default Light;

export type ThemeType = typeof Light;