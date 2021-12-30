import React, {ReactNode} from "react";
import styled from "styled-components";
import {BasicComponentProps, ReactElementOrNull} from "@customTypes/index";

const Wrapper = styled.div`
  padding-right: 15px;
  padding-left: 15px;
  margin-right: auto;
  margin-left: auto;

  @media (min-width: 768px) {
    ${(props: { fluid?: boolean }) => props.fluid ? "auto" : "width: 750px;"}
  }

  @media (min-width: 992px) {
    ${(props: { fluid?: boolean }) => props.fluid ? "auto" : "width: 970px;"}
  }

  @media (min-width: 1200px) {
    ${(props: { fluid?: boolean }) => props.fluid ? "auto" : "width: 1170px;"}
  }
`;

interface Props extends BasicComponentProps {
    fluid?: boolean
}

const Container: React.FunctionComponent<Props> = (props: Props): ReactElementOrNull => {
    const {children, fluid} = props;

    return (
        <Wrapper fluid={fluid}>
            {children}
        </Wrapper>
    )
}

export default Container;