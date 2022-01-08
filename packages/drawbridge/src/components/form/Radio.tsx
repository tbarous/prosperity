import React, {ReactElement} from "react";
import {BasicComponentProps, FunctionVoid} from "@typings";
import {emptyFunction} from "@helpers";
import RadioIconWrapper from "./styled/radio/RadioIconWrapper";
import RadioIconStyled from "./styled/radio/RadioIconStyled";
import RippleStyled, {RippleVariations} from "./common/RippleStyled";
import CheckboxRadioInputStyled from "./common/CheckboxRadioInputStyled";
import CheckboxRadioStyled from "./common/CheckboxRadioStyled";
import useRipple from "@hooks/useRipple";
import CheckboxRadioWrapperStyled from "./common/CheckboxRadioWrapperStyled";
import CheckboxRadioLabelStyled from "./common/CheckboxRadioLabelStyled";

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

                    {!disabled && ripple && <RippleStyled variation={RippleVariations.BASIC}/>}

                    {clicked && !disabled && <RippleStyled variation={RippleVariations.STRONG}/>}
                </RadioIconWrapper>

                {label && <CheckboxRadioLabelStyled disabled={disabled}>{label}</CheckboxRadioLabelStyled>}
            </CheckboxRadioWrapperStyled>
        </CheckboxRadioStyled>
    )
}

export default Radio;