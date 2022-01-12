import React, {ReactElement} from "react";
import {BasicComponentProps} from "@typings";
import RadioIconWrapper from "@atoms/radio/styled/RadioIconWrapper";
import RadioIconStyled from "@atoms/radio/styled/RadioIconStyled";
import RippleStyled, {RippleVariations} from "@atoms/radio/styled/RadioRippleStyled";
import RadioInputStyled from "@atoms/radio/styled/RadioInputStyled";
import RadioStyled from "@atoms/radio/styled/RadioStyled";
import RadioWrapperStyled from "@atoms/radio/styled/RadioWrapperStyled";
import RadioLabelStyled from "@atoms/radio/styled/RadioLabelStyled";
import useRipple from "@hooks/useRipple";

export interface RadioProps extends BasicComponentProps {
    onChange?: () => void,
    checked?: boolean,
    label?: string,
    disabled?: boolean
}

const Radio: React.FunctionComponent<RadioProps> = (props: RadioProps): ReactElement => {
    const {className, onChange, checked, label, disabled} = props;

    const {startRipple, stopRipple, startClickRipple, ripple, clicked} = useRipple();

    return (
        <RadioStyled className={className}>
            <RadioInputStyled type="radio" onChange={!disabled ? onChange : () => {}} checked={checked}/>

            <RadioWrapperStyled>
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

                {label && <RadioLabelStyled disabled={disabled}>{label}</RadioLabelStyled>}
            </RadioWrapperStyled>
        </RadioStyled>
    )
}

export default Radio;