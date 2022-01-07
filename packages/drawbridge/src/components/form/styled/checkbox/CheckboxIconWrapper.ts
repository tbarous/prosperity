import styled from "styled-components";

const CheckboxIconWrapper = styled.div<{ checked?: boolean }>`
  border-radius: 2px;
  width: 18px;
  height: 18px;
  display: flex;
  align-items: center;
  background-color: ${p => p.checked ? p.theme.color.primary : ""};
  position: relative;
  justify-content: center;
  border: ${p => p.checked ? "" : " 2px solid rgba(0, 0, 0, 0.6)"};
`

export default CheckboxIconWrapper;