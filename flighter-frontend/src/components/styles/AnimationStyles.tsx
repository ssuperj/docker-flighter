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
  }`;

const plainfly = keyframes`
    0% {
      left: -10%;
      -webkit-transform: scale(0.4);
      -ms-transform: scale(0.4);
      -o-transform: scale(0.4);
      transform: scale(0.4);
    }
    50% {
      left: 110%;
      -webkit-transform: scale(1);
      -ms-transform: scale(1);
      -o-transform: scale(1);
      transform: scale(1);
    }
    51% {
      -webkit-transform: rotateY(180deg);
      -webkit-transform: rotateY(180deg);
      -ms-transform: rotateY(180deg);
      -o-transform: rotateY(180deg);
      transform: rotateY(180deg);
    }
    100% {
      left: -10%;
      -webkit-transform: scale(1.4) rotateY(180deg);
      -ms-transform: scale(1.4) rotateY(180deg);
      -o-transform: scale(1.4) rotateY(180deg);
      transform: scale(1.4) rotateY(180deg);
    }
  `;

const plainfly2 = keyframes`
0% {
  left: -10%;
  -webkit-transform: scale(0.4);
  -ms-transform: scale(0.4);
  -o-transform: scale(0.4);
  transform: scale(0.4);
}
50% {
  left: 50%;
  -webkit-transform: scale(1);
  -ms-transform: scale(1);
  -o-transform: scale(1);
  transform: scale(1);
}
51% {
  -webkit-transform: rotateY(180deg);
  -webkit-transform: rotateY(180deg);
  -ms-transform: rotateY(180deg);
  -o-transform: rotateY(180deg);
  transform: rotateY(180deg);
}
100% {
  left: 79%;
  -webkit-transform: scale(1.4) rotateY(180deg);
  -ms-transform: scale(1.4) rotateY(180deg);
  -o-transform: scale(1.4) rotateY(180deg);
  transform: scale(1.4) rotateY(180deg);
}
`;

const cloud = keyframes` 
    0% {
      left: 15%;
    }
    50% {
      left: 63%;
    }
    100% {
      left: 15%;
    }
`;

const cloud_a = keyframes`
    0% {
      left: 62%;
    }
    50% {
      left: 90%;
    }
    100% {
      left: 62%;
    }
`;

const cloud_b = keyframes`
    0% {
      left: 50%;
    }
    50% {
      left: 23%;
    }
    100% {
      left: 50%;
    }
`;

const cloud_c = keyframes`
    0% {
      left: 37%;
    }
    50% {
      left: 47%;
    }
    100% {
      left: 37%;
    }
`;

const cloud_d = keyframes`
    0% {
      left: 25%;
    }
    50% {
      left: 65%;
    }
    100% {
      left: 25%;
    }
`;

export { textShaking, fadeOut, plainfly, plainfly2, cloud, cloud_a, cloud_b, cloud_c, cloud_d };
