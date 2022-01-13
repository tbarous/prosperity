import React, {FunctionComponent, ReactElement} from "react";
import {Checkmark} from "@icons";
import useRipple from "@hooks/useRipple";
import styled from "styled-components";
import {BasicComponentProps, StyledProps} from "@typings";
import Icon from "@atoms/Icon";
import Text from "@atoms/Text";
import {px} from "@utils/ThemeUtils";
import {hexToRgb, lighten} from "@utils/ColorUtils";

const CheckboxIcon = styled(Icon)<StyledProps>`
  color: ${p => p.theme.color.surface};
  width: 12px;
  height: 12px;
`;

const Input = styled.input<StyledProps>`
  position: ${p => p.theme.position.absolute};
  cursor: ${p => p.theme.cursor.pointer};
  opacity: ${p => p.theme.opacity.hidden};
  height: ${p => p.theme.dimension.d0};
  width: ${p => p.theme.dimension.d0};
`;

interface LabelProps extends StyledProps {disabled?: boolean}

const Label = styled(Text)<LabelProps>`
  margin-left: ${p => px(p.theme.spacing.s3)};
  color: ${p => p.disabled ? "rgba(0, 0, 0, 0.2)" : "rgba(0, 0, 0, 0.6)"};
`

const CheckboxStyled = styled.label<StyledProps>`
  display: ${p => p.theme.display.block};
  position: ${p => p.theme.position.relative};
  cursor: ${p => p.theme.cursor.pointer};
  font-size: ${p => p.theme.fontSize.lg};
  border-radius: ${p => p.theme.borderRadius.large};
  user-select: none;
`;

const Wrapper = styled.div<StyledProps>`
  display: ${p => p.theme.display.flex};
  align-items: ${p => p.theme.alignItems.center};
`

interface IconWrapperProps extends StyledProps {
    checked?: boolean,
    disabled?: boolean
}

function getBorder(p: IconWrapperProps) {
    if (!p.checked) {
        if (p.disabled) {
            return lighten(p.theme.color.primary, 20);
        } else {
            return lighten(p.theme.color.primary, 60);
        }
    }
}

function getBackgroundColor(p: IconWrapperProps) {
    if (p.checked) {
        if (p.disabled) {
            return lighten(p.theme.color.primary, 50);
        } else {
            return p.theme.color.primary;
        }
    }
}

const IconWrapper = styled.div<IconWrapperProps>`
  background-color: ${getBackgroundColor};
  border: ${getBorder};
  width: ${p => px(p.theme.dimension.checkbox.width)};
  height: ${p => px(p.theme.dimension.checkbox.height)};
  border-radius: ${p => p.theme.borderRadius.small};
  display: ${p => p.theme.display.flex};
  align-items: ${p => p.theme.alignItems.center};
  position: ${p => p.theme.position.relative};
  justify-content: ${p => p.theme.justifyContent.center};
`

interface Props extends BasicComponentProps {
    onChange?: () => void,
    checked?: boolean,
    label?: string,
    disabled?: boolean
}

const Checkbox: FunctionComponent<Props> = (props: Props): ReactElement => {
    const {className, onChange, checked, label, disabled} = props;

    const {startRipple, stopRipple, startClickRipple, ripple, clicked} = useRipple();

    return (
        <CheckboxStyled className={className}>
            <Input
                type="checkbox"
                onChange={onChange}
                checked={checked}
                disabled={disabled}
            />

            <Wrapper>
                <IconWrapper
                    onMouseEnter={startRipple}
                    onMouseLeave={stopRipple}
                    checked={checked}
                    disabled={disabled}
                    onClick={startClickRipple}
                >
                    {checked && <CheckboxIcon icon={Checkmark}/>}

                    {/*{!disabled && ripple && <RippleStyled variation={RippleVariations.BASIC}/>}*/}
                    {/*{clicked && !disabled && <RippleStyled variation={RippleVariations.STRONG}/>}*/}
                </IconWrapper>

                <Label disabled={disabled}>{label}</Label>
            </Wrapper>
        </CheckboxStyled>
    )
}

export default Checkbox;