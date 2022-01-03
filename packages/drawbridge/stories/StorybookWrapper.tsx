import React from "react";
import {css, ThemeProvider} from "styled-components";
import Light from "@theme/light/Theme";
import {Wrapper} from "@stories/GenericStyledComponents";
import {BasicComponentProps, ReactElementOrNull} from "@typings";
import "../fonts/fonts.css";
import extendGlobalStyle from "@theme/utils/GlobalStyle";

const GlobalStorybookStyle = extendGlobalStyle(css`#root {
  height: 100%;
}`);

const StorybookWrapper: React.FunctionComponent<BasicComponentProps> = (props: BasicComponentProps): ReactElementOrNull => {
    const {children} = props;

    return (
        <Wrapper {...props}>
            <GlobalStorybookStyle/>

            <ThemeProvider theme={Light}>
                {children}
            </ThemeProvider>
        </Wrapper>
    )
}

export default StorybookWrapper;