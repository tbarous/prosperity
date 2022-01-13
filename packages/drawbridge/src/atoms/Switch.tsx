import React, {FunctionComponent, ReactElement} from "react";
import {BasicComponentProps, StyledProps} from "@typings";
import styled from "styled-components";
import {px} from "@utils/ThemeUtils";

interface CircleProps extends StyledProps {active?: boolean}

const Circle = styled.div<CircleProps>`
  transform: ${p => `translateX(${p.active ? "calc(100% + 2px)" : "-2px"})`};
  transition: ${p => "transform .3s"};
  width: ${p => px(p.theme.spacing.s6)};
  height: ${p => px(p.theme.spacing.s6)};
  background: ${p => p.theme.color.primary};
  position: ${p => p.theme.position.absolute};
  border-radius: ${p => p.theme.borderRadius.circle};
  top: -${p => px(p.theme.spacing.s1)};
`;

interface SwitchStyledProps extends StyledProps {}

const SwitchStyled = styled.div<SwitchStyledProps>`
  width: ${p => px(p.theme.spacing.s10)};
  height: ${p => px(p.theme.spacing.s4)};
  background: ${p => p.theme.color.secondary};
  border-radius: ${p => p.theme.borderRadius.large};
  position: ${p => p.theme.position.relative};
  cursor: ${p => p.theme.cursor.pointer};
`;

export interface Props extends BasicComponentProps {
    active?: boolean,
    onChange?: () => void
}

const Switch: FunctionComponent<Props> = (props: Props): ReactElement => {
    const {className, active, onChange} = props;

    return (
        <SwitchStyled className={className} onClick={onChange}>
            <Circle active={active}/>
        </SwitchStyled>
    )
}

export default Switch;
