import React, {useEffect} from "react";
import {BasicComponentProps, ReactElementOrNull} from "@typings";
import {Times} from "@components/icon/Icons";
import DrawerStyled from "./styled/drawer/DrawerStyled";
import DrawerCloseStyled from "./styled/drawer-close/DrawerCloseStyled";
import useMount from "@hooks/useMount";
import {emptyFunction} from "../../helpers/Helpers";
import {useMountChildProps} from "@hooks/useMountChild";

export interface DrawerProps extends BasicComponentProps, useMountChildProps {
    overlay?: boolean
}

const Drawer: React.FunctionComponent<DrawerProps> = (props: DrawerProps): ReactElementOrNull => {
    const {
        children,
        className,
        overlay
    } = props;

    const {unmountComponent, mount, entryDelay, exitDelay} = useMount(props);

    return (
        <DrawerStyled
            className={className}
            mount={mount}
            overlay={overlay}
            entryDelay={entryDelay}
            exitDelay={exitDelay}
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