import React, {ReactNode} from "react";
import styled from "styled-components";
import {BasicComponentProps, ReactElementOrNull} from "@typings";

const CarouselStyled = styled.div`
    
`;

interface Props extends BasicComponentProps{

}

const Carousel: React.FunctionComponent<Props> = (props: Props): ReactElementOrNull => {
    const {children, className} = props;
    
    return (
        <CarouselStyled className={className}>
            {children}
        </CarouselStyled>
    )
}

export default Carousel;