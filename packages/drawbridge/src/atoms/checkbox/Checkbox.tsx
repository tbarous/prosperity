import React, {FunctionComponent, ReactElement} from "react";
import {Checkmark} from "@icons";
import CheckboxIconStyled from "@atoms/checkbox/styled/CheckboxIconStyled";
import RippleStyled, {RippleVariations} from "@atoms/checkbox/styled/CheckboxRippleStyled";
import CheckboxInputStyled from "@atoms/checkbox/styled/CheckboxInputStyled";
import CheckboxStyled from "@atoms/checkbox/styled/CheckboxStyled";
import CheckboxIconWrapperStyled from "@atoms/checkbox/styled/CheckboxIconWrapperStyled";
import CheckboxWrapperStyled from "@atoms/checkbox/styled/CheckboxWrapperStyled";
import CheckboxLabelStyled from "@atoms/checkbox/styled/CheckboxLabelStyled";
import useRipple from "@hooks/useRipple";

interface CheckboxProps {
    className?: string,
    onChange?: () => void,
    checked?: boolean,
    label?: string,
    disabled?: boolean
}

const Checkbox: FunctionComponent<CheckboxProps> = (props: CheckboxProps): ReactElement => {
    const {className, onChange, checked, label, disabled} = props;

    const {startRipple, stopRipple, startClickRipple, ripple, clicked} = useRipple();

    return (
        <CheckboxStyled className={className}>
            <CheckboxInputStyled type="checkbox" onChange={onChange} checked={checked} disabled={disabled}/>

            <CheckboxWrapperStyled>
                <CheckboxIconWrapperStyled
                    onMouseEnter={startRipple}
                    onMouseLeave={stopRipple}
                    checked={checked}
                    disabled={disabled}
                    onClick={startClickRipple}
                >
                    {checked && <CheckboxIconStyled icon={Checkmark}/>}

                    {!disabled && ripple && <RippleStyled variation={RippleVariations.BASIC}/>}

                    {clicked && !disabled && <RippleStyled variation={RippleVariations.STRONG}/>}
                </CheckboxIconWrapperStyled>

                {label && <CheckboxLabelStyled disabled={disabled}>{label}</CheckboxLabelStyled>}
            </CheckboxWrapperStyled>
        </CheckboxStyled>
    )
}

export default Checkbox;