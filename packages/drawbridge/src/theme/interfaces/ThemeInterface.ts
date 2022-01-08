import ThemeBorderInterface from "@theme/interfaces/ThemeBorderInterface";
import ThemeBreakpointInterface from "@theme/interfaces/ThemeBreakpointInterface";
import ThemeColorInterface from "@theme/interfaces/ThemeColorInterface";
import ThemeShadowInterface from "@theme/interfaces/ThemeShadowInterface";
import ThemeSpacingInterface from "@theme/interfaces/ThemeSpacingInterface";
import ThemeDimensionInterface from "@theme/interfaces/ThemeDimensionInterface";
import ThemeFontSizeInterface from "@theme/interfaces/ThemeFontSizeInterface";
import ThemeFontFamilyInterface from "@theme/interfaces/ThemeFontFamilyInterface";
import ThemeFontWeightInterface from "@theme/interfaces/ThemeFontWeightInterface";
import ThemeLetterSpacingInterface from "@theme/interfaces/ThemeLetterSpacingInterface";
import ThemeBorderRadiusInterface from "@theme/interfaces/ThemeBorderRadiusInterface";
import ThemeLineHeightInterface from "@theme/interfaces/ThemeLineHeightInterface";
import ThemeTransitionInterface from "@theme/interfaces/ThemeTransitionInterface";
import ThemeBrightnessInterface from "@theme/interfaces/ThemeBrightnessInterface";
import ThemeZIndexInterface from "@theme/interfaces/ThemeZIndexInterface";
import ThemeTransformInterface from "@theme/interfaces/ThemeTransformInterface";
import ThemeOpacityInterface from "@theme/interfaces/ThemeOpacityInterface";
import ThemeCursorInterface from "@theme/interfaces/ThemeCursorInterface";
import ThemeBoxSizingInterface from "@theme/interfaces/ThemeBoxSizingInterface";
import ThemeDisplayInterface from "@theme/interfaces/ThemeDisplayInterface";
import ThemePositionInterface from "@theme/interfaces/ThemePositionInterface";
import ThemeObjectFitInterface from "@theme/interfaces/ThemeObjectFitInterface";
import ThemeTextDecorationInterface from "@theme/interfaces/ThemeTextDecorationInterface";
import ThemeFlexGrowInterface from "@theme/interfaces/ThemeFlexGrowInterface";
import ThemeFlexWrapInterface from "@theme/interfaces/ThemeFlexWrapInterface";
import ThemeAlignItemsInterface from "@theme/interfaces/ThemeAlignItemsInterface";
import ThemeOverflowInterface from "@theme/interfaces/ThemeOverflowInterface";
import ThemeTextAlignInterface from "@theme/interfaces/ThemeTextAlignInterface";
import ThemeJustifyContentInterface from "@theme/interfaces/ThemeJustifyContentInterface";
import ThemeAnimationInterface from "@theme/interfaces/ThemeAnimationInterface";

interface ThemeInterface {
    breakpoint: ThemeBreakpointInterface,
    color: ThemeColorInterface,
    shadow: ThemeShadowInterface,
    spacing: ThemeSpacingInterface,
    dimension: ThemeDimensionInterface,
    fontSize: ThemeFontSizeInterface,
    fontFamily: ThemeFontFamilyInterface,
    fontWeight: ThemeFontWeightInterface,
    letterSpacing: ThemeLetterSpacingInterface,
    borderRadius: ThemeBorderRadiusInterface,
    border: ThemeBorderInterface,
    lineHeight: ThemeLineHeightInterface,
    transition: ThemeTransitionInterface,
    brightness: ThemeBrightnessInterface,
    zIndex: ThemeZIndexInterface,
    transform: ThemeTransformInterface,
    opacity: ThemeOpacityInterface,
    cursor: ThemeCursorInterface,
    boxSizing: ThemeBoxSizingInterface,
    display: ThemeDisplayInterface,
    position: ThemePositionInterface,
    objectFit: ThemeObjectFitInterface,
    textDecoration: ThemeTextDecorationInterface,
    flexGrow: ThemeFlexGrowInterface,
    flexWrap: ThemeFlexWrapInterface,
    alignItems: ThemeAlignItemsInterface,
    overflow: ThemeOverflowInterface,
    textAlign: ThemeTextAlignInterface,
    justifyContent: ThemeJustifyContentInterface,
    animation: ThemeAnimationInterface
}

export default ThemeInterface;