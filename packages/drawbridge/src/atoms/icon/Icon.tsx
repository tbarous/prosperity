import React, {FunctionComponent, ReactElement} from "react";
import {BasicComponentProps, ReactElementOrNull} from "@typings";
import IconStyled from "@atoms/icon/styled/IconStyled";
import {IconInterface} from "@icons";

export interface IconProps extends BasicComponentProps {
    icon?: IconInterface,
    onClick?: () => void,
}

const Icon: FunctionComponent<IconProps> = (props: IconProps): ReactElementOrNull => {
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