import React, {ReactElement} from "react";
import {BasicComponentProps, FunctionVoid} from "@typings";
import {emptyFunction} from "@helpers";
import RadioIconWrapper from "./styled/radio/RadioIconWrapper";
import RadioIconStyled from "./styled/radio/RadioIconStyled";
import RippleStyled, {RippleVariation} from "./styled/common/RippleStyled";
import CheckboxRadioInputStyled from "./styled/common/CheckboxRadioInputStyled";
import CheckboxRadioStyled from "./styled/common/CheckboxRadioStyled";
import useRipple from "@hooks/useRipple";
import CheckboxRadioWrapperStyled from "./styled/common/CheckboxRadioWrapperStyled";
import CheckboxRadioLabelStyled from "./styled/common/CheckboxRadioLabelStyled";

interface Props extends BasicComponentProps {
    onChange?: FunctionVoid,
    checked?: boolean,
    label?: string,
    disabled?: boolean
}

const Radio: React.FunctionComponent<Props> = (props: Props): ReactElement => {
    const {
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
                onChange={!disabled ? onChange : () => {
                }}
                checked={checked}
            />

            <CheckboxRadioWrapperStyled>
                <RadioIconWrapper
                    onMouseEnter={startRipple}
                    onMouseLeave={stopRipple}
                    checked={checked}
                    disabled={disabled}
                    onClick={startClickRipple}
                >
                    {checked && <RadioIconStyled disabled={disabled} checked={checked}/>}

                    {!disabled && ripple && <RippleStyled variation={RippleVariation.BASIC}/>}

                    {clicked && !disabled && <RippleStyled variation={RippleVariation.STRONG}/>}
                </RadioIconWrapper>

                {label && <CheckboxRadioLabelStyled disabled={disabled}>{label}</CheckboxRadioLabelStyled>}
            </CheckboxRadioWrapperStyled>
        </CheckboxRadioStyled>
    )
}

export default Radio;