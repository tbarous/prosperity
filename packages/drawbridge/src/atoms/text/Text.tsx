import React, {FunctionComponent, ReactElement, ReactNode} from "react";
import TextStyled from "@atoms/text/styled/TextStyled";
import {BasicComponentProps} from "@typings";

export interface TextUIProps {
    bold?: boolean,
    light?: boolean,
    xs?: boolean,
    sm?: boolean,
    md?: boolean,
    lg?: boolean,
    muted?: boolean,
    dark?: boolean
}

export interface TextProps extends BasicComponentProps, TextUIProps {}

const Text: FunctionComponent<TextProps> = (props: TextProps): ReactElement => {
    const {children, className, bold, md, lg, sm, xs, light, muted, dark} = props;

    const UIProps = {bold, md, lg, sm, xs, light, muted, dark, className};

    return (
        <TextStyled {...UIProps}>{children}</TextStyled>
    )
}

export default Text;