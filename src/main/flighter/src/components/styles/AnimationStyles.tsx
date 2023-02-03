import { keyframes } from "styled-components";

export const textShaking = keyframes`
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
export default textShaking;
