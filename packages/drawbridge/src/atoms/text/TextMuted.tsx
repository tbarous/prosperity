import styled from "styled-components";
import Text, {TextProps} from "@atoms/text/Text";
import {lighten} from "@utils/ColorUtils";

const TextMuted = styled(Text)<TextProps>`
  color: ${p => lighten(p.theme.color.dark, 0.4)};
`;

export default TextMuted;