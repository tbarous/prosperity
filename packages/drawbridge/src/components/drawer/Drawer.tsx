import React from "react";
import {BasicComponentProps, ReactElementOrNull} from "@typings";
import {useMountChildProps} from "@hooks/useMountChild";
import DrawerStyled from "@components/drawer/styled/DrawerStyled";
import DrawerCloseStyled from "@components/drawer/styled/DrawerCloseStyled";
import {Times} from "@icons";

export interface DrawerProps extends BasicComponentProps, useMountChildProps {
    overlay?: boolean
}

const Drawer: React.FunctionComponent<DrawerProps> = (props: DrawerProps): ReactElementOrNull => {
    const {
        children,
        className,
        overlay,
        unmountComponent,
        mount,
        entryDelay,
        exitDelay
    } = props;

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