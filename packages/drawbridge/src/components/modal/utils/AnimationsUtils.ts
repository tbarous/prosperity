import {keyframes} from "styled-components";

const openModalAnimation = keyframes`
  from {
    transform: translateY(-100%);
    opacity: 0;
  }

  to {
    transform: translateY(0);
    opacity: 1;
  }
`;

const closeModalAnimation = keyframes`
  from {
    transform: translateY(0);
    opacity: 1;
  }

  to {
    transform: translateY(-100%);
    opacity: 0;
  }
`;

export {
    openModalAnimation,
    closeModalAnimation
}