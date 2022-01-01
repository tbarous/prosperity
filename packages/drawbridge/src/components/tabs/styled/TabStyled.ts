import styled from "styled-components";
import {StyledProps} from "@typings";

interface TabStyledProps extends StyledProps {
    active?: boolean,
    onClick?: (e: MouseEvent) => void,
    id?: string
}

const TabStyled = styled.div`
  background: red;
  color: wheat;
  text-align: center;
  flex: 1;
  border-bottom: ${(props: TabStyledProps) => props.active ? ".5rem solid" : ""};
  cursor: pointer;
`;

export default TabStyled;