import React, {ReactElement} from "react";
import {BasicComponentProps, FunctionVoid} from "@typings";
import {emptyFunction} from "@helpers";
import {Checkmark} from "@icons";
import CheckboxIconWrapper from "./styled/checkbox/CheckboxIconWrapper";
import CheckboxIconStyled from "./styled/checkbox/CheckboxIconStyled";
import RippleStyled, {RippleVariation} from "./styled/common/RippleStyled";
import useRipple from "@components/form/styled/common/useRipple";
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

            <CheckboxRadioWrapper>
                <CheckboxIconWrapper
                    onMouseEnter={startRipple}
                    onMouseLeave={stopRipple}
                    checked={checked}
                    disabled={disabled}
                    onClick={startClickRipple}
                >
                    {checked && <CheckboxIconStyled
                        icon={Checkmark}
                        width={12}
                        height={12}
                    />}

                    {!disabled && ripple && <RippleStyled variation={RippleVariation.BASIC}/>}
                    {clicked && !disabled && <RippleStyled variation={RippleVariation.STRONG}/>}
                </CheckboxIconWrapper>

                {label && <CheckboxRadioLabel disabled={disabled}>{label}</CheckboxRadioLabel>}
            </CheckboxRadioWrapper>
        </CheckboxRadioStyled>
    )
}

export default Checkbox;