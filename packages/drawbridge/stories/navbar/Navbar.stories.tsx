import React from 'react';
import StorybookWrapper from "@stories/StorybookWrapper";
import Navbar from "@components/navbar/Navbar";
import Image from "@components/image/Image";
import Container from "@components/grid/Container";
import Row from "@components/grid/Row";
import Col from "@components/grid/Col";
import {BasicComponentProps} from "@typings";
import {Links, NavbarStyled} from '@stories/GenericStyledComponents';
import LinkStyled from "@components/link/styled/LinkStyled";

export default {
    title: 'Navbar',
    component: Navbar,
    argTypes: {},
};

const DefaultButtonTemplate = (args: BasicComponentProps) => (
    <StorybookWrapper>
        <NavbarStyled>
            {args.children}
        </NavbarStyled>
    </StorybookWrapper>
);

export const Default: any = DefaultButtonTemplate.bind({});

Default.args = {
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