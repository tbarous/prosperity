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

const LinkStyled = styled(Link)`
  padding: 0 1rem;
`;

interface Props {
    links: { name: string, href: string }[],
    logo?: string
}

const SampleNavbar = (props: Props) => {
    const {links, logo} = props;

    const navbarFixed = useMountChild(1000);

    const scrollFromTop = useOnScroll();

    useEffect(() => scrollFromTop >= 100 ? navbarFixed.renderComponent() : navbarFixed.unmountComponent(), [scrollFromTop])

    return (
        <StorybookWrapperStyled>
            <NavbarStaticStyled>
                <Container>
                    <Row>
                        {logo && <Col xs={1}>
                            <Image src={logo} alt="img"/>
                        </Col>}

                        <Col xs={11}>
                            <Links>
                                {links.map((link, index: number) => (
                                    <LinkStyled
                                        key={index}
                                        href={link.href}
                                    >
                                        {link.name}
                                    </LinkStyled>
                                ))}
                            </Links>
                        </Col>
                    </Row>
                </Container>
            </NavbarStaticStyled>

            {navbarFixed.render && <NavbarFixedStyled {...navbarFixed}>
                <Container>
                    <Row>
                        <Col xs={1}>
                            <Image src="/logo.png" alt="img"/>
                        </Col>

                        <Col xs={11}>
                            <Links>
                                {links.map((link, index: number) => (
                                    <LinkStyled
                                        key={index}
                                        href={link.href}
                                    >
                                        {link.name}
                                    </LinkStyled>
                                ))}
                            </Links>
                        </Col>
                    </Row>
                </Container>
            </NavbarFixedStyled>}
        </StorybookWrapperStyled>
    );
}

export default SampleNavbar;