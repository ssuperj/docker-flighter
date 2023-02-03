import { Link } from "react-router-dom";
import styled from "styled-components";

const MainWrap = styled.div`
  main {
    background-color: red;
    width: 2000px;
    height: 2000px;
  }
`;

const Main = (props: any) => {
  return (
    <MainWrap>
      <main></main>
      <h3>안녕하세요. 메인페이지 입니다.</h3>
      <ul>
        <Link to="/product/1">
          <li>1번상품</li>
        </Link>
        <Link to="/product/2">
          <li>2번상품</li>
        </Link>
      </ul>
    </MainWrap>
  );
};

export default Main;
