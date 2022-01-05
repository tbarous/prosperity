import styled from "styled-components";
import {StyledProps} from "@typings";
import rules from "@rules";

export interface CheckboxCheckmarkStyledProps extends StyledProps {
    checked?: boolean
}

const CheckboxCheckmarkStyled = styled.span<CheckboxCheckmarkStyledProps>`
  background-color: ${(props: CheckboxCheckmarkStyledProps) => props.checked ? props.theme.color.primary : "none"};
  position: ${rules.position.absolute};
  top: ${(props: CheckboxCheckmarkStyledProps) => props.theme.spacing.s0};
  left: ${(props: CheckboxCheckmarkStyledProps) => props.theme.spacing.s0};
  height: 25px;
  width: 25px;
  border-radius: ${(props: CheckboxCheckmarkStyledProps) => props.theme.borderRadius.medium};
  box-sizing: content-box;
  box-shadow: ${props => props.theme.shadow.light};

  &:after {
    content: "";
    position: ${rules.position.absolute};
    left: 9px;
    top: 5px;
    width: 5px;
    height: 10px;
    border: solid white;
    border-width: 0 3px 3px 0;
    transform: rotate(45deg);
    display: ${(props: CheckboxCheckmarkStyledProps) => props.checked ? "block" : "none"};
  }
`;

export default CheckboxCheckmarkStyled;