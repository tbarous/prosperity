import React, {ReactElement} from "react";
import styled from "styled-components";
import {BasicComponentProps, FunctionVoid} from "@typings";
import {emptyFunction} from "@helpers";
import Text from "@components/text/Text"
import CheckboxCheckmarkStyled from "@components/form/styled/CheckboxCheckmarkStyled";
import CheckboxInputStyled from "@components/form/styled/CheckboxInputStyled";
import CheckboxStyled from "@components/form/styled/CheckboxStyled";

interface Props extends BasicComponentProps {
    onChange?: FunctionVoid,
    label?: string,
    checked?: boolean
}

const TextStyled = styled(Text)`
  position: relative;
  top: 3px;
`;

const Checkbox: React.FunctionComponent<Props> = (props: Props): ReactElement => {
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