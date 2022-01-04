import React, {useEffect} from 'react';
import StorybookWrapper from "@stories/StorybookWrapper";
import Image from "@components/image/Image";
import Container from "@components/grid/Container";
import Row from "@components/grid/Row";
import Col from "@components/grid/Col";
import {BasicComponentProps} from "@typings";
import LinkStyled from "@components/link/styled/LinkStyled";
import styled from "styled-components";
import useMountChild from "@hooks/useMountChild";
import NavbarStatic from "@components/navbar/NavbarStatic";
import NavbarFixed from "@components/navbar/NavbarFixed";
import useOnScroll from "@hooks/UseOnScroll";

const NavbarStaticStyled = styled(NavbarStatic)`
  height: 100px;
`;

const NavbarFixedStyled = styled(NavbarFixed)`
  height: 100px;
`;

const Links = styled.div`
  display: flex;
  align-items: center;
  height: 100%;
  justify-content: end;
`;

const StorybookWrapperStyled = styled(StorybookWrapper)`
  height: 200%;
`;

const ContainerStyled = styled(Container)`
  margin-top: 4rem;
`;

const DefaultNavbar = (args: BasicComponentProps) => {
    const {
        render,
        mount,
        mountComponent,
        unmountComponent,
        onMounted,
        onUnmounted,
        renderComponent,
        unRenderComponent,
    } = useMountChild(false);

    const scrollFromTop = useOnScroll();

    useEffect(() => {
        if (scrollFromTop >= 120) renderComponent();

        if (scrollFromTop < 120) unmountComponent();
    }, [scrollFromTop])

    return (
        <StorybookWrapperStyled>
            <NavbarStaticStyled>
                <Container>
                    <Row>
                        <Col xs={1}>
                            <Image src="/logo.png" alt="img"/>
                        </Col>

                        <Col xs={11}>
                            <Links>
                                <LinkStyled href="/">Link 1</LinkStyled>
                                <LinkStyled href="/about">Link 2</LinkStyled>
                                <LinkStyled href="/about">Link 3</LinkStyled>
                            </Links>
                        </Col>
                    </Row>
                </Container>
            </NavbarStaticStyled>

            {render && <NavbarFixedStyled
                mountComponent={mountComponent}
                unmountComponent={unmountComponent}
                onMounted={onMounted}
                onUnmounted={onUnmounted}
                mount={mount}
                delay={1000}
            >
                <Container>
                    <Row>
                        <Col xs={1}>
                            <Image src="/logo.png" alt="img"/>
                        </Col>

                        <Col xs={11}>
                            <Links>
                                <LinkStyled href="/">Link 1</LinkStyled>
                                <LinkStyled href="/about">Link 2</LinkStyled>
                                <LinkStyled href="/about">Link 3</LinkStyled>
                            </Links>
                        </Col>
                    </Row>
                </Container>
            </NavbarFixedStyled>}

            <ContainerStyled>
                {[1, 2, 3].map(item => {
                    return (
                        <Row key={item}>
                            <Col xs={6}>
                                <div>Lorem ipsum dolor sit amet, consectetur adipisicing elit. A consequuntur
                                    dignissimos
                                    dolorum
                                    eaque eos
                                    expedita inventore ipsam iste iure, laudantium libero natus nesciunt nulla omnis
                                    optio
                                    porro
                                    quibusdam
                                    ratione. Excepturi.
                                </div>
                                <div>Amet consequuntur cum eum iure nihil obcaecati officia, quo reiciendis tenetur
                                    unde.
                                    Consectetur, dolor
                                    earum facilis necessitatibus officia pariatur quae rerum tempora? Ab assumenda
                                    blanditiis,
                                    incidunt itaque
                                    minus officia recusandae!
                                </div>
                            </Col>

                            <Col xs={6}>
                                <div>Lorem ipsum dolor sit amet, consectetur adipisicing elit. A consequuntur
                                    dignissimos
                                    dolorum
                                    eaque eos
                                    expedita inventore ipsam iste iure, laudantium libero natus nesciunt nulla omnis
                                    optio
                                    porro
                                    quibusdam
                                    ratione. Excepturi.
                                </div>
                                <div>Amet consequuntur cum eum iure nihil obcaecati officia, quo reiciendis tenetur
                                    unde.
                                    Consectetur, dolor
                                    earum facilis necessitatibus officia pariatur quae rerum tempora? Ab assumenda
                                    blanditiis,
                                    incidunt itaque
                                    minus officia recusandae!
                                </div>
                            </Col>
                        </Row>
                    )
                })}
            </ContainerStyled>
        </StorybookWrapperStyled>
    );
}

DefaultNavbar.args = {};

export default DefaultNavbar;