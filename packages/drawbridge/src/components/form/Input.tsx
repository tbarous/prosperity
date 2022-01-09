import React, {FunctionComponent, ReactElement, useRef, useState} from "react";
import {BasicComponentProps} from "@typings";
import useOnClickOutside from "@hooks/useOnClickOutside";
import InputStyled from "@components/form/styled/input/InputStyled";
import InputLineStyled from "@components/form/styled/input/InputLineStyled";
import InputStyledLabel from "@components/form/styled/input/InputLabelStyled";
import InputStyledWrapper from "@components/form/styled/input/InputWrapperStyled";

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