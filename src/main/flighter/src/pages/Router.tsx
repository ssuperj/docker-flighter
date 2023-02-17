import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "../components/Header";
import Main from "./Main";
import MyPage from "./MyPage";
import Login from "./Login";
import Join from "./Join";
import Payment from "./Payment";
import Paycomplete from "./Paycomplete";
import NotFound from "../errors/NotFound";
import Footer from "../components/Footer";
import styled from "styled-components";
import Search from "./Search";
import Hello from "../components/login/Login";

const BodyWrap = styled.div`
  height: auto;
  min-height: 100%;
  position: relative;
  padding-bottom: 250px;
`;

const AppRouter = () => {
  return (
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <Header />
      <BodyWrap>
        <Routes>
          <Route path="/" element={<Main />}></Route>
          <Route path="/mypage/*" element={<MyPage />}></Route>
          <Route path="/login" element={<Login />}></Route>
          <Route path="/join" element={<Join />}></Route>
          <Route path="/search/*" element={<Search />}></Route>
          <Route path="/payment" element={<Payment />}></Route>
          <Route path="/paycomplete" element={<Paycomplete />}></Route>
          <Route path="/hello" element={<Hello />}></Route>
          <Route path="*" element={<NotFound />}></Route>
        </Routes>
      </BodyWrap>
      <Footer />
    </BrowserRouter>
  );
};

export default AppRouter;
