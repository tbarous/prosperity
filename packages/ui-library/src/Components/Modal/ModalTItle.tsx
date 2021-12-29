import React, {ReactNode} from "react";
import styled from "styled-components";
import {ReactElementOrNull} from "../Types";
import Theme from "../Theme/Theme";

const Wrapper = styled.div`
    border-top-left-radius: ${(props: { theme: Theme }) => props.theme.border.radius.primary};
    border-top-right-radius: ${(props: { theme: Theme }) => props.theme.border.radius.primary};
    box-shadow: ${(props: { theme: Theme }) => props.theme.shadow.primary};
    font-size: ${(props: { theme: Theme }) => props.theme.font.size.lg};
    padding: ${(props: { theme: Theme }) => props.theme.spacing.padding.lg};
    width: ${(props: { theme: Theme }) => props.theme.spacing.width.full};
    font-family: ${(props: { theme: Theme }) => props.theme.font.family.secondary};
    height: 10%;
    overflow-y: auto;
`;

interface Props {
    children?: ReactNode
}

const ModalTitle: React.FunctionComponent = (props: Props): ReactElementOrNull => {
    const {children} = props;

    return (
        <Wrapper>
            {children}
        </Wrapper>
    );
}

export default ModalTitle;