import React, {useState} from "react";
import Drawer, {DrawerVariations} from "@components/drawer/Drawer";
import DrawerLink from "@components/drawer/DrawerLink";
import Divider from "@components/divider/Divider";
import {Home, File, Star, Upload, Download} from "@icons";
import Image from "@atoms//image/Image";
import Text from "@atoms//text/Text";
import styled from "styled-components";

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
            toggler
            display={display}
            onStartDisplay={() => setDisplay(true)}
            onStopDisplay={() => setDisplay(false)}
            {...UIProps}
        >
            <div style={{height: "24px", width: "100%", background: "lightgray"}}/>

            <div style={{padding: "1rem"}}>
                <Image src="/img/avatar.jpeg" circle width={50} height={50}/>

                <br/>

                <Text bold lg>Sandra Adams</Text>
                <Text light sm muted>sandra_**@gmail.com</Text>
            </div>

            <Divider/>
            <DrawerLink {...UIProps} icon={Home} onClick={() => {}} text="Home"/>
            <DrawerLink {...UIProps} icon={File} onClick={() => {}} text="Files"/>
            <DrawerLink {...UIProps} icon={Upload} onClick={() => {}} text="Upload"/>
            <DrawerLink {...UIProps} icon={Download} onClick={() => {}} text="Download"/>
            <DrawerLink {...UIProps} icon={Star} onClick={() => {}} text="Starred"/>
        </Drawer>
    );
}

DefaultDrawer.args = {
    variation: DrawerVariations.DARK,
    fixed: false,
    transparent: false
};

export default DefaultDrawer;