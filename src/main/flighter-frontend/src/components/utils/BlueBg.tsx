import styled from "styled-components";
import { cloud, cloud_a, cloud_b, cloud_c, cloud_d, plainfly } from "../styles/AnimationStyles";

const Wrapper = styled.div`
  height: 100%;
  .container__bg {
    background: #4ba6de;
    z-index: -1;
    width: 100%;
    height: 100%;
    position: absolute;
    overflow: hidden;
  }
  .empty {
    height: 300px;
  }
  .cloud,
  .cloud:before,
  .cloud:after {
    content: "";
    background: #d2efff;
    display: block;
    position: absolute;
    left: 25%;
    top: 15%;
    border-radius: 100%;
    width: 170px;
    height: 60px;
    z-index: 1;
  }
  .cloud:before {
    width: 125px;
    height: 65px;
    top: -22px;
    border-radius: 50%;
    left: 24px;
  }
  .cloud:after {
    width: 58px;
    height: 48px;
    top: -35px;
    left: 57px;
  }
  .cloud:nth-child(1) {
    -webkit-animation: ${cloud} 18s linear infinite;
    -o-animation: ${cloud} 18s linear infinite;
    animation: ${cloud} 18s linear infinite;
  }
  .cloud:nth-child(2) {
    left: 50%;
    top: 40%;
    -webkit-transform: scale(1.8);
    -ms-transform: scale(1.8);
    -o-transform: scale(1.8);
    transform: scale(1.8);
    -webkit-animation: ${cloud_a} 26s linear infinite;
    -o-animation: ${cloud_a} 26s linear infinite;
    animation: ${cloud_a} 26s linear infinite;
  }
  .cloud:nth-child(3) {
    left: 62%;
    top: 25%;
    -webkit-transform: scale(1.3);
    -ms-transform: scale(1.3);
    -o-transform: scale(1.3);
    transform: scale(1.3);
    -webkit-animation: ${cloud_b} 22s linear infinite;
    -o-animation: ${cloud_b} 22s linear infinite;
    animation: ${cloud_b} 22s linear infinite;
  }
  .cloud:nth-child(4) {
    left: 25%;
    top: 40%;
    -webkit-transform: scale(1.5);
    -ms-transform: scale(1.5);
    -o-transform: scale(1.5);
    transform: scale(1.5);
    -webkit-animation: ${cloud_c} 24s linear infinite;
    -o-animation: ${cloud_c} 24s linear infinite;
    animation: ${cloud_d} 24s linear infinite;
  }
  .cloud:nth-child(5) {
    left: 40%;
    top: 55%;
    -webkit-transform: scale(1.5);
    -ms-transform: scale(1.5);
    -o-transform: scale(1.5);
    transform: scale(1.5);
    -webkit-animation: ${cloud_d} 21s linear infinite;
    -o-animation: ${cloud_d} 21s linear infinite;
    animation: ${cloud_d} 21s linear infinite;
  }
  .cloud:nth-child(6) {
    left: 40%;
    top: 20%;
    -webkit-transform: scale(1.5);
    -ms-transform: scale(1.5);
    -o-transform: scale(1.5);
    transform: scale(1.5);
    -webkit-animation: ${cloud} 15s linear infinite;
    -o-animation: ${cloud} 15s linear infinite;
    animation: ${cloud} 15s linear infinite;
  }
  .cloud:nth-child(7) {
    left: 50%;
    top: 20%;
    -webkit-transform: scale(1.5);
    -ms-transform: scale(1.5);
    -o-transform: scale(1.5);
    transform: scale(1.5);
    -webkit-animation: ${cloud_d} 21s linear infinite;
    -o-animation: ${cloud_d} 21s linear infinite;
    animation: ${cloud_d} 21s linear infinite;
  }
  .cloud:nth-child(8) {
    left: 40%;
    top: 55%;
    -webkit-transform: scale(1.5);
    -ms-transform: scale(1.5);
    -o-transform: scale(1.5);
    transform: scale(1.5);
    -webkit-animation: ${cloud_a} 21s linear infinite;
    -o-animation: ${cloud_a} 21s linear infinite;
    animation: ${cloud_a} 21s linear infinite;
  }
  .cloud:nth-child(9) {
    left: 10%;
    top: 50%;
    -webkit-transform: scale(1.5);
    -ms-transform: scale(1.5);
    -o-transform: scale(1.5);
    transform: scale(1.5);
    -webkit-animation: ${cloud_b} 21s linear infinite;
    -o-animation: ${cloud_b} 21s linear infinite;
    animation: ${cloud_b} 21s linear infinite;
  }
  .cloud:nth-child(10) {
    left: 70%;
    top: 90%;
    -webkit-transform: scale(1.5);
    -ms-transform: scale(1.5);
    -o-transform: scale(1.5);
    transform: scale(1.5);
    -webkit-animation: ${cloud_c} 21s linear infinite;
    -o-animation: ${cloud_c} 21s linear infinite;
    animation: ${cloud_c} 21s linear infinite;
  }
  .cloud:nth-child(11) {
    left: 70%;
    top: 70%;
    -webkit-transform: scale(1.5);
    -ms-transform: scale(1.5);
    -o-transform: scale(1.5);
    transform: scale(1.5);
    -webkit-animation: ${cloud_d} 15s linear infinite;
    -o-animation: ${cloud_d} 15s linear infinite;
    animation: ${cloud_d} 15s linear infinite;
  }
  .cloud:nth-child(12) {
    left: 30%;
    top: 75%;
    -webkit-transform: scale(1.5);
    -ms-transform: scale(1.5);
    -o-transform: scale(1.5);
    transform: scale(1.5);
    -webkit-animation: ${cloud_a} 21s linear infinite;
    -o-animation: ${cloud_a} 21s linear infinite;
    animation: ${cloud_a} 21s linear infinite;
  }
  .cloud:nth-child(13) {
    left: 50%;
    top: 80%;
    -webkit-transform: scale(1.5);
    -ms-transform: scale(1.5);
    -o-transform: scale(1.5);
    transform: scale(1.5);
    -webkit-animation: ${cloud_b} 21s linear infinite;
    -o-animation: ${cloud_b} 21s linear infinite;
    animation: ${cloud_b} 21s linear infinite;
  }
  .cloud:nth-child(14) {
    left: 60%;
    top: 65%;
    -webkit-transform: scale(1.5);
    -ms-transform: scale(1.5);
    -o-transform: scale(1.5);
    transform: scale(1.5);
    -webkit-animation: ${cloud_c} 15s linear infinite;
    -o-animation: ${cloud_c} 15s linear infinite;
    animation: ${cloud_c} 15s linear infinite;
  }
  .cloud:nth-child(15) {
    left: 70%;
    top: 60%;
    -webkit-transform: scale(1.5);
    -ms-transform: scale(1.5);
    -o-transform: scale(1.5);
    transform: scale(1.5);
    -webkit-animation: ${cloud_d} 18s linear infinite;
    -o-animation: ${cloud_d} 18s linear infinite;
    animation: ${cloud_d} 18s linear infinite;
  }
  .ground {
    position: absolute;
    width: 100%;
    height: 300px;
    border-top-left-radius: 100%;
    border-top-right-radius: 100%;
    background: #5b916e;
    bottom: -30px;
    z-index: 1;
  }
  .tree {
    width: 10px;
    height: 50px;
    background: #c0b088;
    z-index: 1;
    display: block;
    position: absolute;
    bottom: 174px;
    left: 62%;
    -webkit-transform: rotate(6deg);
    -ms-transform: rotate(6deg);
    -o-transform: rotate(6deg);
    transform: rotate(6deg);
  }
  .leaves,
  .leaves:before,
  .leaves:after {
    content: "";
    background: #349638;
    border-radius: 100%;
    width: 70px;
    top: -20px;
    height: 30px;
    position: absolute;
    left: -30px;
    z-index: 1;
  }
  .leaves:before {
    width: 53px;
    top: -9px;
    left: 9px;
  }
  .leaves:after {
    width: 34px;
    top: -14px;
    left: 19px;
  }
  .tree:nth-child(2) {
    bottom: 130px;
    left: 80%;
    -webkit-transform: rotate(12deg) scale(0.7);
    -ms-transform: rotate(12deg) scale(0.7);
    -o-transform: rotate(12deg) scale(0.7);
    transform: rotate(12deg) scale(0.7);
  }
  .tree:nth-child(3) {
    bottom: 180px;
    left: 50%;
    -webkit-transform: rotate(-2deg) scale(0.5);
    -ms-transform: rotate(-2deg) scale(0.5);
    -o-transform: rotate(-2deg) scale(0.5);
    transform: rotate(-2deg) scale(0.5);
  }
  .tree:nth-child(4) {
    bottom: 178px;
    left: 40%;
    -webkit-transform: rotate(7deg) scale(0.6);
    -ms-transform: rotate(7deg) scale(0.6);
    -o-transform: rotate(7deg) scale(0.6);
    transform: rotate(7deg) scale(0.6);
  }
  .tree:nth-child(5) {
    bottom: 175px;
    left: 26%;
    -webkit-transform: rotate(-12deg) scale(0.7);
    -ms-transform: rotate(-12deg) scale(0.7);
    -o-transform: rotate(-12deg) scale(0.7);
    transform: rotate(-12deg) scale(0.7);
  }
  .airplane {
    position: absolute;
    left: 40%;
    top: 10%;
    z-index: 3;
    -webkit-animation: ${plainfly} 10s linear infinite;
    -o-animation: ${plainfly} 10s linear infinite;
    animation: ${plainfly} 10s linear infinite;
  }

  .airplane2 {
    position: absolute;
    left: 1%;
    top: 30%;
    z-index: 3;
    -webkit-animation: ${plainfly} 12s linear infinite;
    -o-animation: ${plainfly} 12s linear infinite;
    animation: ${plainfly} 12s linear infinite;
  }

  .airplane3 {
    position: absolute;
    left: 25%;
    top: 50%;
    z-index: 3;
    -webkit-animation: ${plainfly} 5s linear infinite;
    -o-animation: ${plainfly} 5s linear infinite;
    animation: ${plainfly} 5s linear infinite;
  }

  .airplane div {
    background: #f9fbfc;
    border-radius: 100%;
    width: 60px;
    height: 60px;
    position: absolute;
    z-index: 1;
  }

  .airplane2 div {
    background: #f9fbfc;
    border-radius: 100%;
    width: 60px;
    height: 60px;
    position: absolute;
    z-index: 1;
  }

  .airplane3 div {
    background: #f9fbfc;
    border-radius: 100%;
    width: 60px;
    height: 60px;
    position: absolute;
    z-index: 1;
  }
  div.head {
    top: 21px;
    left: 83px;
    width: 60px;
    height: 25px;
    border-radius: 100%;
  }
  div.body {
    top: 20px;
    left: 0;
    width: 130px;
    height: 26px;
    border-radius: 40% 30% 20% 50%;
    z-index: 1;
  }
  div.lwing {
    top: 7px;
    left: 60px;
    height: 21px;
    width: 30px;
    border-radius: 5px;
    z-index: 0;
    -webkit-transform: skew(51deg, 0deg);
    -ms-transform: skew(51deg, 0deg);
    -o-transform: skew(51deg, 0deg);
    transform: skew(51deg, 0deg);
  }
  div.rwing {
    top: 34px;
    left: 57px;
    height: 27px;
    width: 35px;
    border-radius: 5px;
    z-index: 1;
    box-shadow: 0px 6px 4px rgba(0, 0, 0, 0.16);
    -webkit-transform: skew(-49deg, 0deg);
    -ms-transform: skew(-49deg, 0deg);
    -o-transform: skew(-49deg, 0deg);
    transform: skew(-49deg, 0deg);
  }
  div.tale {
    top: 15px;
    left: 10px;
    width: 16px;
    height: 16px;
    border-radius: 2px;
    -webkit-transform: skew(35deg, -9deg);
    -ms-transform: skew(35deg, -9deg);
    -o-transform: skew(35deg, -9deg);
    transform: skew(35deg, -9deg);
    background: linear-gradient(0deg, #fff, #bbdeff);
  }
  div.window,
  div.window:before,
  div.window:after {
    content: "";
    top: 6px;
    left: 48px;
    width: 4px;
    height: 4px;
    border-radius: 30%;
    background: #9ad0f5;
    border: 1px solid #5093d1;
    position: absolute;
  }
  div.window:before {
    left: -12px;
    top: -1px;
  }
  div.window:after {
    left: 10px;
    top: -1px;
  }
  div.window:nth-child(1) {
    left: 81px;
  }
  div.window:nth-child(2) {
    left: 115px;
  }
  div.window:nth-child(2):after {
    border-top-right-radius: 8px;
    width: 6px;
  }
`;

