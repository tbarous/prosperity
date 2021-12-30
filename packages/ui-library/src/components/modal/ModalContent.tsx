import React, {ReactNode} from "react";
import styled from "styled-components";
import {ReactElementOrNull} from "@customTypes/Types";
import Theme from "@theme/Theme";

const Wrapper = styled.div`
    font-size: ${(props: { theme: Theme }) => props.theme.font.size.md};
    padding: ${(props: { theme: Theme }) => props.theme.spacing.padding.lg};
    width: ${(props: { theme: Theme }) => props.theme.spacing.width.full};
    overflow-y: auto;
    height: 70%;
`;

interface Props {
    children?: ReactNode
}

const ModalContent: React.FunctionComponent = (props: Props): ReactElementOrNull => {
    const {children} = props;

    return (
        <Wrapper>
            {children}
        </Wrapper>
    );
}

export default ModalContent;