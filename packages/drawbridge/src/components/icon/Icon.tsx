import React, {ReactElement} from "react";
import {BasicComponentProps} from "@typings";
import IconStyled from "@components/icon/styled/IconStyled";
import {IconInterface} from "@icons";

export interface Props extends BasicComponentProps {
    icon?: IconInterface,
    width?: number,
    height?: number,
    onClick?: () => void,
}

const Icon: React.FunctionComponent<Props> = (props: Props): ReactElement | null => {
    const {
        className,
        icon,
        width = 14,
        height = 14,
        onClick = () => {
        },
    } = props;

    if (typeof icon === "undefined") return null;

    return (
        <IconStyled
            onClick={onClick}
            className={className}
            width={width}
            height={height}
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