import styled from "styled-components";
import Text from "@components/text/Text";
import StorybookWrapper from "@stories/StorybookWrapper";
import {TextStyledProps} from "@components/text/styled/TextStyled";
import Card from "@components/card/Card";
import Navbar from "@components/navbar/Navbar";
import Link from "@components/link/Link";

export const Wrapper = styled.div`
  font-family: OpenSans, serif;
`;

export const StorybookColContent = styled(Text)<TextStyledProps>`
  background-color: ${(props: TextStyledProps) => props.theme.color.primary};
  padding: 1rem;
  text-align: center;
  color: white;
  border-radius: 8px;
`;

export const StorybookButtonWrapper = styled.div`
  width: 150px;
`;

export const StorybookWrapperStyled = styled(StorybookWrapper)`
  margin: 1rem;
`;

export const CardStyled = styled(Card)`
  padding: 1rem;
`;

export const NavbarStyled = styled(Navbar)`
  height: 100px;
`;

export const Links = styled.div`
  display: flex;
  align-items: center;
  height: 100%;
  justify-content: end;
`;

export const LinkStyled = styled(Link)`
  padding: 0 1rem;
`;