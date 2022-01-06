import React from "react";
import ThemeInterface from "../theme/interfaces/ThemeInterface";
import { BasicComponentProps } from "../typings/index";
interface Props extends BasicComponentProps {
    theme?: ThemeInterface;
}
declare const CustomThemeProvider: React.FunctionComponent<Props>;
export default CustomThemeProvider;
