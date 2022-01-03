import React, {useEffect, useRef, useState} from "react";
import {BasicComponentProps} from "@typings";
import Icon from "@components/icon/Icon";
import {Times} from "@components/icon/Icons";
import DrawerStyled from "./styled/drawer/DrawerStyled";
import DrawerCloseStyled from "./styled/drawer-close/DrawerCloseStyled";

export interface DrawerProps extends BasicComponentProps {
    onStartUnmount?: () => void,
    onEndUnmount?: () => void,
    unmounting?: boolean,
    overlay?: boolean
}

const Drawer: React.FunctionComponent<DrawerProps> = (props: DrawerProps): React.ReactElement | null => {
    const {
        children,
        className,
        unmounting,
        overlay,
        onStartUnmount = () => {},
        onEndUnmount = () => {}
    } = props;

    const timeoutRef = useRef<any>(null);

    useEffect(() => {
        if (unmounting) timeoutRef.current = setTimeout(onEndUnmount, 800);

        return () => clearTimeout(timeoutRef.current);
    }, [unmounting]);

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