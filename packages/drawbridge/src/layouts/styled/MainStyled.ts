import styled from "styled-components";
import {StyledProps} from "@typings";

export interface MainStyledProps extends StyledProps {}

type T = MainStyledProps;

const MainStyled = styled.div`
  padding: 1rem 3rem;
  flex: 1;
`;

export default MainStyled;