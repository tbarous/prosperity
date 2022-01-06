import React, {ReactElement} from "react";
import styled, {css, } from "styled-components";
import GlobalStyledUtils from "@tbarous/drawbridge/utils/GlobalStyleUtils";
import Light from "@tbarous/drawbridge/theme/light/Theme";
import "../.storybook/assets/font/font.css";
import ThemeProvider from "@tbarous/drawbridge/providers/ThemeProvider"

const GlobalStorybookStyle = GlobalStyledUtils.extendGlobalStyle(css`#root {
  height: 100%;
}`);

export const Wrapper = styled.div``;

const StorybookWrapper: React.FunctionComponent<any> = (props: any): ReactElement => {
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