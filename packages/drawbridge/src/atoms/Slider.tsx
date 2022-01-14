import React, {FunctionComponent, ReactElement, ReactNode} from "react";
import {BasicComponentProps} from "@typings";
import SliderStyled from "./styled/slider/SliderStyled";

interface SliderProps extends BasicComponentProps {

}

const Slider: FunctionComponent<SliderProps> = (props: SliderProps): ReactElement => {
    const {children, className} = props;

    return (
        <SliderStyled className={className}>
            {children}
        </SliderStyled>
    )
}

export default Slider;