import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "../components/layouts/Header";
import Main from "./Main";
import MyPage from "./MyPage";
import Login from "./Login";
import Join from "./Join";
import Ticketing from "./Ticketing";
import Paycomplete from "./Paycomplete";
import NotFound from "../errors/NotFound";
import Footer from "../components/layouts/Footer";
import styled from "styled-components";
import Search from "./Search";
import { useAuth } from "../hooks/useAuth";

const BodyWrap = styled.div`
  height: auto;
  min-height: 100%;
  position: relative;
  padding-bottom: 250px;
`;

const AppRouter = () => {
  const { isAuthenticated } = useAuth();

  return (
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <Header />
      <BodyWrap>
        <Routes>
          <Route path="/" element={<Main />} />
          {!isAuthenticated && <Route path="/login" element={<Login />} />}
          <Route path="/join" element={<Join />} />
          <Route path="/search/*" element={<Search />} />
          <Route path="/payment" element={<Ticketing />} />
          <Route path="/paycomplete" element={<Paycomplete />} />
          {isAuthenticated && <Route path="/mypage/*" element={<MyPage />} />}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BodyWrap>
      <Footer />
    </BrowserRouter>
  );
};

export default AppRouter;
