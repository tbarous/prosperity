import React, {useState} from "react";
import Drawer, {DrawerVariations} from "@components/drawer/Drawer";
import DrawerLink from "@components/drawer/DrawerLink";
import Divider from "@components/divider/Divider";
import {Home, File, Star, Upload, Download} from "@icons";
import Image from "@components/image/Image";
import Text from "@components/text/Text";
import styled from "styled-components";

const Name = styled(Text)`
  font-size: 16px;
  font-weight: bold;
`;

const Email = styled(Text)`
  font-size: 12px;
`;

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
            <div style={{height: "20px", width: "100%", background: "lightgray"}}/>

            <div style={{padding: "1rem"}}>
                <Image src="/img/avatar.jpeg" circle width={50} height={50}/>

                <Name>Sandra Adams</Name>

                <Email>sandra_**@gmail.com</Email>
            </div>

            <Divider/>
            <DrawerLink {...UIProps} icon={Home} onClick={() => {}} text="Home"/>
            <DrawerLink {...UIProps} icon={File} onClick={() => {}} text="Files"/>
            <DrawerLink {...UIProps} icon={Upload} onClick={() => {}} text="Upload"/>
            <DrawerLink {...UIProps} icon={Star} onClick={() => {}} text="Starred"/>
            <DrawerLink {...UIProps} icon={Download} onClick={() => {}} text="Download"/>
        </Drawer>
    );
}

DefaultDrawer.args = {
    variation: DrawerVariations.DARK,
    fixed: false,
    transparent: false
};

export default DefaultDrawer;