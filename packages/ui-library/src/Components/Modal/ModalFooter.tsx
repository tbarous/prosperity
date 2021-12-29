import React, {ReactNode} from "react";
import styled from "styled-components";
import {ReactElementOrNull} from "../Types";
import Theme from "../Theme/Theme";

const Wrapper = styled.div`
    box-shadow: ${(props: { theme: Theme }) => props.theme.shadow.primary};
    border-bottom-left-radius: ${(props: { theme: Theme }) => props.theme.border.radius.primary};
    border-bottom-right-radius: ${(props: { theme: Theme }) => props.theme.border.radius.primary};
    font-size: ${(props: { theme: Theme }) => props.theme.font.size.md};
    padding: ${(props: { theme: Theme }) => props.theme.spacing.padding.sm} ${(props: { theme: Theme }) => props.theme.spacing.padding.lg};
    width: ${(props: { theme: Theme }) => props.theme.spacing.width.full};
    position: absolute;
    bottom: 0;
    height: 20%;
    overflow-y: auto;
`;

interface Props {
    children?: ReactNode
}

const ModalFooter: React.FunctionComponent = (props: Props): ReactElementOrNull => {
    const {children} = props;

    return (
        <Wrapper>
            {children}
        </Wrapper>
    );
}

export default ModalFooter;