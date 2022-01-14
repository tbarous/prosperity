import React, {Children, FunctionComponent, ReactElement, ReactNode, useEffect, useState} from "react";
import {clone} from "@utils/ComponentUtils";
import {BasicComponentProps, StyledProps} from "@typings";
import styled from "styled-components";
import {px} from "@utils/ThemeUtils";

export interface TabsProps extends BasicComponentProps {onChange?: (index: number) => void,activate?: number,}

export interface TabActiveProps extends StyledProps {left: number,width: number}

const Active = styled.div<TabActiveProps>`
  width: ${p => `${p.width}%`};
  transform: ${p => `translateX(${p.left}%)`};
  transition: ${p => `transform 1s`};
  height: ${p => px(p.theme.spacing.s2)};
  background-color: ${p => p.theme.color.secondary};
  position: ${p => p.theme.position.absolute};
  bottom: ${p => px(p.theme.spacing.s0)};
`;

const TabsStyled = styled.div<StyledProps>`
  display: ${p => p.theme.display.flex};
  width: ${p  => p.theme.dimension.d100};
  height: ${p  => p.theme.dimension.d100};
  position: relative;
`;

const Tabs: FunctionComponent<TabsProps> = (props: TabsProps): ReactElement => {
    const {children, className, activate, onChange} = props;

    const [active, setActive] = useState(0);

    useEffect(() => {
        if (typeof activate === "number") setActive(activate);
    }, [activate])

    const width = 100 / Children.count(children);

    function onClickTab(index: number) {
        setActive(index);

        onChange && onChange(index);
    }

    return (
        <TabsStyled className={className}>
            {Children.map(children, (child: ReactNode, index: number) => clone(child, {onClickTab: () => onClickTab(index)}))}

            <Active width={width} left={active * 100}/>
        </TabsStyled>
    )
}

export default Tabs;