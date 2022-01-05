import React, {ReactElement, useState} from "react";
import {BasicComponentProps, FunctionVoid} from "@typings";
import {emptyFunction} from "@helpers";
import RadioStyled from "@components/form/styled/RadioStyled";
import RadioInputStyled from "@components/form/styled/RadioInputStyled";
import RadioCheckmarkStyled from "@components/form/styled/RadioCheckmarkStyled";

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