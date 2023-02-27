import styled from "styled-components";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPaperPlane } from "@fortawesome/free-regular-svg-icons";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { textShaking } from "../styles/AnimationStyles";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { useAuth } from "../../hooks/useAuth";
import store from "../../redux/store";
import { saveToken } from "../../redux/actions";

const StyledWrap = styled.div`
  .navbar {
    background: linear-gradient(170deg, var(--color-r-m), LightPink);
  }

  .fa-paper-plane {
    color: white;
    margin-right: 20px;
  }

  .navbar-brand,
  .navbar-nav {
    color: var(--color-l-g);
  }

  .navbar-toggler {
    border: none;
    &:focus {
      border: none;
      outline: none;
    }
  }

  .navbar-toggler:focus {
    border: none;
    outline: none;
    box-shadow: none;
  }

  .navbar-nav .nav-link,
  .navbar-nav .nav-link.active,
  #navbarScrollingDropdown {
    color: white;
    width: 95%;
  }

  .navbar-nav .nav-link:hover,
  .navbar-nav .nav-link.active:hover,
  #navbarScrollingDropdown:hover {
    animation: 1s infinite ${textShaking};
  }

  .show > .dropdown-menu {
    max-height: 900px;
    visibility: visible;
  }

  .dropdown-menu {
    display: block;
    max-height: 0;
    visibility: hidden;
    transition: all 0.25s;
    overflow: hidden;
    border: 0.25px solid white;
    background: linear-gradient(50deg, var(--color-r-m), LightPink);
  }

  .dropdown-item {
    color: white;
  }

  .dropdown-item:hover {
    opacity: 0.75;
    color: var(--color-r-m);
    background-color: white;
    transition: 0.5s;
  }

  .dropdown-item:active {
    opacity: 1;
    transition: 0.25s;
  }

  .dropdown-item:focus {
    color: var(--color-r-m);
    background-color: white;
  }

  .dropdown-divider {
    border-top: 0.25px solid var(--color-l-g);
  }

  .form-control {
    border: none;
    caret-color: #ff385c;
  }

  .form-control:focus {
    box-shadow: none;
    outline: #ffb6c1;
    border-color: var(--color-l-m);
    &::placeholder {
      transition: 0.3s color;
      color: white;
    }
  }

  .btn {
    margin-left: 5px;
    color: lightpink;
    border: none;
    background-color: white;
    &:hover {
      background-color: white;
    }
    svg {
      color: lightpink;
      &:hover {
        transition: 1s transform;
        transform: scale(1.1);
      }
    }
  }
`;

function NavScroll() {
  // hooks
  const [searchData, setSearchData] = useState("");
  const navigate = useNavigate();
  const { isAuthenticated } = useAuth();

  // functions
  const keyDown = (event: any) => {
    if (event.keyCode === 13) {
      event.preventDefault();
    }
    setTimeout(() => {
      setSearchData(event.target.value);
    }, 1);
  };

  const logout = () => {
    store.dispatch(saveToken("{}"));
  };

  const clickNav1 = () => {
    const nav = 1;
    navigate("/mypage", { state: { nav: nav } });
  };
  const clickNav2 = () => {
    const nav = 2;
    navigate("/mypage", { state: { nav: nav } });
  };
  const clickNav3 = () => {
    const nav = 3;
    navigate("/mypage", { state: { nav: nav } });
  };

  // components
  const LoginBox = () => (isAuthenticated ? <div onClick={logout}>Logout</div> : <div>Login</div>);

  return (
    <StyledWrap>
      <Navbar expand="lg">
        <Container fluid>
          <Link to="/">
            <FontAwesomeIcon icon={faPaperPlane} size="2x" />
          </Link>
          <Navbar.Brand>
            <Link to="/">Flighter</Link>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav className="me-auto my-2 my-lg-0" style={{ maxHeight: "100px" }} navbarScroll>
              <Link to="/" className="nav-link">
                Home
              </Link>
              <Link to="/login" className="nav-link">
                <LoginBox />
              </Link>
              {isAuthenticated ? (
                <NavDropdown
                  title="My Page"
                  id="navbarScrollingDropdown"
                  onClick={(event) => {
                    const parent: any = event.currentTarget.parentNode;
                    setTimeout(() => {
                      parent.scrollTop = 65;
                    }, 100);
                  }}
                >
                  <NavDropdown.Item as="span" onClick={clickNav1}>
                    My passport
                  </NavDropdown.Item>
                  <NavDropdown.Item as="span" onClick={clickNav2}>
                    Reserve info
                  </NavDropdown.Item>
                  <NavDropdown.Item as="span" onClick={clickNav3}>
                    User info
                  </NavDropdown.Item>
                </NavDropdown>
              ) : (
                <></>
              )}
            </Nav>
            <Form className="d-flex">
              <Form.Control type="search" placeholder="Search" aria-label="Search" onKeyDown={keyDown} />
              <Button variant="outline-light">
                <Link to={`https://www.google.co.kr/maps/search/${searchData}/?hl=ko`}>
                  <FontAwesomeIcon icon={faMagnifyingGlass} size="2x" />
                </Link>
              </Button>
            </Form>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </StyledWrap>
  );
}

export default NavScroll;
