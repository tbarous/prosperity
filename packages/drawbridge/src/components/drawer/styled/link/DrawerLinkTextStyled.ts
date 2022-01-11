import styled from "styled-components";
import {px} from "@utils/ThemeUtils";
import {StyledProps} from "@typings";
import {DrawerUIProps} from "@components/drawer/Drawer";
import Icon from "@components/icon/Icon";
import Text from "@components/text/Text";

export interface DrawerLinkTextStyledProps extends StyledProps, DrawerUIProps {
    onClick: any
}

type T = DrawerLinkTextStyledProps;

const DrawerLinkTextStyled = styled(Text)<T>`
  margin-left: 2rem;
  //position: absolute;
  //left: 3rem;
  //top: 15px;
`;

export default DrawerLinkTextStyled;