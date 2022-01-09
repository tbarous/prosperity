import {ThemeProvider as StyledComponentsThemeProvider} from "styled-components";
import React, {FunctionComponent, ReactElement, ReactNode} from "react";
import ThemeInterface from "@theme/interfaces/ThemeInterface";
import {BasicComponentProps} from "@typings";

export interface ThemeProviderProps extends BasicComponentProps {
    theme: ThemeInterface,
}

const ThemeProvider: FunctionComponent<ThemeProviderProps> = (props: ThemeProviderProps): ReactElement => {
    const {children, theme} = props;

    return (
        <StyledComponentsThemeProvider theme={theme}>
            {children}
        </StyledComponentsThemeProvider>
    )
}

export default ThemeProvider;