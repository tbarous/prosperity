import React from "react";
import {BasicComponentProps, ReactElementOrNull} from "@typings";
import ButtonWrapper from "./styled/ButtonWrapper";
import Size from "@components/button/enums/Size";
import Variation from "@components/button/enums/Variation";
import Type from "@components/button/enums/Type";

export interface Props extends BasicComponentProps {
    onClick: () => void,
    variation?: Variation,
    size?: Size,
    type?: Type,
}

const Button: React.FunctionComponent<Props> = (props: Props): ReactElementOrNull => {
    const {children} = props;

    const enhancedProps = {
        ...props,
        variation: props.variation || Variation.PRIMARY,
        size: props.size || Size.MEDIUM,
        type: props.type || Type.BUTTON,
    }

    return (
        <ButtonWrapper {...enhancedProps}>
            {children}
        </ButtonWrapper>
    );
}

export default Button;