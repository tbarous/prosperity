import React, {useEffect, useState} from 'react';
import StorybookWrapper from "@stories/StorybookWrapper";
import Image from "@tbarous/drawbridge/components/image/Image";
import Container from "@tbarous/drawbridge/components/grid/Container";
import Row from "@tbarous/drawbridge/components/grid/Row";
import Col from "@tbarous/drawbridge/components/grid/Col";
import {BasicComponentProps, StyledProps} from "@tbarous/drawbridge/typings";
import styled from "styled-components";
import useMountChild from "@tbarous/drawbridge/hooks/useMountChild";
import NavbarStatic from "@tbarous/drawbridge/components/navbar/NavbarStatic";
import NavbarFixed from "@tbarous/drawbridge/components/navbar/NavbarFixed";
import useOnScroll from "@tbarous/drawbridge/hooks/UseOnScroll";
import Link from "@tbarous/drawbridge/components/link/Link";
import Button from "@tbarous/drawbridge/components/button/Button";
import {T as ColT} from "@tbarous/drawbridge/components/grid/styled/ColStyled";
import {px} from "@tbarous/drawbridge/utils/ThemeUtils";
import Tooltip from "@tbarous/drawbridge/components/tooltip/Tooltip";
import TooltipContentStyled from '@tbarous/drawbridge/components/tooltip/styled/TooltipContentStyled';
import ListItem from "@tbarous/drawbridge/components/list/ListItem";
import List from "@tbarous/drawbridge/components/list/List";
import Checkbox from "@tbarous/drawbridge/components/form/Checkbox";
import {ChevronDown} from "@tbarous/drawbridge/icons";
import Icon from "@tbarous/drawbridge/components/icon/Icon";

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
                        <ButtonStyled secondary>{lang==="gr"? "GR" : "EN"} <Icon icon={ChevronDown}/></ButtonStyled>

                        <TooltipContentStyled>
                            <ListStyled>
                                <ListItem>
                                    <Checkbox
                                        onChange={() => setLang(lang === "gr" ? "en" : "gr")}
                                        checked={lang === "gr"}
                                        label="GR"
                                    />
                                </ListItem>

                                <ListItemStyled>
                                    <Checkbox
                                        onChange={() => setLang(lang === "en" ? "gr" : "en")}
                                        checked={lang === "en"}
                                        label="EN"
                                    />
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
        <>
            <NavbarStatic>
                <Content/>
            </NavbarStatic>

            {navbarFixed.render && <NavbarFixed{...navbarFixed}><Content/></NavbarFixed>}
        </>
    );
}

export default DefaultNavbar;