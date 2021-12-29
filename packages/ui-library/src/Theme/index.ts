import Theme from "./Theme";
import {fontExample} from "./Font";
import {spacingExample} from "./Spacing";
import {colorExample} from "./Color";
import {borderExample} from "./Border";
import {shadowExample} from "./Shadow";
import {breakpointExample} from "./Breakpoint";

const Basic: Theme = {
    color: colorExample,
    border: borderExample,
    shadow: shadowExample,
    font: {...fontExample, family: {primary: 'Roboto', secondary: 'PlayfairDisplay'}},
    spacing: spacingExample,
    breakpoint: breakpointExample
}

export default Basic;