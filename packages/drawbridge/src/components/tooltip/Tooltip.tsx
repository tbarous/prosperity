import React, {ReactNode, useRef, useState} from "react";
import styled from "styled-components";
import {BasicComponentProps} from "@typings";
import TooltipTriggerStyled from "./styled/TooltipStyled";
import TooltipContentStyled from "./styled/TooltipContentStyled";
import useOnClickOutside from "@hooks/useOnClickOutside";

const TooltipStyled = styled.div`
  position: relative;
`;

interface Props extends BasicComponentProps {
    Trigger?: ReactNode,
    Content?: ReactNode,
    clickable?: boolean
}

const Tooltip: React.FunctionComponent<Props> = (props: Props): React.ReactElement | null => {
    const {Trigger, Content, className, clickable} = props;

    const [active, setActive] = useState(false);

    const ref = useRef(null);

    clickable && useOnClickOutside(ref, () => setActive(false));

    return (
        <TooltipStyled
            className={className}
            onMouseEnter={() => !clickable && setActive(true)}
            onMouseLeave={() => !clickable && setActive(false)}
            ref={ref}
        >
            <TooltipTriggerStyled
                onClick={() => clickable && setActive(!active)}
            >
                {Trigger}
            </TooltipTriggerStyled>

            <div style={{height: "20px", bottom: "-18px", position: "absolute", width: "100%"}}></div>

            {active && <TooltipContentStyled>
                {Content}
            </TooltipContentStyled>}
        </TooltipStyled>
    )
}

export default Tooltip;