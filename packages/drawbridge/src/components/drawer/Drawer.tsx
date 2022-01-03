import React, {useEffect, useRef, useState} from "react";
import {BasicComponentProps, ReactElementOrNull} from "@typings";
import Icon from "@components/icon/Icon";
import {Times} from "@components/icon/Icons";
import DrawerStyled from "./styled/drawer/DrawerStyled";
import DrawerCloseStyled from "./styled/drawer-close/DrawerCloseStyled";
import useDelayedUnmounting from "@hooks/useDelayedUnmounting";

export interface DrawerProps extends BasicComponentProps {
    onStartUnmount?: () => void,
    onEndUnmount?: () => void,
    unmounting?: boolean,
    overlay?: boolean
}

const Drawer: React.FunctionComponent<DrawerProps> = (props: DrawerProps): ReactElementOrNull => {
    const {
        children,
        className,
        overlay,
        unmounting,
        onStartUnmount = () => {},
        onEndUnmount = () => {}
    } = props;

    useDelayedUnmounting(unmounting, onEndUnmount);

    return (
        <DrawerStyled
            className={className}
            unmounting={unmounting}
            overlay={overlay}
        >
            {children}

            <DrawerCloseStyled
                icon={Times}
                color="white"
                onClick={onStartUnmount}
                width={20}
                height={20}
            />
        </DrawerStyled>
    )
}

export default Drawer;