import React, {useEffect} from "react";
import Drawer, {DrawerProps} from "@components/drawer/Drawer";
import StorybookWrapper from "@stories/StorybookWrapper";
import Button from "@components/button/Button";
import styled from "styled-components";
import useMountChild from "@hooks/useMountChild";

interface DefaultDrawerProps extends DrawerProps {
    open?: boolean
}

const ButtonStyled = styled(Button)`
  position: absolute;
  left: 0;
  right: 0;
  margin: auto;
  width: 200px;
  height: 50px;
`;

const StorybookWrapperStyled = styled(StorybookWrapper)`
  height: 100%;
`;

const DefaultDrawer = (args: DefaultDrawerProps) => {
    const drawer = useMountChild(500, 500);

    useEffect(() => args.open ? drawer.renderComponent() : drawer.unmountComponent(), [args.open]);

    return (
        <StorybookWrapperStyled>
            {drawer.render && <Drawer {...drawer} />}
        </StorybookWrapperStyled>
    );
}

DefaultDrawer.args = {
    open: true
};

export default DefaultDrawer;