import React, {ReactNode, useEffect, useRef, useState} from "react";
import InputStyled from "./styled/InputStyled";
import {BasicComponentProps} from "@typings";
import InputStyledWrapper from "./styled/InputStyledWrapper";
import InputStyledLabel from "./styled/InputStyledLabel";
import useOnClickOutside from "@hooks/useOnClickOutside";

interface Props extends BasicComponentProps {
    label?: string,
    focused?: boolean,
    value?: string
}

const Input: React.FunctionComponent<Props> = (props: Props): React.ReactElement | null => {
    const {children, className, label, focused, value} = props;

    const [isFocused, setIsFocused] = useState(focused);
    const [val, setVal] = useState(value);

    const inputRef = useRef(null);

    useOnClickOutside(inputRef, () => setIsFocused(false));

    return (
        <InputStyledWrapper ref={inputRef} onClick={() => setIsFocused(true)}>
            {label ? <InputStyledLabel focused={Boolean(val) || isFocused}>{label}</InputStyledLabel> : null}

            <InputStyled onChange={(e) => setVal(e.target.value)}/>
        </InputStyledWrapper>
    )
}

export default Input;