import React from "react";
import {ThemeProvider} from "styled-components";
import Light from "@theme/light/Theme";
import {Wrapper} from "@stories/GenericStyledComponents";
import {BasicComponentProps, ReactElementOrNull} from "@typings";
import "../fonts/fonts.css";

const StorybookWrapper: React.FunctionComponent<BasicComponentProps> = (props: BasicComponentProps): ReactElementOrNull => {
    const {children} = props;

    return (
        <Wrapper {...props}>
            <ThemeProvider theme={Light}>
                {children}
            </ThemeProvider>
        </Wrapper>
    )
}

export default StorybookWrapper;