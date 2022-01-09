import React, {useState} from "react";
import Drawer, {DrawerVariations} from "@components/drawer/Drawer";
import styled from "styled-components";
import DrawerToggler from "@components/drawer/DrawerToggler";
import useControlChild from "@hooks/useControlChild";

const DefaultDrawer = (args: { variation: DrawerVariations, fixed: boolean, transparent: boolean }) => {
    const {variation, transparent, fixed} = args;

    const [small, setSmall] = useState(undefined);

    const {render, toggle, unmount, onUnmounted} = useControlChild();

    function toggleDrawer() {
        if (small !== undefined) {
            setSmall(!small)
        } else {
            toggle()
        }
    }

    return (
        <>
            {render &&
                <Drawer
                    unmount={unmount}
                    onUnmounted={onUnmounted}
                    light={variation === DrawerVariations.LIGHT}
                    dark={variation === DrawerVariations.DARK}
                    fixed={fixed}
                    transparent={transparent}
                    small={small}
                >
                    {/*<DrawerLink>Home</DrawerLink>*/}
                    {/*<Divider/>*/}
                    {/*<DrawerLink>About</DrawerLink>*/}
                    {/*<DrawerLink>Projects</DrawerLink>*/}
                </Drawer>
            }

            <DrawerToggler
                light={variation === DrawerVariations.LIGHT}
                dark={variation === DrawerVariations.DARK}
                toggle={toggleDrawer}
                unmount={unmount}
                small={small}
            />
        </>
    );
}

DefaultDrawer.args = {
    variation: DrawerVariations.DARK,
    fixed: false,
    transparent: false
};

export default DefaultDrawer;