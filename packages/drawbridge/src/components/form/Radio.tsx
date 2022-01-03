import React, {ReactNode, useState} from "react";
import CheckboxCheckmarkStyled from "./styled/checkbox-checkmark/CheckboxCheckmarkStyled";
import CheckboxInputStyled from "./styled/checkbox-input/CheckboxInputStyled";
import CheckboxStyled from "./styled/checkbox/CheckboxStyled";
import {BasicComponentProps, FunctionVoid, ReactElementOrNull} from "@typings";
import {emptyFunction} from "../../helpers/Helpers";
import RadioStyled from "./styled/radio/RadioStyled";
import RadioInputStyled from "./styled/radio-input/RadioInputStyled";
import RadioCheckmarkStyled from "./styled/radio-checkmark/RadioCheckmarkStyled";

interface Props extends BasicComponentProps {
    onChange?: FunctionVoid
}

const Radio: React.FunctionComponent<Props> = (props: Props): ReactElementOrNull => {
    const {
        children,
        className,
        onChange = emptyFunction
    } = props;

    const [checked, setChecked] = useState(false);

    function handleChange() {
        setChecked(!checked)
    }

    return (
        <RadioStyled
            className={className}
        >
            <RadioInputStyled type="radio" onChange={handleChange} checked={checked}/>
            <RadioCheckmarkStyled checked={checked}/>
        </RadioStyled>
    )
}

export default Radio;