import React, {Children, cloneElement, isValidElement, ReactNode, useRef, useState} from "react";
import {BasicComponentProps} from "@typings";
import useOnClickOutside from "@hooks/useOnClickOutside";
import TooltipStyled from "./styled/TooltipStyled";
import TooltipSeparatorStyled from "./styled/TooltipSeparatorStyled";

interface Props extends BasicComponentProps {
    clickable?: boolean
}

const Tooltip: React.FunctionComponent<Props> = (props: Props): React.ReactElement | null => {
    const {
        className,
        clickable,
        children
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
            {Children.map(children, (child, index: number) => {
                if (isValidElement(child) && index === 0) return cloneElement(child, {onClick});
            })}

            <TooltipSeparatorStyled/>

            {active && Children.map(children, (child, index: number) => {
                if (isValidElement(child) && index === 1) return cloneElement(child);
            })}
        </TooltipStyled>
    )
}

export default Tooltip;