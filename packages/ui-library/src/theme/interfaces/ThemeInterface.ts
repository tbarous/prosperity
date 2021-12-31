import ThemeBorderInterface from "@theme/interfaces/ThemeBorderInterface";
import ThemeBreakpointInterface from "@theme/interfaces/ThemeBreakpointInterface";
import ThemeColorInterface from "@theme/interfaces/ThemeColorInterface";
import ThemeShadowInterface from "@theme/interfaces/ThemeShadowInterface";
import ThemeFontInterface from "@theme/interfaces/ThemeFontInterface";
import ThemeSpacingInterface from "@theme/interfaces/ThemeSpacingInterface";
import ThemeDimensionInterface from "@theme/interfaces/ThemeDimensionInterface";

interface ThemeInterface {
    border: ThemeBorderInterface,
    breakpoint: ThemeBreakpointInterface,
    color: ThemeColorInterface,
    shadow: ThemeShadowInterface,
    font: ThemeFontInterface,
    spacing: ThemeSpacingInterface,
    dimension: ThemeDimensionInterface
}

export default ThemeInterface;