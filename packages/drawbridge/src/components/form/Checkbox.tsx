import React, {FunctionComponent, ReactElement} from "react";
import {Checkmark} from "@icons";
import CheckboxIconStyled from "@components/form/styled/checkbox/CheckboxIconStyled";
import RippleStyled, {RippleVariations} from "@components/form/styled/common/CheckboxRadioRippleStyled";
import CheckboxRadioInputStyled from "@components/form/styled/common/CheckboxRadioInputStyled";
import CheckboxRadioStyled from "@components/form/styled/common/CheckboxRadioStyled";
import CheckboxIconWrapperStyled from "@components/form/styled/checkbox/CheckboxIconWrapperStyled";
import CheckboxRadioWrapperStyled from "@components/form/styled/common/CheckboxRadioWrapperStyled";
import CheckboxRadioLabelStyled from "@components/form/styled/common/CheckboxRadioLabelStyled";
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
        <CheckboxRadioStyled className={className}>
            <CheckboxRadioInputStyled type="checkbox" onChange={onChange} checked={checked} disabled={disabled}/>

            <CheckboxRadioWrapperStyled>
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

                {label && <CheckboxRadioLabelStyled disabled={disabled}>{label}</CheckboxRadioLabelStyled>}
            </CheckboxRadioWrapperStyled>
        </CheckboxRadioStyled>
    )
}

export default Checkbox;