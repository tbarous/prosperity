import styled from "styled-components";
import {StyledProps} from "@typings";
import Icon from "@components/icon/Icon";

type T = StyledProps;

const SnackbarCloseStyled = styled(Icon)<T>`
  position: ${(props: T) => props.theme.position.absolute};
  cursor: ${(props: T) => props.theme.cursor.pointer};
  right: ${(props: T) => props.theme.spacing.s5};
  top: ${(props: T) => props.theme.spacing.s5};
`;

export default SnackbarCloseStyled;