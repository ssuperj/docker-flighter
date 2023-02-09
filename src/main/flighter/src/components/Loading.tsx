import styled from "styled-components";

const Wrapper = styled.div`
  .box {
    margin-top: 100px;
    width: 100%;
    text-align: center;
    height: 1000px;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .loader {
    position: relative;
    width: 400px;
    height: 40px;
    background-color: rgba(255, 255, 255, 0.2);
  }

  .loader:before {
    content: "";
    position: absolute;
    background-color: var(--color-l-m);
    top: 0px;
    left: 0px;
    height: 40px;
    width: 0px;
    z-index: 0;
    opacity: 1;
    -webkit-transform-origin: 100% 0%;
    transform-origin: 100% 0%;
    animation: loader 1s ease-in-out infinite;
  }

  .loader:after {
    content: "LOADING ...";
    display: flex;
    align-items: center;
    justify-content: center;
    color: #fff;
    font-family: Lato, "Helvetica Neue";
    font-weight: 200;
    font-size: 16px;
    position: absolute;
    width: 100%;
    height: 40px;
    left: 0;
  }

  @-webkit-keyframes loader {
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
  }

  @keyframes loader {
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
  }
`;

const Loading = (props: any) => {
  return (
    <Wrapper>
      <div className="box">
        <div className="loader"></div>
      </div>
    </Wrapper>
  );
};

export default Loading;
