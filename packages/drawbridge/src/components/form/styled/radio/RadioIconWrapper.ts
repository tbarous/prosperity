import styled from "styled-components";

const CheckboxIconWrapper = styled.div<{ checked?: boolean }>`
  border-radius: 50%;
  width: 22px;
  height: 22px;
  display: flex;
  align-items: center;
  background-color: white;
  position: relative;
  justify-content: center;
  border: ${p => p.checked ? "2px solid "+p.theme.color.primary : " 2px solid rgba(0, 0, 0, 0.6)"};
`

export default CheckboxIconWrapper;