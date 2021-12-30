import styled, {ThemeProvider} from "styled-components";
import React, {ReactNode} from "react";
import Light from "@theme/light";
import "../fonts/fonts.css";
import Theme from "@theme/interfaces";

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
        <Wrapper {...props}>
            <ThemeProvider {...theme}>
                {children}
            </ThemeProvider>
        </Wrapper>
    )
}

export const StorybookColContent = styled.div`
  background-color: ${(props: { theme: Theme }) => props.theme.color.primary};
  padding: 1rem;
  text-align: center;
  color: white;
  font-weight: bold;
  border-radius: 8px;
`;

export const StorybookButtonWrapper = styled.div`
  width: 150px;
`;

export const StorybookWrapperStyled = styled(StorybookWrapper)`
  margin: 1rem;
`;

export default StorybookWrapper;