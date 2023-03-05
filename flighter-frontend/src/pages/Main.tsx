import styled from "styled-components";
import MainTitle from "../components/utils/MainTitle";
import SearchBox from "../components/search/SearchBox";
import beach from "../images/bg-beach-main.jpg";
import japan from "../images/bg-japan-normal.jpg";
import santorini from "../images/bg-santorini-normal.jpg";

const bg = [beach, japan, santorini];
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
    background: url(${bg[random]}) no-repeat center center;
    background-size: cover;
    width: 100%;
    height: 800px;
  }
`;
const Main = () => {
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
