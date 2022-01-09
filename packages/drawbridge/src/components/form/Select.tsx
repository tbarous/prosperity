import React, {FunctionComponent, ReactElement, ReactNode} from "react";
import styled from "styled-components";
import {BasicComponentProps} from "@typings";
import SelectStyled from "./styled/select/SelectStyled";

interface SelectProps extends BasicComponentProps{

}

const Select: FunctionComponent<SelectProps> = (props: SelectProps): ReactElement => {
    const {children, className} = props;

    return (
        <SelectStyled className={className}>
            {children}
        </SelectStyled>
    )
}

export default Select;