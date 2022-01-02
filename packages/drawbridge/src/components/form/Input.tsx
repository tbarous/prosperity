import React, {useRef, useState} from "react";
import {BasicComponentProps, ReactElementOrNull} from "@typings";
import useOnClickOutside from "@hooks/useOnClickOutside";
import InputStyled from "@components/form/styled/input/InputStyled";
import InputLineStyled from "@components/form/styled/input-line/InputLineStyled";
import InputStyledLabel from "./styled/input-label/InputLabelStyled";
import InputStyledWrapper from "./styled/input-wrapper/InputWrapperStyled";

interface Props extends BasicComponentProps {
    label?: string,
    focused?: boolean,
    value?: string
}

const Input: React.FunctionComponent<Props> = (props: Props): ReactElementOrNull => {
    const {
        className,
        label,
        focused,
        value
    } = props;

    const [isFocused, setIsFocused] = useState(focused);
    const [val, setVal] = useState(value);

    const inputRef = useRef(null);

    useOnClickOutside(inputRef, () => setIsFocused(false));

    return (
        <InputStyledWrapper
            focused={isFocused}
            ref={inputRef}
            onClick={() => setIsFocused(true)}
            className={className}
        >
            {label && <InputStyledLabel focused={isFocused} hasValue={!!val}>{label}</InputStyledLabel>}

            <InputStyled onChange={(e: any) => setVal(e.target.value)}/>

            <InputLineStyled focused={isFocused}/>
        </InputStyledWrapper>
    )
}

export default Input;