import React, {useEffect} from "react";
import Drawer, {DrawerVariations} from "@components/drawer/Drawer";
import styled, {useTheme} from "styled-components";
import useMountChild from "@hooks/useMountChild";
import DrawerToggler from "@components/drawer/DrawerToggler";
import DrawerLink from "@components/drawer/DrawerLink";
import Divider from "@components/divider/Divider";

const DrawerStyled = styled(Drawer)`
  display: flex;
  align-items: center;
`;

const DefaultDrawer = (args: { open?: boolean, variation?: DrawerVariations, fixed?: boolean, transparent?: boolean }) => {
    const theme: any = useTheme();

    const drawer = useMountChild(theme.animation.drawer);

    useEffect(drawer.toggle, [args.open]);

    return (
        <>
            {drawer.render &&
                <DrawerStyled
                    mount={drawer.mount}
                    light={args.variation === DrawerVariations.LIGHT}
                    dark={args.variation === DrawerVariations.DARK}
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
                light={args.variation === DrawerVariations.LIGHT}
                dark={args.variation === DrawerVariations.DARK}
                toggle={drawer.toggle}
                mount={drawer.mount}
            />
        </>
    );
}

DefaultDrawer.args = {
    open: true,
    variation: DrawerVariations.DARK,
    fixed: false,
    transparent: false
};

export default DefaultDrawer;