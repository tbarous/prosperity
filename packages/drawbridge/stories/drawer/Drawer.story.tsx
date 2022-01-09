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

const DefaultDrawer = (args: { variation: DrawerVariations, fixed: boolean, transparent: boolean }) => {
    const {variation, transparent, fixed} = args;

    const [small, setSmall] = useState(true);

    const {render, toggle, unmount, onUnmounted} = useControlChild();

    function toggleDrawer(){
        if(small !== undefined){
            setSmall(!small)
        } else {
            toggle()
        }
    }

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
                    small={small}
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
                toggle={toggleDrawer}
                unmount={unmount}
                small={small}
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