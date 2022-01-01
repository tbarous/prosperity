import React, {ChangeEvent, ReactNode, useEffect, useRef, useState} from "react";
import InputStyled from "./styled/InputStyled";
import {BasicComponentProps} from "@typings";
import useOnClickOutside from "@hooks/useOnClickOutside";
import InputStyledWrapper from "./styled/InputWrapperStyled";
import InputStyledLabel from "./styled/InputLabelStyled";
import InputLineStyled from "./styled/InputLineStyled";

interface Props extends BasicComponentProps {
    label?: string,
    focused?: boolean,
    value?: string
}

const Input: React.FunctionComponent<Props> = (props: Props): React.ReactElement | null => {
    const {label, focused, value} = props;

    const [isFocused, setIsFocused] = useState(focused);
    const [val, setVal] = useState(value);

    const inputRef = useRef(null);

    useOnClickOutside(inputRef, () => setIsFocused(false));

    return (
        <InputStyledWrapper
            focused={isFocused}
            ref={inputRef}
            onClick={() => setIsFocused(true)}
        >
            {label && <InputStyledLabel focused={isFocused} hasValue={!!val}>{label}</InputStyledLabel>}

            <InputStyled onChange={(e: any) => setVal(e.target.value)}/>

            <InputLineStyled focused={isFocused}/>
        </InputStyledWrapper>
    )
}

export default Input;