import React, {ReactElement, ReactNode} from "react";
import {FunctionVoid} from "@typings";
import {emptyFunction} from "@helpers";
import {Checkmark} from "@icons";
import CheckboxIconStyled from "./styled/checkbox/CheckboxIconStyled";
import RippleStyled, {RippleVariations} from "./common/RippleStyled";
import CheckboxRadioInputStyled from "./common/CheckboxRadioInputStyled";
import CheckboxRadioStyled from "./common/CheckboxRadioStyled";
import CheckboxIconWrapperStyled from "./styled/checkbox/CheckboxIconWrapperStyled";
import CheckboxRadioWrapperStyled from "./common/CheckboxRadioWrapperStyled";
import CheckboxRadioLabelStyled from "./common/CheckboxRadioLabelStyled";
import useRipple from "@hooks/useRipple";

interface T {
    children: ReactNode,
    className?: string,
    onChange?: FunctionVoid,
    checked?: boolean,
    label?: string,
    disabled?: boolean
}

const Checkbox: React.FunctionComponent<T> = (props: T): ReactElement => {
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
                type="checkbox"
                onChange={onChange}
                checked={checked}
                disabled={disabled}
            />

            <CheckboxRadioWrapperStyled>
                <CheckboxIconWrapperStyled
                    onMouseEnter={startRipple}
                    onMouseLeave={stopRipple}
                    checked={checked}
                    disabled={disabled}
                    onClick={startClickRipple}
                >
                    {checked && <CheckboxIconStyled icon={Checkmark} width={12} height={12}/>}

                    {!disabled && ripple && <RippleStyled variation={RippleVariations.BASIC}/>}

                    {clicked && !disabled && <RippleStyled variation={RippleVariations.STRONG}/>}
                </CheckboxIconWrapperStyled>

                {label && <CheckboxRadioLabelStyled disabled={disabled}>{label}</CheckboxRadioLabelStyled>}
            </CheckboxRadioWrapperStyled>
        </CheckboxRadioStyled>
    )
}

export default Checkbox;