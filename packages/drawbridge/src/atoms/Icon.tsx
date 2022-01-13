import React, {FunctionComponent} from "react";
import {BasicComponentProps, ReactElementOrNull, StyledProps} from "@typings";
import {IconInterface} from "@icons";
import styled from "styled-components";

export interface IconStyledProps extends StyledProps {}

const IconStyled = styled.div<IconStyledProps>`
  display: ${p => p.theme.display.flex};
  align-items: ${p => p.theme.alignItems.center};
  justify-content: ${p => p.theme.justifyContent.center};

  svg {
    width: ${p => p.theme.dimension.d100};
    height: ${p => p.theme.dimension.d100};
  }
`;

export interface Props extends BasicComponentProps {
    icon?: IconInterface,
    onClick?: () => void,
}

const Icon: FunctionComponent<Props> = (props: Props): ReactElementOrNull => {
    const {className, icon, onClick} = props;

    if (typeof icon === "undefined") return null;

    return (
        <IconStyled onClick={onClick} className={className}>
            <svg aria-hidden="true" focusable="false" data-icon={icon.data} role="img" xmlns="http://www.w3.org/2000/svg" viewBox={icon.viewBox}>
                <path fill={icon.fill} d={icon.d}/>
            </svg>
        </IconStyled>
    );
}

export default Icon;