import React, {ReactElement} from "react";
import styled, {css, ThemeProvider} from "styled-components";
import GlobalStyledUtils from "@utils/GlobalStyleUtils";
import Light from "@theme/light/Theme";
import {BasicComponentProps} from "@typings";
import "../.storybook/assets/font/font.css";

const GlobalStorybookStyle = GlobalStyledUtils.extendGlobalStyle(css`#root {
  height: 100%;
}`);

export const Wrapper = styled.div``;

const StorybookWrapper: React.FunctionComponent<BasicComponentProps> = (props: BasicComponentProps): ReactElement => {
    const {children, className} = props;

    return (
        <Wrapper
            className={className}
        >
            <GlobalStorybookStyle/>

            <ThemeProvider theme={Light}>
                {children}
            </ThemeProvider>
        </Wrapper>
    )
}

export default StorybookWrapper;