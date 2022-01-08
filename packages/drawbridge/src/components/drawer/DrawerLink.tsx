import React, {ReactElement, ReactNode} from "react";
import DrawerLinkStyled from "./styled/DrawerLinkStyled";

interface T {
    children: ReactNode,
    className?: string,
    light: boolean,
    dark: boolean
}

const DrawerLink: React.FunctionComponent<T> = (props: T): ReactElement => {
    const {
        children,
        className,
        light,
        dark
    } = props;

    return (
        <DrawerLinkStyled
            className={className}
            light={light}
            dark={dark}
        >
            {children}
        </DrawerLinkStyled>
    )
}

export default DrawerLink;