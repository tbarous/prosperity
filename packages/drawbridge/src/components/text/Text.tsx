import React, {FunctionComponent, ReactElement, ReactNode} from "react";
import TextStyled from "@components/text/styled/TextStyled";
import {BasicComponentProps} from "@typings";

export interface TextUIProps {
    bold?: boolean,
    light?: boolean,
    xs?: boolean,
    sm?: boolean,
    md?: boolean,
    lg?: boolean
}

export interface TextProps extends BasicComponentProps, TextUIProps {}

const Text: FunctionComponent<TextProps> = (props: TextProps): ReactElement => {
    const {children, className, bold, md, lg, sm, xs, light} = props;

    const UIProps = {bold, md, lg, sm, xs, light};

    return (
        <TextStyled className={className} {...UIProps}>
            {children}
        </TextStyled>
    )
}

export default Text;