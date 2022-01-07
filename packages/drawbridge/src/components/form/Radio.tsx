import React, {ReactElement, useState} from "react";
import {BasicComponentProps, FunctionVoid} from "@typings";
import {emptyFunction} from "@helpers";
import RadioStyled from "./styled/radio/RadioStyled";
import RadioCheckmarkStyled from "./styled/radio/RadioCheckmarkStyled";
import RadioInputStyled from "./styled/radio/RadioInputStyled";

interface Props extends BasicComponentProps {
    onChange?: FunctionVoid
}

const Radio: React.FunctionComponent<Props> = (props: Props): ReactElement => {
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