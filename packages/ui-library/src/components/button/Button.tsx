import React from "react";
import {BasicComponentProps, ReactElementOrNull} from "@typings";
import SizeEnum from "@components/button/enums/SizeEnum";
import VariationEnum from "@components/button/enums/VariationEnum";
import TypeEnum from "@components/button/enums/TypeEnum";
import ButtonStyled from "./styled/ButtonStyled";

export interface Props extends BasicComponentProps {
    onClick: () => void,
    variation?: VariationEnum,
    size?: SizeEnum,
    type?: TypeEnum,
}

const Button: React.FunctionComponent<Props> = (props: Props): ReactElementOrNull => {
    const {children} = props;

    const enhancedProps = {
        ...props,
        variation: props.variation || VariationEnum.PRIMARY,
        size: props.size || SizeEnum.MEDIUM,
        type: props.type || TypeEnum.BUTTON,
    }

    return (
        <ButtonStyled {...enhancedProps}>
            {children}
        </ButtonStyled>
    );
}

export default Button;