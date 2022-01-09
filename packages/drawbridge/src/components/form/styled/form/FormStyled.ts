import styled from "styled-components";
import {StyledProps} from "@typings";

interface FormStyledProps extends StyledProps {}

type T = FormStyledProps;

const FormStyled = styled.form<T>`
  display: ${(p: T) => p.theme.display.block};
`;

export default FormStyled;