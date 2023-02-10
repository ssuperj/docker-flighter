import styled from "styled-components";
import MainTitle from "../components/MainTitle";
import SearchBox from "../components/SearchBox";

const bg = ["bg-architecture-normal.jpg", "bg-beach-main.jpg", "bg-japan-normal.jpg"];
const random = Math.floor(Math.random() * bg.length);

const MainWrap = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  main {
    display: flex;
    align-items: center;
    justify-content: center;
    background: url("flighter/images/${random ? bg[random] : "bg-architecture-normal.jpg"}") no-repeat center center;
    background-size: cover;
    width: 100%;
    height: 800px;
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
