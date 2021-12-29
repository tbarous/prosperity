import React, {ReactNode} from "react";
import styled, {keyframes} from "styled-components";
import Theme from "../../Theme/Theme";

export enum Variation {
    PRIMARY = 'primary',
    SECONDARY = 'secondary'
}

export enum Size {
    SMALL = 'sm',
    BIG = 'md'
}

export interface Props {
    children?: ReactNode,
    onClick: any,
    variation: Variation,
    size: Size
}

const Wrapper = styled.button`
    padding: ${(props: { theme: Theme, variation: Variation, size: Size }) => props.theme.spacing.padding[props.size] || props.theme.spacing.padding.sm};
    border-radius: ${(props: { theme: Theme, variation: Variation }) => props.theme.border.radius.primary};
    background: ${(props: { theme: Theme, variation: Variation }) => props.theme.color[props.variation] || props.theme.color.primary};
    font-family: ${(props: { theme: Theme, variation: Variation }) => props.theme.font.family.primary};
    box-shadow: ${(props: { theme: Theme, variation: Variation }) => props.theme.shadow.primary};
    width: 100%;
    height: 100%;
    cursor: pointer;
    border: none;
    color: white;
    letter-spacing: 1px;
    font-size: 14px;
    font-weight: bold;
    
    &:hover {
        box-shadow: ${(props: { theme: Theme, variation: Variation }) => props.theme.shadow.secondary};
    }
    
    &:focus {
        filter: brightness(110%);
    }
    
    // &:active {
    //     filter: brightness(85%);
    // }
    
    &:visited {
        background: red;
    }
`;

const Button: React.FunctionComponent<Props> = (props: Props): React.ReactElement | null => {
    const {children, onClick, variation, size} = props;

    return (
        <Wrapper onClick={onClick} variation={variation} size={size}>
            {children}
        </Wrapper>
    );
}

export default Button;