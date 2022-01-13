import React, {FunctionComponent, ReactElement} from "react";
import {Checkmark} from "@icons";
import styled, {css, keyframes} from "styled-components";
import {BasicComponentProps, StyledProps} from "@typings";
import Icon from "@atoms/Icon";
import Text from "@atoms/Text";
import {px} from "@utils/ThemeUtils";
import {decreaseOpacity, lighten} from "@utils/ColorUtils";

interface LabelProps extends StyledProps {disabled?: boolean}

interface IconWrapperProps extends StyledProps {
    checked?: boolean,
    disabled?: boolean
}

interface Props extends BasicComponentProps {
    onChange?: () => void,
    checked?: boolean,
    label?: string,
    disabled?: boolean
}

function getBorderColor(p: IconWrapperProps) {
    if (p.disabled) {
        return lighten(p.theme.color.primary, 80);
    }

    return p.theme.color.primary;
}

function getBorder(p: IconWrapperProps) {
    return p.theme.border.medium;
}

function getBackgroundColor(p: IconWrapperProps) {
    if (p.disabled) {
        return lighten(p.theme.color.primary, 50);
    }

    return p.theme.color.primary;
}

const ripple = keyframes`
  0% {transform: scale(0);}
  100% {transform: scale(1);}
`;

const RadioChecked = styled.div<StyledProps>`
  background: ${getBackgroundColor};
  width: ${p => px(p.theme.spacing.s4)};
  height: ${p => px(p.theme.spacing.s4)};
  border-radius: ${p => p.theme.borderRadius.circle};
`;

const Input = styled.input<StyledProps>`
  position: ${p => p.theme.position.absolute};
  cursor: ${p => p.theme.cursor.pointer};
  opacity: ${p => p.theme.opacity.hidden};
  height: ${p => p.theme.dimension.d0};
  width: ${p => p.theme.dimension.d0};
`;

const Label = styled(Text)<LabelProps>`
  margin-left: ${p => px(p.theme.spacing.s3)};
  color: ${p => p.disabled ? lighten(p.theme.color.dark, 50) : p.theme.color.dark};
`

const RadioStyled = styled.label<StyledProps>`
  display: ${p => p.theme.display.block};
  position: ${p => p.theme.position.relative};
  cursor: ${p => p.theme.cursor.pointer};
  font-size: ${p => p.theme.fontSize.fs3};
  border-radius: ${p => p.theme.borderRadius.large};
  user-select: none;
`;

const Wrapper = styled.div<StyledProps>`
  display: ${p => p.theme.display.flex};
  align-items: ${p => p.theme.alignItems.center};
`

const IconWrapper = styled.div<IconWrapperProps>`
  border-radius: ${p => p.theme.borderRadius.circle};
  width: ${p => px(p.theme.spacing.s7)};
  height: ${p => px(p.theme.spacing.s7)};
  display: ${p => p.theme.display.flex};
  align-items: ${p => p.theme.alignItems.center};
  background-color: ${p => p.theme.color.surface};
  position: ${p => p.theme.position.relative};
  justify-content: ${p => p.theme.justifyContent.center};
  border: ${getBorder};
  border-color: ${getBorderColor};

  &:hover {
    &:after {
      content: "";
      width: ${p => `40px`};
      height: ${p => `40px`};
      background-color: ${p => decreaseOpacity(p.theme.color.primary, 10)};
      animation: ${p => css`${ripple} .2s linear forwards`};
      display: ${p => p.theme.display.block};
      z-index: -1;
      border-radius: ${p => p.theme.borderRadius.circle};
      position: ${p => p.theme.position.absolute};
    }
  }
`

const Radio: FunctionComponent<Props> = (props: Props): ReactElement => {
    const {className, onChange, checked, label, disabled} = props;

    return (
        <RadioStyled className={className}>
            <Input type="radio" onChange={onChange} checked={checked} disabled={disabled}/>

            <Wrapper>
                <IconWrapper checked={checked} disabled={disabled}>
                    {checked && <RadioChecked/>}
                </IconWrapper>

                <Label disabled={disabled}>{label}</Label>
            </Wrapper>
        </RadioStyled>
    )
}

export default Radio;