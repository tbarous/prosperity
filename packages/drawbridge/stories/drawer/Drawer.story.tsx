import React, {useEffect} from "react";
import Drawer, {DrawerVariation} from "@components/drawer/Drawer";
import StorybookWrapper from "@stories/StorybookWrapper";
import styled from "styled-components";
import useMountChild from "@hooks/useMountChild";
import DrawerToggler from "@components/drawer/DrawerToggler";

const StorybookWrapperStyled = styled(StorybookWrapper)`
  height: 100%;
`;

const DefaultDrawer = (args: { open?: boolean, variation?: DrawerVariation, overlay?: boolean }) => {
    const drawer = useMountChild(500, 500);

    useEffect(() => args.open ? drawer.renderComponent() : drawer.unmountComponent(), [args.open]);

    return (
        <StorybookWrapperStyled>
            <div style={{display: "flex", height: "100%"}}>
                {drawer.render &&
                    <Drawer
                        {...drawer}
                        light={args.variation === DrawerVariation.LIGHT}
                        dark={args.variation === DrawerVariation.DARK}
                        overlay={args.overlay}
                    >
                        <div style={{textAlign: "center"}}>hello</div>
                    </Drawer>
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
    overlay: false
};

export default DefaultDrawer;