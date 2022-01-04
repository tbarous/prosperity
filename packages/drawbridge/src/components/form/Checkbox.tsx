import React, {ReactNode, useState} from "react";
import CheckboxCheckmarkStyled from "./styled/checkbox-checkmark/CheckboxCheckmarkStyled";
import CheckboxInputStyled from "./styled/checkbox-input/CheckboxInputStyled";
import CheckboxStyled from "./styled/checkbox/CheckboxStyled";
import {BasicComponentProps, FunctionVoid, ReactElementOrNull} from "@typings";
import {emptyFunction} from "../../helpers/Helpers";
import Text from "@components/text/Text"
import styled from "styled-components";

interface Props extends BasicComponentProps {
    onChange?: FunctionVoid,
    label?: string,
    checked?: boolean
}

const TextStyled = styled(Text)`
  position: relative;
  top: 3px;
`;

const Checkbox: React.FunctionComponent<Props> = (props: Props): ReactElementOrNull => {
    const {
        children,
        className,
        onChange = emptyFunction,
        label,
        checked
    } = props;

    return (
        <CheckboxStyled
            className={className}
        >
            <CheckboxInputStyled
                type="checkbox"
                onChange={onChange}
                checked={checked}
            />

            <TextStyled>{label}</TextStyled>

            <CheckboxCheckmarkStyled
                checked={checked}
            />
        </CheckboxStyled>
    )
}

export default Checkbox;