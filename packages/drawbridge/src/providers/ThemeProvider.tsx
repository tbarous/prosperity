import {ThemeProvider as DefaultThemeProvider} from "styled-components";
import React, {ReactElement} from "react";
import ThemeInterface from "@theme/interfaces/ThemeInterface";
import {BasicComponentProps} from "@typings";

interface Props extends BasicComponentProps {
    theme?: ThemeInterface
}

const ThemeProvider: React.FunctionComponent<Props> = (props: Props): ReactElement => {
    const {children, className, theme} = props;

    return (
        <DefaultThemeProvider theme={theme}>
            {children}
        </DefaultThemeProvider>
    )
}

export default ThemeProvider;