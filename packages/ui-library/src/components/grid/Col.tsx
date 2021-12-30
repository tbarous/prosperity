import React, {ReactNode} from "react";
import styled from "styled-components";
import {BasicComponentProps, ReactElementOrNull} from "@customTypes/index";

const Wrapper = styled.div`
  flex-basis: 0;
  flex-grow: ${(props: { grow?: number }) => props.grow || 1};
  max-width: 100%;
  position: relative;
  width: 100%;
  padding-right: 1rem;
  padding-left: 1rem;
`;

interface Props extends BasicComponentProps {
    grow?: number
}

const Col: React.FunctionComponent<Props> = (props: Props): ReactElementOrNull => {
    const {children, className, grow} = props;

    return (
        <Wrapper className={className} grow={grow}>
            {children}
        </Wrapper>
    )
}

export default Col;