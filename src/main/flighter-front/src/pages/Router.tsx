import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "../components/Header";
import Main from "./Main";
import Product from "./Product";
import NotFound from "../errors/NotFound";
import Footer from "../components/Footer";
import styled from "styled-components";

const BodyWrap = styled.div`
  height: auto;
  min-height: 100%;
  position: relative;
  padding-bottom: 300px;
  padding-bottom: 60px;
`;

const AppRouter = () => {
  return (
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <Header />
      <BodyWrap>
        <Routes>
          <Route path="/" element={<Main />}></Route>
          <Route path="/product/*" element={<Product />}></Route>
          {/* 상단에 위치하는 라우트들의 규칙을 모두 확인, 일치하는 라우트가 없는경우 처리 */}
          <Route path="*" element={<NotFound />}></Route>
        </Routes>
      </BodyWrap>
      <Footer />
    </BrowserRouter>
  );
};

export default AppRouter;
