import React, {FunctionComponent, ReactElement, useRef, useState} from "react";
import {BasicComponentProps, StyledProps} from "@typings";
import useOnClickOutside from "@hooks/useOnClickOutside";
import styled from "styled-components";
import {px} from "@utils/ThemeUtils";
import ThemeInterface from "@theme/interfaces/ThemeInterface";

const Label = styled.label<{ focused?: boolean, filled?: boolean, theme: ThemeInterface }>`
  font-size: ${p => p.focused || p.filled ? px(p.theme.fontSize.fs1) : px(p.theme.fontSize.fs3)};
  color: ${p => p.focused || p.filled ? p.theme.color.primary : p.theme.color.light};
  transform: ${p => p.focused || p.filled ? "translateY(-20px)" : ""};
  transition: ${p => "transform .2s linear"};
  position: ${p => p.theme.position.absolute};
  font-weight: ${p => p.theme.fontWeight.bold};
  font-family: ${p => p.theme.fontFamily.primary};
  pointer-events: none;
`;

const Line = styled.div<{ focused?: boolean, filled?: boolean }>`
  transform: ${p => p.focused || p.filled ? "scale(1)" : "scale(0)"};
  transition: ${p => `transform .5s`};
  bottom: ${p => `-1px`};
  height: ${p => px(p.theme.spacing.s1)};
  left: ${p => px(p.theme.spacing.s0)};
  position: ${p => p.theme.position.absolute};
  background-color: ${p => p.theme.color.primary};
  width: ${p => p.theme.dimension.d100};
`;


const InputStyled = styled.input<{ focused?: boolean, onChange: any }>`
  padding: ${p => px(p.theme.spacing.s0)};
  margin: ${p => px(p.theme.spacing.s0)};
  border: ${p => p.theme.border.none};
  height: ${p => p.theme.dimension.d100};
  width: ${p => p.theme.dimension.d100};
  font-size: ${p => p.theme.fontSize.fs4};
  border-radius: ${p => p.theme.borderRadius.medium};
  font-family: ${p => p.theme.fontFamily.primary};
  outline: none;
`;

const Wrapper = styled.div<{ focused?: boolean }>`
  height: ${p => px(p.theme.spacing.s10)};
  display: ${p => p.theme.display.flex};
  align-items: ${p => p.theme.alignItems.center};
  position: ${p => p.theme.position.relative};
  border-bottom: ${p => p.theme.border.light};
  border-color: ${p => p.theme.color.light};
`;

export interface Props extends BasicComponentProps {
    label?: string,
    focused?: boolean,
    value?: string,
    onChange?: (e: InputEvent) => void
}

const Input: FunctionComponent<Props> = (props: Props): ReactElement => {
    const {className, label, focused, value, onChange} = props;

    const [isFocused, setIsFocused] = useState(focused);

    const ref = useRef(null);

    useOnClickOutside(ref, () => setIsFocused(false));

    function onFocus() {
        setIsFocused(true)
    }

    return (
        <Wrapper focused={isFocused} ref={ref} onClick={onFocus} className={className}>
            <Label focused={isFocused} filled={!!value}>{label}</Label>
            <InputStyled onChange={onChange} value={value} />
            <Line focused={isFocused} filled={!!value} />
        </Wrapper>
    )
}

export default Input;