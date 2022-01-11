import styled from "styled-components";
import {px} from "@utils/ThemeUtils";
import {StyledProps} from "@typings";
import {DrawerUIProps} from "@components/drawer/Drawer";
import Icon from "@components/icon/Icon";
import Text from "@components/text/Text";

export interface DrawerLinkTextStyledProps extends StyledProps, DrawerUIProps {}

type T = DrawerLinkTextStyledProps;

const DrawerLinkTextStyled = styled(Text)`
  margin-left: 2rem;
`;

export default DrawerLinkTextStyled;