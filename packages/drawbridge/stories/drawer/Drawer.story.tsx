import React, {useEffect, useState} from "react";
import Drawer, {DrawerProps} from "@components/drawer/Drawer";
import StorybookWrapper from "@stories/StorybookWrapper";
import Button from "@components/button/Button";
import ButtonVariationEnum from "@components/button/enums/ButtonVariationEnum";
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
    const modal = useMountChild(1000, 1000);

    return (
        <StorybookWrapperStyled>
            <ButtonStyled
                variation={ButtonVariationEnum.PRIMARY}
                onClick={modal.toggle}
            >
                Toggle Drawer
            </ButtonStyled>

            {modal.render && <Drawer {...modal} />}
        </StorybookWrapperStyled>
    );
}

DefaultDrawer.args = {
    open: false
};

export default DefaultDrawer;