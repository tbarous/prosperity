import React, {useEffect} from 'react';
import StorybookWrapper from "@stories/StorybookWrapper";
import Image from "@components/image/Image";
import Container from "@components/grid/Container";
import Row from "@components/grid/Row";
import Col from "@components/grid/Col";
import {BasicComponentProps} from "@typings";
import styled from "styled-components";
import useMountChild from "@hooks/useMountChild";
import NavbarStatic from "@components/navbar/NavbarStatic";
import NavbarFixed from "@components/navbar/NavbarFixed";
import useOnScroll from "@hooks/UseOnScroll";
import Link from "@components/link/Link";
import Button from "@components/button/Button";

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

const LinkStyled = styled(Link)`
  padding: 0 1rem;
`;

const ButtonCol = styled(Col)`
  padding: 1rem;
`;

const Content = () => (
    <Container>
        <Row>
            <Col xs={1}>
                <Image src="/logo.png" alt="img"/>
            </Col>

            <Col xs={9}>
                <Links>
                    <LinkStyled href="/">home</LinkStyled>
                    <LinkStyled href="/about">about</LinkStyled>
                    <LinkStyled href="/about">projects</LinkStyled>
                </Links>
            </Col>

            <ButtonCol xs={2}>
                <Button primary>Login/Register</Button>
            </ButtonCol>
        </Row>
    </Container>
)

const DefaultNavbar = (args: BasicComponentProps) => {
    const navbarFixed = useMountChild(1000);

    const scrollFromTop = useOnScroll();

    useEffect(() => scrollFromTop >= 100 ? navbarFixed.renderComponent() : navbarFixed.unmountComponent(), [scrollFromTop])

    return (
        <StorybookWrapperStyled>
            <NavbarStatic>
                <Content/>
            </NavbarStatic>

            {navbarFixed.render &&
                <NavbarFixed
                    {...navbarFixed}
                >
                    <Content/>
                </NavbarFixed>
            }
        </StorybookWrapperStyled>
    );
}

DefaultNavbar.args = {};

export default DefaultNavbar;