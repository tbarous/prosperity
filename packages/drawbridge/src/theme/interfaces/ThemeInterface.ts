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
    brightness: ThemeBrightnessInterface
}

export default ThemeInterface;