import styled from "styled-components";
import MainTitle from "../components/MainTitle";
import SearchBox from "../components/SearchBox";

const MainWrap = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  main {
    display: flex;
    align-items: center;
    justify-content: center;
    background: url("flighter/images/bg-beach-main.jpg") no-repeat center center;
    background-size: cover;
    width: 70%;
    height: 800px;
    @media screen and (max-width: 992px) {
      width: 100%;
    }
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
