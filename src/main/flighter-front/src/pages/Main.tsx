import styled from "styled-components";
import MainTitle from "../components/MainTitle";
import SearchBox from "../components/SearchBox";

const MainWrap = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  main {
    background: url("flighter-front/images/bg-beach-main.jpg") no-repeat center center;
    background-size: cover;
    width: 100%;
    height: 550px;
  }
`;

const Main = (props: any) => {
  return (
    <MainWrap>
      <MainTitle />
      <main>
        <SearchBox></SearchBox>
      </main>
    </MainWrap>
  );
};

export default Main;
