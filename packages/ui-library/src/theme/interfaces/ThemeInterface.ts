import ThemeBorderInterface from "@theme/interfaces/ThemeBorderInterface";
import ThemeBreakpointInterface from "@theme/interfaces/ThemeBreakpointInterface";
import ThemeColorInterface from "@theme/interfaces/ThemeColorInterface";
import ThemeShadowInterface from "@theme/interfaces/ThemeShadowInterface";
import ThemeSpacingInterface from "@theme/interfaces/ThemeSpacingInterface";
import ThemeDimensionInterface from "@theme/interfaces/ThemeDimensionInterface";
import ThemeFontSizeInterface from "@theme/interfaces/ThemeFontSizeInterface";
import ThemeFontFamilyInterface from "@theme/interfaces/ThemeFontFamilyInterface";
import ThemeFontWeightInterface from "@theme/interfaces/ThemeFontWeightInterface";
import ThemeFontLetterSpacingInterface from "@theme/interfaces/ThemeFontLetterSpacingInterface";
import ThemeBorderRadiusInterface from "@theme/interfaces/ThemeBorderRadiusInterface";
import ThemeCursorInterface from "@theme/interfaces/ThemeCursorInterface";
import ThemeBoxSizingInterface from "@theme/interfaces/ThemeBoxSizingInterface";
import ThemeDisplayInterface from "@theme/interfaces/ThemeDisplayInterface";
import ThemePositionInterface from "@theme/interfaces/ThemePositionInterface";
import ThemeObjectFitInterface from "@theme/interfaces/ThemeObjectFitInterface";
import ThemeTextDecoration from "@theme/light/ThemeTextDecoration";
import ThemeTextDecorationInterface from "@theme/interfaces/ThemeTextDecorationInterface";
import ThemeFlexGrowInterface from "@theme/interfaces/ThemeFlexGrowInterface";
import ThemeFlexWrapInterface from "@theme/interfaces/ThemeFlexWrapInterface";
import ThemeAlignItemsInterface from "@theme/interfaces/ThemeAlignItemsInterface";
import ThemeOverflowInterface from "@theme/interfaces/ThemeOverflowInterface";

interface ThemeInterface {
    breakpoint: ThemeBreakpointInterface,
    color: ThemeColorInterface,
    shadow: ThemeShadowInterface,
    spacing: ThemeSpacingInterface,
    dimension: ThemeDimensionInterface,
    fontSize: ThemeFontSizeInterface,
    fontFamily: ThemeFontFamilyInterface,
    fontWeight: ThemeFontWeightInterface,
    fontLetterSpacing: ThemeFontLetterSpacingInterface,
    borderRadius: ThemeBorderRadiusInterface,
    border: ThemeBorderInterface,
    cursor: ThemeCursorInterface,
    boxSizing: ThemeBoxSizingInterface,
    display: ThemeDisplayInterface,
    position: ThemePositionInterface,
    objectFit: ThemeObjectFitInterface,
    textDecoration: ThemeTextDecorationInterface,
    flexGrow: ThemeFlexGrowInterface,
    flexWrap: ThemeFlexWrapInterface,
    alignItems: ThemeAlignItemsInterface,
    overflow: ThemeOverflowInterface
}

export default ThemeInterface;