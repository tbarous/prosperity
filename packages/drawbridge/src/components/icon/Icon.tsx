import React from "react";
import {BasicComponentProps, ReactElementOrNull} from "@typings";
import IconStyled from "./styled/IconStyled";
import {IconInterface} from "@components/icon/Icons";

interface Props extends BasicComponentProps {
    icon: IconInterface,
    width?: number,
    height?: number,
    onClick?: () => void,
    color?: string
}

const Icon: React.FunctionComponent<Props> = (props: Props): ReactElementOrNull => {
    const {
        icon,
        width = 14,
        height = 14,
        className,
        color,
        onClick = () => {
        },
    } = props;

    return (
        <IconStyled
            onClick={onClick}
            className={className}
            width={width}
            height={height}
            color={color}
        >
            <svg
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
                >
                </path>
            </svg>
        </IconStyled>
    );
}

export default Icon;