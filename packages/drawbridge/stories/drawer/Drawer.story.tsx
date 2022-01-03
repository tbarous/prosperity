import React, {useEffect, useState} from "react";
import Drawer, {DrawerProps} from "@components/drawer/Drawer";
import StorybookWrapper from "@stories/StorybookWrapper";
import Button from "@components/button/Button";
import ButtonVariationEnum from "@components/button/enums/ButtonVariationEnum";
import styled from "styled-components";

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
    const [open, setOpen] = useState(false);
    const [unmounting, setUnmounting] = useState(false);

    function onEndUnmount() {
        setOpen(false);
    }

    function onStartUnmount() {
        setUnmounting(true);
    }

    function onClick() {
        if (open) {
            setUnmounting(true);
            return
        }

        setOpen(true);
        setUnmounting(false);
    }

    return (
        <StorybookWrapperStyled>
            <ButtonStyled variation={ButtonVariationEnum.PRIMARY} onClick={onClick}>
                Toggle Drawer
            </ButtonStyled>

            {open && <Drawer
                onStartUnmount={onStartUnmount}
                onEndUnmount={onEndUnmount}
                unmounting={unmounting}
            />}
        </StorybookWrapperStyled>
    );
}

DefaultDrawer.args = {
    open: false
};

export default DefaultDrawer;