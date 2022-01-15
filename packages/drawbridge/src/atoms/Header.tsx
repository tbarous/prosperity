import React from "react";
import styled, {css} from "styled-components";
import {BasicComponentProps, StyledProps} from "@typings";
import {px} from "@utils/ThemeUtils";
import {FunctionComponent, ReactElement} from "react";

export enum Boldness {
    LIGHT = "light",
    NORMAL = "normal",
    BOLD = "bold"
}

export enum Variations {
    H1 = "h1",
    H2 = "h2",
    H3 = "h3",
    H4 = "h4",
    H5 = "h5"
}

interface headerProps extends StyledProps {
    boldness?: Boldness,
    variation?: Variations
}

function getFontWeight(p: headerProps) {
    if (p.boldness === Boldness.LIGHT) {
        return p.theme.fontWeight.light;
    }

    if (p.boldness === Boldness.BOLD) {
        return p.theme.fontWeight.bold;
    }

    return p.theme.fontWeight.normal;
}

function getFontSize(p: headerProps) {
    if (p.variation === Variations.H2) {
        return px(p.theme.fontSize.fs6);
    }

    if (p.variation === Variations.H3) {
        return px(p.theme.fontSize.fs5);
    }

    if (p.variation === Variations.H4) {
        return px(p.theme.fontSize.fs4);
    }

    if (p.variation === Variations.H5) {
        return px(p.theme.fontSize.fs3);
    }

    return px(p.theme.fontSize.fs7);
}

const base = css`
  font-weight: ${getFontWeight};
  font-size: ${getFontSize};
  margin: ${p => p.theme.spacing.s0};
  padding: ${p => p.theme.spacing.s0};
  color: ${p => p.theme.color.dark};
  font-family: ${p => p.theme.fontFamily.secondary};
`

const HeaderH1 = styled.h2<headerProps>`${base}`;
const HeaderH2 = styled.h2<headerProps>`${base}`;
const HeaderH3 = styled.h3<headerProps>`${base}`;
const HeaderH4 = styled.h4<headerProps>`${base}`;
const HeaderH5 = styled.h5<headerProps>`${base}`;

interface Props extends BasicComponentProps {
    boldness?: Boldness,
    variation?: Variations
}

const Header: FunctionComponent<Props> = (props: Props): ReactElement => {
    const {variation, children, boldness} = props;

    if (variation === Variations.H2) return <HeaderH2 variation={variation} boldness={boldness}>{children}</HeaderH2>
    if (variation === Variations.H3) return <HeaderH3 variation={variation} boldness={boldness}>{children}</HeaderH3>
    if (variation === Variations.H4) return <HeaderH4 variation={variation} boldness={boldness}>{children}</HeaderH4>
    if (variation === Variations.H5) return <HeaderH5 variation={variation} boldness={boldness}>{children}</HeaderH5>
    return <HeaderH1 variation={variation} boldness={boldness}>{children}</HeaderH1>
}

export default Header;