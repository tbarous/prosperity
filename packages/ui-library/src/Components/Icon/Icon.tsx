import React, {ReactNode} from "react";
import styled from "styled-components";
import {ReactElementOrNull} from "../Types";
import Theme from "../Theme/Theme";

const Wrapper = styled.div`
   width: ${(props: { theme: Theme, width: number, height: number, }) => `${props.width}px`};
   height: ${(props: { theme: Theme, height: number, width: number }) => `${props.height}px`};
   
   svg {
        width: 100%;
        height: 100%;
    }
`;

interface Props {
    children?: ReactNode,
    specific: any,
    width: number,
    height: number,
    onClick?: () => void,
    className?: string
}

const Icon: React.FunctionComponent<Props> = (props: Props): ReactElementOrNull => {
    const {specific, width, height, onClick, className} = props;

    return (
        <Wrapper
            onClick={onClick}
            className={className}
            width={width}
            height={height}
            dangerouslySetInnerHTML={{__html: specific}}
        >
        </Wrapper>
    );
}

export default Icon;