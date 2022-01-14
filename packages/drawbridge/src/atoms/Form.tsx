import React from "react";
import {StyledProps} from "@typings";
import styled from "styled-components";

interface Props extends StyledProps {}

const Form = styled.form<Props>`
  display: ${p => p.theme.display.block};
`;

export default Form;