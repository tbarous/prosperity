import Color from "./Color";
import Border from "./Border";
import Shadow from "./Shadow";
import Font from "./Font";
import Spacing from "./Spacing";
import Breakpoint from "./Breakpoint";

interface Theme {
    color: Color,
    border: Border,
    shadow: Shadow,
    font: Font,
    spacing: Spacing,
    breakpoint: Breakpoint
}

export default Theme;