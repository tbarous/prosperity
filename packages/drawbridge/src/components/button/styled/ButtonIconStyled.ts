import styled from "styled-components";
import Icon from "@components/icon/Icon";
import {StyledProps} from "@typings";
import {px} from "@utils/ThemeUtils";

type T = StyledProps & { primary?: boolean, secondary?: boolean };

const ButtonIconStyled = styled(Icon)<T>`
  color: ${(p: T) => p.secondary ? p.theme.color.dark : p.theme.color.white};
  margin-right: ${(p: T) => px(p.theme.spacing.s4)};
`;

export default ButtonIconStyled