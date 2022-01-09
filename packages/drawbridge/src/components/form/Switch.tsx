import React, {FunctionComponent, ReactElement, ReactNode, useState} from "react";
import SwitchStyled from "./styled/switch/SwitchStyled";
import {BasicComponentProps} from "@typings";
import SwitchCircleStyled from "./styled/switch/SwitchCircleStyled";

export interface SwitchProps extends BasicComponentProps {
    active?: boolean,
    onChange?: () => void
}

const Switch: FunctionComponent<SwitchProps> = (props: SwitchProps): ReactElement => {
    const {children, className, active, onChange} = props;

    return (
        <SwitchStyled className={className} onClick={onChange}>
            <SwitchCircleStyled active={active}/>

            {children}
        </SwitchStyled>
    )
}

export default Switch;
