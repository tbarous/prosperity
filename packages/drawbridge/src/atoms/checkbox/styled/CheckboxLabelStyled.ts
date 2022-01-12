import styled from "styled-components";
import Text from "@atoms/text/Text";
import {px} from "@utils/ThemeUtils";
import {StyledProps} from "@typings";

interface CheckboxRadioLabelStyledProps extends StyledProps {
    disabled?: boolean
}

type T = CheckboxRadioLabelStyledProps;

function getColor(p: T) {
    if (p.disabled) {
        return "rgba(0, 0, 0, 0.2)";
    }

    return "rgba(0, 0, 0, 0.6)";
}

const CheckboxRadioLabelStyled = styled(Text)<T>`
  margin-left: ${(p: T) => px(p.theme.spacing.s3)};
  color: ${getColor};
`

export default CheckboxRadioLabelStyled;