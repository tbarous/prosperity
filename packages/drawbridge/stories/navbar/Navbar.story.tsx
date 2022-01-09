import React, {useEffect, useState} from 'react';
import Image from "@components/image/Image";
import Container from "@components/grid/Container";
import Row from "@components/grid/Row";
import Col from "@components/grid/Col";
import {BasicComponentProps, StyledProps} from "@typings";
import styled from "styled-components";
import NavbarStatic from "@components/navbar/NavbarStatic";
import NavbarFixed from "@components/navbar/NavbarFixed";
import useOnScroll from "@hooks/UseOnScroll";
import Link from "@components/link/Link";
import Button from "@components/button/Button";
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
                        {/*<ButtonStyled secondary>{lang === "gr" ? "GR" : "EN"} <Icon icon={ChevronDown}/></ButtonStyled>*/}

                        <TooltipContentStyled>
                            {/*<ListStyled>*/}
                            {/*    <ListItem>*/}
                            {/*        <Checkbox*/}
                            {/*            onChange={() => setLang(lang === "gr" ? "en" : "gr")}*/}
                            {/*            checked={lang === "gr"}*/}
                            {/*            label="GR"*/}
                            {/*        />*/}
                            {/*    </ListItem>*/}

                            {/*    <ListItemStyled>*/}
                            {/*        <Checkbox*/}
                            {/*            onChange={() => setLang(lang === "en" ? "gr" : "en")}*/}
                            {/*            checked={lang === "en"}*/}
                            {/*            label="EN"*/}
                            {/*        />*/}
                            {/*    </ListItemStyled>*/}
                            {/*</ListStyled>*/}
                        </TooltipContentStyled>
                    </Tooltip>
                </NavbarCol>

                {/*<ButtonCol xs={2}>*/}
                {/*    <Button primary>Login/Register</Button>*/}
                {/*</ButtonCol>*/}
            </Row>
        </Container>
    )
}

const DefaultNavbar = (args: BasicComponentProps) => {
    const scrollFromTop = useOnScroll();

    return (
        <>
            <NavbarStatic transparent><Content/></NavbarStatic>

            <NavbarFixed><Content/></NavbarFixed>

            <div style={{height: "3000px"}}/>
        </>
    );
}

DefaultNavbar.args = {};

export default DefaultNavbar;