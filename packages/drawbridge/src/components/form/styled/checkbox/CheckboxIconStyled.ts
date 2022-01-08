import styled from "styled-components";
import Icon from "@components/icon/Icon";
import ThemeInterface from "@theme/interfaces/ThemeInterface";

interface T {
    theme: ThemeInterface,
}

const CheckboxIconStyled = styled(Icon)<T>`
  color: ${(p: T) => p.theme.color.white};
`;

export default CheckboxIconStyled;