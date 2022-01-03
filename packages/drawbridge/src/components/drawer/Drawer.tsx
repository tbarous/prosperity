import React, {useEffect} from "react";
import {BasicComponentProps, ReactElementOrNull} from "@typings";
import {Times} from "@components/icon/Icons";
import DrawerStyled from "./styled/drawer/DrawerStyled";
import DrawerCloseStyled from "./styled/drawer-close/DrawerCloseStyled";
import useMount, {useMountProps} from "@hooks/useMount";
import {emptyFunction} from "../../helpers/Helpers";

export interface DrawerProps extends BasicComponentProps, useMountProps {
    overlay?: boolean
}

const Drawer: React.FunctionComponent<DrawerProps> = (props: DrawerProps): ReactElementOrNull => {
    const {
        children,
        className,
        overlay,
        mount,
        delay,
        mountComponent = emptyFunction,
        unmountComponent = emptyFunction,
        onMounted = emptyFunction,
        onUnmounted = emptyFunction
    } = props;

    useMount({delay, mount, onMounted, onUnmounted});

    return (
        <DrawerStyled
            className={className}
            mount={mount}
            overlay={overlay}
            delay={delay}
        >
            {children}

            <DrawerCloseStyled
                icon={Times}
                color="white"
                onClick={unmountComponent}
                width={20}
                height={20}
            />
        </DrawerStyled>
    )
}

export default Drawer;