import React, {Children, FunctionComponent, ReactElement, useRef, useState} from "react";
import useOnClickOutside from "@hooks/useOnClickOutside";
import {clone} from "@utils/ComponentUtils";
import {BasicComponentProps, StyledProps} from "@typings";
import styled from "styled-components";
import {px} from "@utils/ThemeUtils";

export interface TooltipProps extends BasicComponentProps {
    clickable?: boolean
}

export interface TooltipStyledProps extends StyledProps {}

const TooltipStyled = styled.div<TooltipStyledProps>`
  position: ${p => p.theme.position.relative};
`;

const TooltipSeparator = styled.div<StyledProps>`
  height: ${p => px(p.theme.spacing.s8)};
  bottom: -${p => px(p.theme.spacing.s8)};
  position: ${p => p.theme.position.absolute};
  width: ${p => p.theme.dimension.d100};
`;

const TooltipContent = styled.div<StyledProps>`
  position: ${p => p.theme.position.absolute};
  left: ${p => p.theme.dimension.d40};
  margin-top: ${p => px(p.theme.spacing.s5)};
`;



const Tooltip: FunctionComponent<TooltipProps> = (props: TooltipProps): ReactElement => {
    const {className, children, clickable} = props;

    const [active, setActive] = useState(false);

    const ref = useRef(null);

    clickable && useOnClickOutside(ref, () => setActive(false));

    const onClick = () => clickable && setActive(!active);
    const activate = () => !clickable && setActive(true);
    const deactivate = () => !clickable && setActive(false);

    return (
        <TooltipStyled className={className} onMouseEnter={activate} onMouseLeave={deactivate} ref={ref}>
            {Children.map(children, (child, index: number) => index === 0 && clone(child, {onClick}))}

            <TooltipSeparator/>

            {active && Children.map(children, (child, index: number) => index === 1 && clone(child))}
        </TooltipStyled>
    )
}

export default Tooltip;