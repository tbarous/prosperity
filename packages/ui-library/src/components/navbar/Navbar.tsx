import {FunctionComponent, ReactNode} from "react";
import styled from "styled-components";
import {ReactElementOrNull} from "@customTypes/Types";
import React from "react";

const Wrapper = styled.div`
    // position: fixed;
    // top: 0;
    // left: 0;
    width: 100%;
    height: 60px;
    z-index: 11;
    background: white;
    display: flex;
    align-items: center;
`;

interface Props {
    children?: ReactNode,
    className?: string
}

const Navbar: FunctionComponent<Props> = (props: Props): ReactElementOrNull => {
    const {children, className} = props;

    return (
        <Wrapper className={className}>
            {children}
        </Wrapper>
    )
}

export default Navbar;