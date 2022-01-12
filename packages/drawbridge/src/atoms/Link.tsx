import React, {FunctionComponent, ReactElement, useState} from "react";
import {BasicComponentProps, StyledProps} from "@typings";
import styled from "styled-components";
import {px} from "@utils/ThemeUtils";

export interface LineProps extends StyledProps {
    hovered?: boolean,
    active?: boolean
}

const Line = styled.div<LineProps>`
  transform: ${p => p.active || p.hovered ? "scale(1)" : "scale(0)"};
  background-color: ${p => p.active ? p.theme.color.primary : p.theme.color.dark};
  position: ${p => p.theme.position.absolute};
  height: ${p => p.theme.spacing.s1};
  width: ${p => p.theme.dimension.d100};
  display: ${p => p.theme.display.block};
  bottom: -${p => p.theme.spacing.s3};
  transition: all .3s;
`;

const LinkStyled = styled.a<{ active?: boolean }>`
  display: ${p => p.theme.display.block};
  text-decoration: ${p => p.theme.textDecoration.none};
  color: ${p => p.theme.color.dark};
  font-weight: ${p => p.theme.fontWeight.bold};
  font-size: ${p => px(p.theme.fontSize.fs3)};
  font-family: ${p => p.theme.fontFamily.primary};
  position: ${p => p.theme.position.relative};
`;

export interface Props extends BasicComponentProps {
    href: string,
    blank?: boolean,
    active?: boolean
}

const Link: FunctionComponent<Props> = (props: Props): ReactElement => {
    const {children, className, href, blank, active} = props;

    const [hovered, setHovered] = useState(false);

    return (
        <LinkStyled
            className={className}
            href={href}
            target={blank ? "_blank" : ""}
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
            active={active}
        >
            {children}

            <Line hovered={hovered} active={active}/>
        </LinkStyled>
    )
}

export default Link;