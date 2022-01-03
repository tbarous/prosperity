import React from 'react';
import StorybookWrapper from "@stories/StorybookWrapper";
import Image from "@components/image/Image";
import Container from "@components/grid/Container";
import Row from "@components/grid/Row";
import Col from "@components/grid/Col";
import {BasicComponentProps} from "@typings";
import LinkStyled from "@components/link/styled/LinkStyled";
import styled from "styled-components";
import Navbar from "@components/navbar/Navbar";

export const NavbarStyled = styled(Navbar)`
  height: 100px;
`;

export const Links = styled.div`
  display: flex;
  align-items: center;
  height: 100%;
  justify-content: end;
`;

const DefaultNavbar = (args: BasicComponentProps) => (
    <StorybookWrapper>
        <NavbarStyled>
            {args.children}
        </NavbarStyled>
    </StorybookWrapper>
);

DefaultNavbar.args = {
    children: (
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
    )
};

export default DefaultNavbar;