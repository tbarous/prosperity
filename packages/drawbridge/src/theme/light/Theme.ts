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
import ThemeFontLetterSpacing from "@theme/light/ThemeFontLetterSpacing";
import ThemeBorderRadius from "@theme/light/ThemeBorderRadius";
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
import ThemeLineHeight from "@theme/light/ThemeLineHeight";
import ThemeJustifyContent from "@theme/light/ThemeJustifyContent";
import ThemeTransition from "@theme/light/ThemeTransition";

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
    position: ThemePosition,
    objectFit: ThemeObjectFit,
    textDecoration: ThemeTextDecoration,
    flexGrow: ThemeFlexGrow,
    flexWrap: ThemeFlexWrap,
    alignItems: ThemeAlignItems,
    overflow: ThemeOverflow,
    textAlign: ThemeTextAlign,
    lineHeight: ThemeLineHeight,
    justifyContent: ThemeJustifyContent,
    transition: ThemeTransition
}

export default Light;