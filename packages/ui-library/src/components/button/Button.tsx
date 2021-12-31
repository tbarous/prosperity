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

    return (
        <ButtonStyled {...props}>
            {children}
        </ButtonStyled>
    );
}

export default Button;