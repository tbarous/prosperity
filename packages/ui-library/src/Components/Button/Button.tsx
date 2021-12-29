import React, {ReactNode} from "react";
import styled, {keyframes} from "styled-components";
import Theme from "@theme/Theme";

interface Props {
    children?: ReactNode,
    onClick: any
}

const Wrapper = styled.button`
    width: 100%;
    height: 100%;
    cursor: pointer;
    border: none;
    color: white;
    padding: ${(props: { theme: Theme }) => props.theme.spacing.padding.md};
    border-radius: ${(props: { theme: Theme }) => props.theme.border.radius.primary};
    background: ${(props: { theme: Theme }) => props.theme.color.primary};
    font-family: ${(props: { theme: Theme }) => props.theme.font.family.primary};
    
    &:hover {
        box-shadow: ${(props: { theme: Theme }) => props.theme.shadow.primary};
    }
`;

const Button: React.FunctionComponent<Props> = (props: Props): React.ReactElement | null => {
    const {children, onClick} = props;

    return (
        <Wrapper onClick={onClick}>
            {children}
        </Wrapper>
    );
}

export default Button;