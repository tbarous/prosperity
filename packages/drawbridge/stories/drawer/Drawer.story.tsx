import React, {useEffect} from "react";
import Drawer, {DrawerVariation} from "@components/drawer/Drawer";
import StorybookWrapper from "@stories/StorybookWrapper";
import styled, {useTheme} from "styled-components";
import useMountChild from "@hooks/useMountChild";
import DrawerToggler from "@components/drawer/DrawerToggler";
import DrawerLink from "@components/drawer/DrawerLink";
import Container from "@components/grid/Container";
import Row from "@components/grid/Row";
import Col from "@components/grid/Col";
import Card from "@components/card/Card";
import Image from "@components/image/Image";
import {px} from "@utils/ThemeUtils";
import Text from "@components/text/Text";
import Divider from "@components/divider/Divider";
import { withTheme } from 'styled-components'
import ThemeInterface from "@theme/interfaces/ThemeInterface";

const StorybookWrapperStyled = styled(StorybookWrapper)`
  height: 100%;
`;

const DrawerStyled = styled(Drawer)`
  display: flex;
  align-items: center;
`;

const App = styled.div`
  display: flex;
  height: 100%;
`;

const Main = styled.div`
  padding:  1rem 3rem;
  flex: 1;
`;

const TextStyled = styled(Text)`
  padding: ${(p: any) => px(p.theme.spacing.s6)} ${(p: any) => px(p.theme.spacing.s8)};
  line-height: ${(p: any) => p.theme.lineHeight.large};
`;

const DefaultDrawer = (args: { open?: boolean, variation?: DrawerVariation, fixed?: boolean, transparent?: boolean }) => {
    const theme: ThemeInterface = useTheme()
    console.log(theme.animation.drawer)
    const drawer = useMountChild(theme.animation.drawer);

    useEffect(() => args.open ? drawer.renderComponent() : drawer.unmountComponent(), [args.open]);

    return (
        // <StorybookWrapperStyled>
            <App>
                {drawer.render &&
                    <DrawerStyled
                        {...drawer}
                        light={args.variation === DrawerVariation.LIGHT}
                        dark={args.variation === DrawerVariation.DARK}
                        fixed={args.fixed}
                        transparent={args.transparent}
                    >
                        <DrawerLink>Home</DrawerLink>
                        <Divider />
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

                <Main>
                    <Container fluid>
                        <Row gutter={20}>
                            <Col xs={3}>
                                <Card rounded>
                                    <Image
                                        rounded-top
                                        src="/img.jpg"
                                        alt="img"
                                    />

                                    <TextStyled>
                                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus aut beatae
                                        deserunt
                                        dignissimos, distinctio
                                        dolore error exercitationem minima nisi placeat praesentium provident quas quo
                                        ratione sunt
                                        temporibus unde vel
                                        voluptas.
                                    </TextStyled>
                                </Card>
                            </Col>

                            <Col xs={3}>
                                <Card rounded>
                                    <Image
                                        rounded-top
                                        src="/img.jpg"
                                        alt="img"
                                    />

                                    <TextStyled>
                                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus aut beatae
                                        deserunt
                                        dignissimos, distinctio
                                        dolore error exercitationem minima nisi placeat praesentium provident quas quo
                                        ratione sunt
                                        temporibus unde vel
                                        voluptas.
                                    </TextStyled>
                                </Card>
                            </Col>
                        </Row>
                    </Container>
                </Main>
            </App>
        // </StorybookWrapperStyled>
    );
}

DefaultDrawer.args = {
    open: true,
    variation: DrawerVariation.DARK,
    fixed: false,
    transparent: false
};

export default DefaultDrawer;