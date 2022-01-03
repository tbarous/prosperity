import React from "react";
import {ThemeProvider} from "styled-components";
import Light from "@theme/light/Theme";
import {Wrapper} from "@stories/GenericStyledComponents";
import {BasicComponentProps, ReactElementOrNull} from "@typings";
import "../fonts/fonts.css";
import extendGlobalStyle from "@theme/utils/GlobalStyle";

const Global = extendGlobalStyle();

const StorybookWrapper: React.FunctionComponent<BasicComponentProps> = (props: BasicComponentProps): ReactElementOrNull => {
    const {children} = props;

    return (
        <Wrapper {...props}>
            <Global/>

            <ThemeProvider theme={Light}>
                {children}
            </ThemeProvider>
        </Wrapper>
    )
}

export default StorybookWrapper;