import React, {Children, cloneElement, isValidElement, ReactElement, ReactNode, useRef, useState} from "react";
import useOnClickOutside from "@hooks/useOnClickOutside";
import TooltipStyled from "./styled/TooltipStyled";
import TooltipSeparatorStyled from "./styled/TooltipSeparatorStyled";
import {clone} from "@utils/ComponentUtils";

interface T {
    children: ReactNode,
    className?: string,
    clickable?: boolean
}

const Tooltip: React.FunctionComponent<T> = (props: T): ReactElement => {
    const {
        className,
        children,
        clickable
    } = props;

    const [active, setActive] = useState(false);

    const ref = useRef(null);

    clickable && useOnClickOutside(ref, () => setActive(false));

    const onClick = () => clickable && setActive(!active);
    const activate = () => !clickable && setActive(true);
    const deactivate = () => !clickable && setActive(false);

    return (
        <TooltipStyled
            className={className}
            onMouseEnter={activate}
            onMouseLeave={deactivate}
            ref={ref}
        >
            {Children.map(children, (child, index: number) => index === 0 && clone(child, {onClick}))}

            <TooltipSeparatorStyled/>

            {active && Children.map(children, (child, index: number) => index === 1 && clone(child))}
        </TooltipStyled>
    )
}

export default Tooltip;