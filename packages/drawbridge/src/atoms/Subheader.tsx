import React from "react";
import styled from "styled-components";
import {BasicComponentProps, StyledProps} from "@typings";
import {px} from "@utils/ThemeUtils";
import {FunctionComponent, ReactElement} from "react";

export enum Boldness {
    LIGHT = "light",
    NORMAL = "normal",
    BOLD = "bold"
}

export enum Variations {
    H2 = "h2",
    H3 = "h3",
    H4 = "h4",
    H5 = "h5"
}

interface SubheaderProps extends StyledProps {
    boldness?: Boldness,
    variation?: Variations
}

function getFontWeight(p: SubheaderProps) {
    if (p.boldness === Boldness.LIGHT) {
        return p.theme.fontWeight.light;
    }

    if (p.boldness === Boldness.BOLD) {
        return p.theme.fontWeight.bold;
    }

    return p.theme.fontWeight.normal;
}

function getFontSize(p: SubheaderProps) {
    if (p.variation === Variations.H3) {
        return px(p.theme.fontSize.fs5);
    }

    if (p.variation === Variations.H4) {
        return px(p.theme.fontSize.fs4);
    }

    if (p.variation === Variations.H5) {
        return px(p.theme.fontSize.fs3);
    }

    return px(p.theme.fontSize.fs6);
}

const Subheader = styled.h2<SubheaderProps>`
  font-weight: ${getFontWeight};
  margin: ${p => p.theme.spacing.s0};
  padding: ${p => p.theme.spacing.s0};
  font-size: ${getFontSize};
  color: ${p => p.theme.color.dark};
  font-family: ${p => p.theme.fontFamily.secondary};
`;

const SubheaderH2 = styled.h2<SubheaderProps>`
  font-weight: ${getFontWeight};
  margin: ${p => p.theme.spacing.s0};
  padding: ${p => p.theme.spacing.s0};
  font-size: ${getFontSize};
  color: ${p => p.theme.color.dark};
  font-family: ${p => p.theme.fontFamily.secondary};
`;

const SubheaderH3 = styled.h3<SubheaderProps>`
  font-weight: ${getFontWeight};
  margin: ${p => p.theme.spacing.s0};
  padding: ${p => p.theme.spacing.s0};
  font-size: ${getFontSize};
  color: ${p => p.theme.color.dark};
  font-family: ${p => p.theme.fontFamily.secondary};
`;

const SubheaderH4 = styled.h4<SubheaderProps>`
  font-weight: ${getFontWeight};
  margin: ${p => p.theme.spacing.s0};
  padding: ${p => p.theme.spacing.s0};
  font-size: ${getFontSize};
  color: ${p => p.theme.color.dark};
  font-family: ${p => p.theme.fontFamily.secondary};
`;

const SubheaderH5 = styled.h5<SubheaderProps>`
  font-weight: ${getFontWeight};
  margin: ${p => p.theme.spacing.s0};
  padding: ${p => p.theme.spacing.s0};
  font-size: ${getFontSize};
  color: ${p => p.theme.color.dark};
  font-family: ${p => p.theme.fontFamily.secondary};
`;

interface Props extends BasicComponentProps {
    boldness?: Boldness,
    variation?: Variations
}

const Link: FunctionComponent<Props> = (props: Props): ReactElement => {
    const {variation, children} = props;

    if (variation === Variations.H3) {
        return <SubheaderH3>{children}</SubheaderH3>
    }

    if (variation === Variations.H4) {
        return <SubheaderH4>{children}</SubheaderH4>
    }

    if (variation === Variations.H5) {
        return <SubheaderH5>{children}</SubheaderH5>
    }

    return <SubheaderH2>{children}</SubheaderH2>
}

export default Subheader;