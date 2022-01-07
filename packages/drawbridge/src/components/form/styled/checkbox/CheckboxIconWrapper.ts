import styled from "styled-components";

const CheckboxIconWrapper = styled.div<{ checked?: boolean }>`
  border-radius: 2px;
  width: 18px;
  height: 18px;
  display: flex;
  align-items: center;
  background-color: ${p => p.theme.color.primary};
  position: relative;
  justify-content: center;
`

export default CheckboxIconWrapper;