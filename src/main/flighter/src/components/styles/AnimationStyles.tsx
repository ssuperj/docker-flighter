import { keyframes } from "styled-components";

const textShaking = keyframes`
  0% {
    transform: translateX(-1px);
  }
  50% {
    transform: translateX(5px);
  }
  100% {
    transform: translateX(-1px);
  }
`;

const fadeOut = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

const loader = keyframes`
  0% {
    width: 0px;
  }
  70% {
    width: 100%;
    opacity: 1;
  }
  90% {
    opacity: 0;
    width: 100%;
  }
  100% {
    opacity: 0;
    width: 0px;
  }
`;
export { textShaking, fadeOut };
