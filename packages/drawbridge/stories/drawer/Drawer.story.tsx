import React, {useState} from "react";
import Drawer, {DrawerVariations} from "@components/drawer/Drawer";
import DrawerLink from "@components/drawer/DrawerLink";
import Divider from "@components/divider/Divider";
import {Home, File} from "@icons";

const DefaultDrawer = (args: { variation: DrawerVariations, fixed: boolean, transparent: boolean }) => {
    const {variation, transparent, fixed} = args;

    const [small, setSmall] = useState<boolean | undefined>(undefined);

    const [display, setDisplay] = useState<boolean>(true);

    const UIProps = {
        light: variation === DrawerVariations.LIGHT,
        dark: variation === DrawerVariations.DARK
    };

    return (
        <Drawer
            overlay
            small={small}
            // toggler
            display={display}
            onStartDisplay={() => setDisplay(true)}
            onStopDisplay={() => setDisplay(false)}
            {...UIProps}
        >
            <Divider/>
            <DrawerLink {...UIProps} icon={Home} onClick={() => {}} text="Home" />
            <DrawerLink {...UIProps} icon={File} onClick={() => {}} text="Files" />
            <DrawerLink {...UIProps}>Projects</DrawerLink>
        </Drawer>
    );
}

DefaultDrawer.args = {
    variation: DrawerVariations.DARK,
    fixed: false,
    transparent: false
};

export default DefaultDrawer;