import React, {ReactNode} from "react";
import styled from "styled-components";
import {BasicComponentProps, ReactElementOrNull} from "@customTypes/index";

const Wrapper = styled.div`
  margin-left: -1rem;
  margin-right: -1rem;
  display: flex;
  flex-wrap: wrap;
`;

const Row: React.FunctionComponent<BasicComponentProps> = (props: BasicComponentProps): ReactElementOrNull => {
    const {children} = props;

    return (
        <Wrapper>
            {children}
        </Wrapper>
    )
}

export default Row;