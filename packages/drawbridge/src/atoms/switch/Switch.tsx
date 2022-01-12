import React, {FunctionComponent, ReactElement, ReactNode, useState} from "react";
import SwitchStyled from "@atoms/switch/styled/SwitchStyled";
import {BasicComponentProps} from "@typings";
import SwitchCircleStyled from "@atoms/switch/styled/SwitchCircleStyled";

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
