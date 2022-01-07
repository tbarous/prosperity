import React, {useEffect} from "react";
import Drawer, {DrawerVariation} from "@components/drawer/Drawer";
import StorybookWrapper from "@stories/StorybookWrapper";
import styled from "styled-components";
import useMountChild from "@hooks/useMountChild";
import DrawerToggler from "@components/drawer/DrawerToggler";
import DrawerLink from "@components/drawer/DrawerLink";

const StorybookWrapperStyled = styled(StorybookWrapper)`
  height: 100%;
`;

const DrawerStyled = styled(Drawer)`
  display: flex;
  align-items: center;
`;

const DefaultDrawer = (args: { open?: boolean, variation?: DrawerVariation, fixed?: boolean, transparent?: boolean }) => {
    const drawer = useMountChild(500, 500);

    useEffect(() => args.open ? drawer.renderComponent() : drawer.unmountComponent(), [args.open]);

    return (
        <StorybookWrapperStyled>
            <div style={{display: "flex", height: "100%"}}>
                {drawer.render &&
                    <DrawerStyled
                        {...drawer}
                        light={args.variation === DrawerVariation.LIGHT}
                        dark={args.variation === DrawerVariation.DARK}
                        fixed={args.fixed}
                        transparent={args.transparent}
                    >
                        <DrawerLink>Home</DrawerLink>
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

                <div style={{padding: "3rem"}}>
                    ddqwdqw
                </div>
            </div>
        </StorybookWrapperStyled>
    );
}

DefaultDrawer.args = {
    open: true,
    variation: DrawerVariation.DARK,
    fixed: false,
    transparent: false
};

export default DefaultDrawer;