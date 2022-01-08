import React, {ReactNode, useState} from "react";
import SwitchStyled from "./styled/switch/SwitchStyled";
import {BasicComponentProps} from "@typings";
import SwitchCircleStyled from "./styled/switch/SwitchCircleStyled";

interface Props extends BasicComponentProps {
    active?: boolean,
    onChange?: () => void
}

const Switch: React.FunctionComponent<Props> = (props: Props): React.ReactElement => {
    const {
        children,
        className,
        active,
        onChange = () => {
        }
    } = props;

    return (
        <SwitchStyled
            className={className}
            onClick={onChange}
        >
            <SwitchCircleStyled active={active}/>

            {children}
        </SwitchStyled>
    )
}

export default Switch;
