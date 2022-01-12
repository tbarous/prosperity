import styled from "styled-components";
import Text, {TextProps} from "@atoms/text/Text";

const TextEmphasized = styled(Text)<TextProps>`
  font-weight: ${p => p.theme.fontWeight.bold};
`;

export default TextEmphasized;