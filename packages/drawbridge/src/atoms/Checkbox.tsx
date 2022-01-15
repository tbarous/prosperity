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
    if (p.checked) return;

    if (p.disabled) {
        return lighten(p.theme.color.primary, 80);
    }

    return p.theme.color.primary;
}

function getBorder(p: IconWrapperProps) {
    if (p.checked) return;

    return p.theme.border.medium;
}

function getBackgroundColor(p: IconWrapperProps) {
    if (!p.checked) {
        return p.theme.color.surface;
    }

    if (p.disabled) {
        return lighten(p.theme.color.primary, 50);
    }

    return p.theme.color.primary;
}

const ripple = keyframes`
  0% {transform: scale(0);}
  100% {transform: scale(1);}
`;

const CheckboxIcon = styled(Icon)<StyledProps>`
  color: ${p => p.theme.color.surface};
  width: ${p => px(p.theme.spacing.s4)};
  height: ${p => px(p.theme.spacing.s4)};
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

const CheckboxStyled = styled.label<StyledProps>`
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
  background-color: ${getBackgroundColor};
  border: ${getBorder};
  border-color: ${getBorderColor};
  width: ${p => px(p.theme.dimension.checkbox.width)};
  height: ${p => px(p.theme.dimension.checkbox.height)};
  border-radius: ${p => p.theme.borderRadius.small};
  display: ${p => p.theme.display.flex};
  align-items: ${p => p.theme.alignItems.center};
  position: ${p => p.theme.position.relative};
  justify-content: ${p => p.theme.justifyContent.center};

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

const Checkbox: FunctionComponent<Props> = (props: Props): ReactElement => {
    const {className, onChange, checked, label, disabled} = props;

    return (
        <CheckboxStyled
            className={className}
        >
            <Input
                type="checkbox"
                onChange={onChange}
                checked={checked}
                disabled={disabled}
            />

            <Wrapper>
                <IconWrapper
                    checked={checked}
                    disabled={disabled}
                >
                    {checked && (
                        <CheckboxIcon
                            icon={Checkmark}
                        />
                    )}
                </IconWrapper>

                <Label
                    disabled={disabled}
                >
                    {label}
                </Label>
            </Wrapper>
        </CheckboxStyled>
    )
}

export default Checkbox;