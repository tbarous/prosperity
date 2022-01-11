import React, {FunctionComponent, ReactElement, ReactNode} from "react";
import TextStyled from "@components/text/styled/TextStyled";
import {BasicComponentProps} from "@typings";

export interface TextUIProps {
    bold?: boolean,
    light?: boolean,
    xs?: boolean,
    sm?: boolean,
    md?: boolean,
    lg?: boolean,
    muted?: boolean
}

export interface TextProps extends BasicComponentProps, TextUIProps {}

const Text: FunctionComponent<TextProps> = (props: TextProps): ReactElement => {
    const {children, className, bold, md, lg, sm, xs, light, muted} = props;

    const UIProps = {bold, md, lg, sm, xs, light, muted};

    return (
        <TextStyled className={className} {...UIProps}>
            {children}
        </TextStyled>
    )
}

export default Text;