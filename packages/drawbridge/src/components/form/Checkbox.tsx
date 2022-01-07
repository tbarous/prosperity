import React, {ReactElement} from "react";
import {BasicComponentProps, FunctionVoid} from "@typings";
import {emptyFunction} from "@helpers";
import {Checkmark} from "@icons";
import CheckboxIconStyled from "./styled/checkbox/CheckboxIconStyled";
import RippleStyled, {RippleVariation} from "./styled/common/RippleStyled";
import CheckboxRadioInputStyled from "./styled/common/CheckboxRadioInputStyled";
import CheckboxRadioStyled from "./styled/common/CheckboxRadioStyled";
import CheckboxIconWrapperStyled from "./styled/checkbox/CheckboxIconWrapperStyled";
import CheckboxRadioWrapperStyled from "./styled/common/CheckboxRadioWrapperStyled";
import CheckboxRadioLabelStyled from "./styled/common/CheckboxRadioLabelStyled";
import useRipple from "@hooks/useRipple";

interface Props extends BasicComponentProps {
    onChange?: FunctionVoid,
    checked?: boolean,
    label?: string,
    disabled?: boolean
}

const Checkbox: React.FunctionComponent<Props> = (props: Props): ReactElement => {
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

                    {!disabled && ripple && <RippleStyled variation={RippleVariation.BASIC}/>}

                    {clicked && !disabled && <RippleStyled variation={RippleVariation.STRONG}/>}
                </CheckboxIconWrapperStyled>

                {label && <CheckboxRadioLabelStyled disabled={disabled}>{label}</CheckboxRadioLabelStyled>}
            </CheckboxRadioWrapperStyled>
        </CheckboxRadioStyled>
    )
}

export default Checkbox;