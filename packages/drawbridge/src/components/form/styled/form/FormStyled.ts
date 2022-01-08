import styled from "styled-components";
import ThemeInterface from "@theme/interfaces/ThemeInterface";

interface T {
    theme: ThemeInterface,
}

const FormStyled = styled.form<T>`
`;

export default FormStyled;