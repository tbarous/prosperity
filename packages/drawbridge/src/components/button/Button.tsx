import React, {ReactElement} from "react";
import {BasicComponentProps, ReactElementOrNull} from "@typings";
import ButtonSizeEnum from "@components/button/enums/ButtonSizeEnum";
import ButtonVariationEnum from "@components/button/enums/ButtonVariationEnum";
import ButtonTypeEnum from "@components/button/enums/ButtonTypeEnum";
import ButtonStyled from "./styled/ButtonStyled";

export interface ButtonProps extends BasicComponentProps {
    onClick?: () => void,
    variation?: ButtonVariationEnum,
    size?: ButtonSizeEnum,
    type?: ButtonTypeEnum,
}

const Button: React.FunctionComponent<ButtonProps> = (props: ButtonProps): ReactElementOrNull => {
    const {
        children,
        variation,
        size,
        type,
        onClick
    } = props;

    return (
        <ButtonStyled
            onClick={onClick}
            variation={variation}
            size={size}
            type={type}
        >
            {children}
        </ButtonStyled>
    );
}

export default Button;