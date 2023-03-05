import { useState } from "react";
import styled from "styled-components";
import Nav from "react-bootstrap/Nav";
import Passport from "./Passport";
import ReserveInfo from "./ReserveInfo";
import UserInfo from "./UserInfo";
import Withdrawal from "./Withdrawal";
import Coupang from "../utils/Coupang";

const StyledWrap = styled.div`
  display: flex;
  justify-content: center;

  .Nav {
    margin-top: 80px;
    margin-bottom: 30px;
    width: 80%;
  }

  .navlink {
    font-size: 17px;
    color: var(--color-r-m);
  }

  .navlink:hover {
    background-color: var(--color-r-m) !important;
    opacity: 0.8 !important;
    color: var(--color-l-g) !important;
  }

  .ad {
    top: 18%;
  }

  hr {
    margin-top: 0 auto;
    width: 80%;
  }

  @media (max-width: 450px) {
    .navlink {
      font-size: 12px;
    }
  }
`;

const MyPageWrap = styled.div`
  display: flex;
  justify-content: center;
`;

function MyPageNav() {
  const [nav, setNav] = useState(1);

  const nav1 = () => setNav(1);
  const nav2 = () => setNav(2);
  const nav3 = () => setNav(3);
  const nav4 = () => setNav(4);

  return (
    <div>
      <StyledWrap>
        <Nav fill variant="tabs" defaultActiveKey="link-1" className="Nav">
          <Nav.Item className="navItem">
            <Nav.Link
              onClick={nav1}
              className="navlink"
              eventKey="link-1"
              style={
                nav === 1
                  ? { backgroundColor: "var(--color-r-m)", opacity: "0.8", color: "var(--color-l-g)" }
                  : { fontSize: "17px", color: "var(--color-r-m)", border: "1px solid transparent" }
              }
            >
              내 여권
            </Nav.Link>
          </Nav.Item>
          <Nav.Item className="navItem">
            <Nav.Link
              onClick={nav2}
              className="navlink"
              eventKey="link-2"
              style={
                nav === 2
                  ? { backgroundColor: "var(--color-r-m)", opacity: "0.8", color: "var(--color-l-g)" }
                  : { fontSize: "17px", color: "var(--color-r-m)", border: "1px solid transparent" }
              }
            >
              내 예약
            </Nav.Link>
          </Nav.Item>
          <Nav.Item className="navItem">
            <Nav.Link
              onClick={nav3}
              className="navlink"
              eventKey="link-3"
              style={
                nav === 3
                  ? { backgroundColor: "var(--color-r-m)", opacity: "0.8", color: "var(--color-l-g)" }
                  : { fontSize: "17px", color: "var(--color-r-m)", border: "1px solid transparent" }
              }
            >
              회원수정
            </Nav.Link>
          </Nav.Item>
          <Nav.Item className="navItem">
            <Nav.Link
              onClick={nav4}
              className="navlink"
              eventKey="link-4"
              style={
                nav === 4
                  ? { backgroundColor: "var(--color-r-m)", opacity: "0.8", color: "var(--color-l-g)" }
                  : { fontSize: "17px", color: "var(--color-r-m)", border: "1px solid transparent" }
              }
            >
              회원탈퇴
            </Nav.Link>
          </Nav.Item>
        </Nav>
      </StyledWrap>
      <MyPageWrap>
        {nav === 1 && <Passport />}
        {nav === 2 && <ReserveInfo />}
        {nav === 3 && <UserInfo />}
        {nav === 4 && <Withdrawal />}
        <StyledWrap>
          <Coupang />
        </StyledWrap>
      </MyPageWrap>
      <StyledWrap>
        <hr />
      </StyledWrap>
    </div>
  );
}

export default MyPageNav;
