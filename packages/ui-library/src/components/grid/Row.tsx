import React from "react";
import styled from "styled-components";
import {BasicComponentProps, ReactElementOrNull} from "@customTypes/index";

const Wrapper = styled.div`
  margin-left: -15px;
  margin-right: -15px;
  display: flex;
  flex-wrap: wrap;
  box-sizing: border-box;
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