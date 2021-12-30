import IColor from "./Color";
import IBorder from "./Border";
import IShadow from "./Shadow";
import IFont from "./Font";
import ISpacing from "./Spacing";
import IBreakpoint from "./Breakpoint";

export type {
    IBorder,
    IBreakpoint,
    IColor,
    IShadow,
    IFont,
    ISpacing,
}

interface Theme {
    border: IBorder,
    breakpoint: IBreakpoint
    color: IColor,
    shadow: IShadow,
    font: IFont,
    spacing: ISpacing,
}

export default Theme;