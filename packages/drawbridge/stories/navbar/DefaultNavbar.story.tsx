import React, {useEffect, useState} from 'react';
import StorybookWrapper from "@stories/StorybookWrapper";
import Image from "@components/image/Image";
import Container from "@components/grid/Container";
import Row from "@components/grid/Row";
import Col from "@components/grid/Col";
import {BasicComponentProps, StyledProps} from "@typings";
import styled from "styled-components";
import useMountChild from "@hooks/useMountChild";
import NavbarStatic from "@components/navbar/NavbarStatic";
import NavbarFixed from "@components/navbar/NavbarFixed";
import useOnScroll from "@hooks/UseOnScroll";
import Link from "@components/link/Link";
import Button from "@components/button/Button";
import {T as ColT} from "@components/grid/styled/ColStyled";
import {px} from "@utils/ThemeUtils";
import Tooltip from "@components/tooltip/Tooltip";
import TooltipContentStyled from '@components/tooltip/styled/TooltipContentStyled';
import ListItem from "@components/list/ListItem";
import List from "@components/list/List";
import Checkbox from "@components/form/Checkbox";
import {ChevronDown} from "@icons";
import Icon from "@components/icon/Icon";

const NavbarCol = styled(Col)`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const StorybookWrapperStyled = styled(StorybookWrapper)`
  height: 200%;
`;

const ButtonCol = styled(Col)`
  padding: ${(p: ColT) => px(p.theme.spacing.s8)};
`;

const ListStyled = styled(List)`
  background: white;
`;
const ListItemStyled = styled(ListItem)`
  border-bottom: none;
`;

const ButtonStyled = styled(Button)`
  display: flex;
  align-items: center;
`

const Content = () => {
    const [lang, setLang] = useState("gr");

    return (
        <Container>
            <Row>
                <Col xs={1}>
                    <Image src="/logo.png" alt="img"/>
                </Col>

                <Col xs={4}/>

                <NavbarCol xs={1}>
                    <Link active href="/">home</Link>
                </NavbarCol>

                <NavbarCol xs={1}>
                    <Link href="/">about</Link>
                </NavbarCol>

                <NavbarCol xs={1}>
                    <Link href="/">projects</Link>
                </NavbarCol>

                <NavbarCol xs={2}>
                    <Tooltip clickable>
                        <ButtonStyled secondary>Language <Icon icon={ChevronDown}/></ButtonStyled>

                        <TooltipContentStyled>
                            <ListStyled>
                                <ListItem>
                                    <Checkbox onChange={() => setLang(lang === "gr" ? "en" : "gr")}
                                              checked={lang === "gr"} label="Greek"/>
                                </ListItem>
                                <ListItemStyled>
                                    <Checkbox onChange={() => setLang(lang === "en" ? "gr" : "en")}
                                              checked={lang === "en"} label="English"/>
                                </ListItemStyled>
                            </ListStyled>
                        </TooltipContentStyled>
                    </Tooltip>
                </NavbarCol>

                <ButtonCol xs={2}>
                    <Button primary>Login/Register</Button>
                </ButtonCol>
            </Row>
        </Container>
    )
}

const DefaultNavbar = (args: BasicComponentProps) => {
    const navbarFixed = useMountChild(300);

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