import React, {FunctionComponent} from "react";
import {BasicComponentProps, ReactElementOrNull, StyledProps} from "@typings";
import {IconInterface} from "@icons";
import styled from "styled-components";

const IconStyled = styled.div<StyledProps>`
  display: ${p => p.theme.display.flex};
  align-items: ${p => p.theme.alignItems.center};
  justify-content: ${p => p.theme.justifyContent.center};
`;

const IconSVG = styled.svg<StyledProps>`
  width: ${p => p.theme.dimension.d100};
  height: ${p => p.theme.dimension.d100};
`;

export interface Props extends BasicComponentProps {
    icon?: IconInterface,
    onClick?: () => void,
}

const Icon: FunctionComponent<Props> = (props: Props): ReactElementOrNull => {
    const {className, icon, onClick} = props;

    if (!icon) return null;

    return (
        <IconStyled
            onClick={onClick}
            className={className}
        >
            <IconSVG
                aria-hidden="true"
                focusable="false"
                data-icon={icon.data}
                role="img"
                xmlns="http://www.w3.org/2000/svg"
                viewBox={icon.viewBox}
            >
                <path
                    fill={icon.fill}
                    d={icon.d}
                />
            </IconSVG>
        </IconStyled>
    );
}

export default Icon;