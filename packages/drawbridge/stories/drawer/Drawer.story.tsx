import React, {useEffect, useState} from "react";
import Drawer, {DrawerVariations} from "@components/drawer/Drawer";
import styled, {useTheme} from "styled-components";
import useMountChild from "@hooks/useMountChild";
import DrawerToggler from "@components/drawer/DrawerToggler";
import DrawerLink from "@components/drawer/DrawerLink";
import Divider from "@components/divider/Divider";
import useControlChild from "@hooks/useControlChild";

const DrawerStyled = styled(Drawer)`
  display: flex;
  align-items: center;
`;

const DefaultDrawer = (args: { variation?: DrawerVariations, fixed?: boolean, transparent?: boolean }) => {
    const {variation, transparent, fixed} = args;

    const {render, toggle, unmount, onUnmounted} = useControlChild();

    return (
        <>
            {render &&
                <DrawerStyled
                    unmount={unmount}
                    onUnmounted={onUnmounted}
                    light={variation === DrawerVariations.LIGHT}
                    dark={variation === DrawerVariations.DARK}
                    fixed={fixed}
                    transparent={transparent}
                >
                    {/*<DrawerLink>Home</DrawerLink>*/}
                    {/*<Divider/>*/}
                    {/*<DrawerLink>About</DrawerLink>*/}
                    {/*<DrawerLink>Projects</DrawerLink>*/}
                </DrawerStyled>
            }

            <DrawerToggler
                light={variation === DrawerVariations.LIGHT}
                dark={variation === DrawerVariations.DARK}
                toggle={toggle}
                unmount={unmount}
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