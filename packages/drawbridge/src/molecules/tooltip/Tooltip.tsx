import React, {Children, FunctionComponent, ReactElement, useRef, useState} from "react";
import useOnClickOutside from "@hooks/useOnClickOutside";
import TooltipStyled from "./styled/TooltipStyled";
import TooltipSeparatorStyled from "./styled/TooltipSeparatorStyled";
import {clone} from "@utils/ComponentUtils";
import {BasicComponentProps} from "@typings";

export interface TooltipProps extends BasicComponentProps {
    clickable?: boolean
}

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

            <TooltipSeparatorStyled/>

            {active && Children.map(children, (child, index: number) => index === 1 && clone(child))}
        </TooltipStyled>
    )
}

export default Tooltip;