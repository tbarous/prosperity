import React, {useEffect} from "react";
import Drawer, {DrawerVariation} from "@components/drawer/Drawer";
import styled, {useTheme} from "styled-components";
import useMountChild from "@hooks/useMountChild";
import DrawerToggler from "@components/drawer/DrawerToggler";
import DrawerLink from "@components/drawer/DrawerLink";
import Divider from "@components/divider/Divider";

const DrawerStyled = styled(Drawer)`
  display: flex;
  align-items: center;
`;

const DefaultDrawer = (args: { open?: boolean, variation?: DrawerVariation, fixed?: boolean, transparent?: boolean }) => {
    const theme: any = useTheme();

    const drawer = useMountChild(theme.animation.drawer);

    useEffect(drawer.toggle, [args.open]);

    return (
        <>
            {drawer.render &&
                <DrawerStyled
                    mount={drawer.mount}
                    light={args.variation === DrawerVariation.LIGHT}
                    dark={args.variation === DrawerVariation.DARK}
                    fixed={args.fixed}
                    transparent={args.transparent}
                >
                    <DrawerLink>Home</DrawerLink>
                    <Divider/>
                    <DrawerLink>About</DrawerLink>
                    <DrawerLink>Projects</DrawerLink>
                </DrawerStyled>
            }

            <DrawerToggler
                light={args.variation === DrawerVariation.LIGHT}
                dark={args.variation === DrawerVariation.DARK}
                toggle={drawer.toggle}
                mount={drawer.mount}
            />
        </>
    );
}

DefaultDrawer.args = {
    open: true,
    variation: DrawerVariation.DARK,
    fixed: false,
    transparent: false
};

export default DefaultDrawer;