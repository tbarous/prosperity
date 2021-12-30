import React from "react";
import {BasicComponentProps, ReactElementOrNull} from "@typings";
import IconWrapper from "./styled/IconWrapper";
import {IIcon} from "@components/icon/Icons";

interface Props extends BasicComponentProps {
    icon: IIcon,
    width?: number,
    height?: number,
    onClick?: () => void
}

const Icon: React.FunctionComponent<Props> = (props: Props): ReactElementOrNull => {
    const {
        icon,
        width = 14,
        height = 14,
        onClick = () => console.log('clicked'),
        className
    } = props;

    return (
        <IconWrapper
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
        </IconWrapper>
    );
}

export default Icon;