const BlueBg = () => {
  return (
    <Wrapper>
      <div className="container__bg">
        <div className="cloud"></div>
        <div className="cloud"></div>
        <div className="cloud"></div>
        <div className="cloud"></div>
        <div className="cloud"></div>
        <div className="cloud"></div>
        <div className="cloud"></div>
        <div className="cloud"></div>
        <div className="cloud"></div>
        <div className="cloud"></div>
        <div className="cloud"></div>
        <div className="cloud"></div>
        <div className="cloud"></div>
        <div className="cloud"></div>
        <div className="cloud"></div>

        <div className="airplane">
          <div className="head"></div>
          <div className="body">
            <div className="window"></div>
            <div className="window"></div>
            <div className="window"></div>
          </div>
          <div className="lwing"></div>
          <div className="rwing"></div>
          <div className="tale"></div>
        </div>

        <div className="airplane2">
          <div className="head"></div>
          <div className="body">
            <div className="window"></div>
            <div className="window"></div>
            <div className="window"></div>
          </div>
          <div className="lwing"></div>
          <div className="rwing"></div>
          <div className="tale"></div>
        </div>

        <div className="airplane3">
          <div className="head"></div>
          <div className="body">
            <div className="window"></div>
            <div className="window"></div>
            <div className="window"></div>
          </div>
          <div className="lwing"></div>
          <div className="rwing"></div>
          <div className="tale"></div>
        </div>

        <div className="ground">
          <div className="tree">
            <div className="leaves"></div>
          </div>
          <div className="tree">
            <div className="leaves"></div>
          </div>
          <div className="tree">
            <div className="leaves"></div>
          </div>
          <div className="tree">
            <div className="leaves"></div>
          </div>
          <div className="tree">
            <div className="leaves"></div>
          </div>
        </div>
      </div>
    </Wrapper>
  );
};
export default BlueBg;
