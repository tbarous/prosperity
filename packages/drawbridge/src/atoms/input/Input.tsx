import React, {FunctionComponent, ReactElement, useRef, useState} from "react";
import {BasicComponentProps} from "@typings";
import useOnClickOutside from "@hooks/useOnClickOutside";
import InputStyled from "@atoms/input/styled/InputStyled";
import InputLineStyled from "@atoms/input/styled/InputLineStyled";
import InputStyledLabel from "@atoms/input/styled/InputLabelStyled";
import InputStyledWrapper from "@atoms/input/styled/InputWrapperStyled";

export interface InputProps extends BasicComponentProps {
    label?: string,
    focused?: boolean,
    value?: string
}

const Input: FunctionComponent<InputProps> = (props: InputProps): ReactElement => {
    const {className, label, focused, value} = props;

    const [isFocused, setIsFocused] = useState(focused);
    const [current, setCurrent] = useState(value);

    const ref = useRef(null);

    useOnClickOutside(ref, () => setIsFocused(false));

    return (
        <InputStyledWrapper focused={isFocused} ref={ref} onClick={() => setIsFocused(true)} className={className}>
            {label && <InputStyledLabel focused={isFocused} filled={!!current}>{label}</InputStyledLabel>}

            <InputStyled onChange={(e: any) => setCurrent(e.target.value)}/>

            <InputLineStyled focused={isFocused}/>
        </InputStyledWrapper>
    )
}

export default Input;