import styled, {ThemeProvider} from "styled-components";
import React, {ReactNode} from "react";
import Light from "@theme/light";
import "../fonts/fonts.css";

const theme = {
    theme: Light
}

const Wrapper = styled.div`
  font-family: OpenSans, serif;
`;

interface Props {
    children?: ReactNode
}

const StorybookWrapper: React.FunctionComponent<Props> = (props: Props): React.ReactElement | null => {
    const {children} = props;

    return (
        <Wrapper>
            <ThemeProvider {...theme}>
                {children}
            </ThemeProvider>
        </Wrapper>
    )
}

export default StorybookWrapper;