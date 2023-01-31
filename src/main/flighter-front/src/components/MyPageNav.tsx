import { useState } from "react";
import styled from "styled-components";
import Nav from 'react-bootstrap/Nav';

const StyledWrap = styled.div`
  margin: 50px;
  display: flex;
  justify-content: center;

  .Nav {
    width: 80%;
  }
  
  .navlink {
    font-size: 17px;
    color: var(--color-r-m);
  }
  
  .navlink:hover, .navlink.active {
    background-color: var(--color-r-m);
    color: var(--color-l-g);
  }
`;
function MyPageNav() {
  const [nav, setNav] = useState(1);
  const nav1 = () => setNav(1);
  const nav2 = () => setNav(2);
  const nav3 = () => setNav(3);
  const nav4 = () => setNav(4);
  console.log(nav);
  return (
    <StyledWrap>
      <Nav fill variant="tabs" defaultActiveKey="link-1" className="Nav">
        <Nav.Item className="navItem">
          <Nav.Link href="#userinfo" onClick={nav1} className="navlink" eventKey="link-1">내 정보</Nav.Link>
        </Nav.Item>
        <Nav.Item className="navItem">
          <Nav.Link href="#reserveinfo" onClick={nav2} className="navlink" eventKey="link-2">내 예약</Nav.Link>
        </Nav.Item>
        <Nav.Item className="navItem">
          <Nav.Link href="#수정" onClick={nav3} className="navlink" eventKey="link-3">회원수정</Nav.Link>
        </Nav.Item>
        <Nav.Item className="navItem">
          <Nav.Link href="#탈퇴" onClick={nav4} className="navlink" eventKey="link-4">회원탈퇴</Nav.Link>
        </Nav.Item>
      </Nav>
    </StyledWrap>
  );
}

export default MyPageNav;