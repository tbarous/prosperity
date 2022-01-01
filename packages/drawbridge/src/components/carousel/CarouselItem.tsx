import React, {ReactNode} from "react";
import styled from "styled-components";

const CarouselItemStyled = styled.div`
    
`;

interface Props {
    children?: ReactNode,
    className?: string
}

const CarouselItem: React.FunctionComponent<Props> = (props: Props): React.ReactElement | null => {
    const {children, className} = props;
    
    return (
        <CarouselItemStyled className={className}>
            {children}
        </CarouselItemStyled>
    )
}

export default CarouselItem;