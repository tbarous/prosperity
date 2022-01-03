import React, {ReactNode, useState} from "react";
import CheckboxCheckmarkStyled from "./styled/checkbox-checkmark/CheckboxCheckmarkStyled";
import CheckboxInputStyled from "./styled/checkbox-input/CheckboxInputStyled";
import CheckboxStyled from "./styled/checkbox/CheckboxStyled";
import {BasicComponentProps, FunctionVoid, ReactElementOrNull} from "@typings";
import {emptyFunction} from "../../helpers/Helpers";

interface Props extends BasicComponentProps {
    onChange?: FunctionVoid
}

const Checkbox: React.FunctionComponent<Props> = (props: Props): ReactElementOrNull => {
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
        <CheckboxStyled
            className={className}
        >
            <CheckboxInputStyled type="checkbox" onChange={handleChange} checked={checked}/>
            <CheckboxCheckmarkStyled checked={checked}/>
        </CheckboxStyled>
    )
}

export default Checkbox;