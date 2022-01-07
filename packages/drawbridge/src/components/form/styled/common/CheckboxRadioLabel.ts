import styled from "styled-components";
import Text from "@components/text/Text";
import {StyledProps} from "@typings";

type T = StyledProps & { disabled?: boolean };

function g(p: T) {
    if(p.disabled){
        return "rgba(0, 0, 0, 0.2)";
    }

    return "rgba(0, 0, 0, 0.6)"
}

const CheckboxRadioLabel = styled(Text)<T>`
  margin-left: .5rem;
  
  color: ${g};
`

export default CheckboxRadioLabel;