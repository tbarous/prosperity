import React, {ReactElement} from "react";
import {BasicComponentProps, FunctionVoid} from "@typings";
import RadioIconWrapper from "./styled/radio/RadioIconWrapper";
import RadioIconStyled from "./styled/radio/RadioIconStyled";
import RippleStyled, {RippleVariations} from "@components/form/styled/common/CheckboxRadioRippleStyled";
import CheckboxRadioInputStyled from "@components/form/styled/common/CheckboxRadioInputStyled";
import CheckboxRadioStyled from "@components/form/styled/common/CheckboxRadioStyled";
import CheckboxRadioWrapperStyled from "@components/form/styled/common/CheckboxRadioWrapperStyled";
import CheckboxRadioLabelStyled from "@components/form/styled/common/CheckboxRadioLabelStyled";
import useRipple from "@hooks/useRipple";

export interface RadioProps extends BasicComponentProps {
    onChange?: FunctionVoid,
    checked?: boolean,
    label?: string,
    disabled?: boolean
}

const Radio: React.FunctionComponent<RadioProps> = (props: RadioProps): ReactElement => {
    const {className, onChange, checked, label, disabled} = props;

    const {startRipple, stopRipple, startClickRipple, ripple, clicked} = useRipple();

    return (
        <CheckboxRadioStyled className={className}>
            <CheckboxRadioInputStyled type="radio" onChange={!disabled ? onChange : () => {}} checked={checked}/>

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