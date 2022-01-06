import {ThemeProvider as StyledComponentsThemeProvider} from "styled-components";
import React, {ReactElement} from "react";
import ThemeInterface from "@theme/interfaces/ThemeInterface";
import {BasicComponentProps} from "@typings";

interface Props extends BasicComponentProps {
    theme?: ThemeInterface
}

const ThemeProvider: React.FunctionComponent<Props> = (props: Props): ReactElement => {
    const {children, className, theme} = props;

    return (
        <StyledComponentsThemeProvider theme={theme}>
            {children}
        </StyledComponentsThemeProvider>
    )
}

export default ThemeProvider;