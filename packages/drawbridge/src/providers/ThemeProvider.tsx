import {ThemeProvider as StyledComponentsThemeProvider} from "styled-components";
import React, {ReactElement, ReactNode} from "react";
import ThemeInterface from "@theme/interfaces/ThemeInterface";

interface T {
    theme?: ThemeInterface,
    children?: ReactNode,
}

const ThemeProvider: React.FunctionComponent<T> = (props: T): ReactElement => {
    const {
        children,
        theme
    } = props;

    return (
        <StyledComponentsThemeProvider
            theme={theme}
        >
            {children}
        </StyledComponentsThemeProvider>
    )
}

export default ThemeProvider;