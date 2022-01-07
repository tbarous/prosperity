import React, {ReactElement} from "react";
import {BasicComponentProps, FunctionVoid} from "@typings";
import {emptyFunction} from "@helpers";
import Text from "@components/text/Text";
import styled from "styled-components";
import RadioIconWrapper from "./styled/radio/RadioIconWrapper";
import RadioIconStyled from "./styled/radio/RadioIconStyled";
import useRipple from "@components/form/styled/common/useRipple";
import RippleStyled, {RippleVariation} from "./styled/common/RippleStyled";
import CheckboxRadioInputStyled from "./styled/common/CheckboxRadioInputStyled";
import CheckboxRadioStyled from "./styled/common/CheckboxRadioStyled";
import CheckboxRadioWrapper from "./styled/common/CheckboxRadioWrapper";
import CheckboxRadioLabel from "./styled/common/CheckboxRadioLabel";

interface Props extends BasicComponentProps {
    onChange?: FunctionVoid,
    checked?: boolean,
    label?: string,
    disabled?: boolean
}

const TextStyled = styled(Text)`
  margin-left: .5rem;
`

const Radio: React.FunctionComponent<Props> = (props: Props): ReactElement => {
    const {
        children,
        className,
        onChange = emptyFunction,
        checked,
        label,
        disabled
    } = props;

    const {startRipple, stopRipple, startClickRipple, ripple, clicked} = useRipple();

    return (
        <CheckboxRadioStyled
            className={className}
        >
            <CheckboxRadioInputStyled
                type="radio"
                onChange={onChange}
                checked={checked}
            />

            <CheckboxRadioWrapper>
                <RadioIconWrapper
                    onMouseEnter={startRipple}
                    onMouseLeave={stopRipple}
                    checked={checked}
                    onClick={startClickRipple}
                >
                    {checked && <RadioIconStyled/>}

                    {!disabled && ripple && <RippleStyled variation={RippleVariation.BASIC}/>}
                    {clicked && !disabled && <RippleStyled variation={RippleVariation.STRONG}/>}
                </RadioIconWrapper>

                {label && <CheckboxRadioLabel disabled={disabled}>{label}</CheckboxRadioLabel>}
            </CheckboxRadioWrapper>
        </CheckboxRadioStyled>
    )
}

export default Radio;