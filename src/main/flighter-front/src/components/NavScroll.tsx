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
import { textShaking } from "./styles/AnimationStyles";

const StyledWrap = styled.div`
  .navbar {
    background-color: var(--color-r-m);
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
  }

  .navbar-nav .nav-link:hover,
  .navbar-nav .nav-link.active:hover,
  #navbarScrollingDropdown:hover {
    animation: 1s infinite ${textShaking};
  }

  .dropdown .dropdown-menu {
    display: block;
    opacity: 0;
    -webkit-transition: all 200ms ease-in;
    -moz-transition: all 200ms ease-in;
    -ms-transition: all 200ms ease-in;
    -o-transition: all 200ms ease-in;
    transition: all 200ms ease-in;
    background-color: var(--color-r-m);
    border: 0.25px solid white;
  }

  .dropdown:hover .dropdown-menu {
    display: block;
    opacity: 1;
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
    color: var(--color-r-m);
    border: none;
    background-color: white;
    &:hover {
      background-color: white;
    }
    svg {
      color: var(--color-r-m);
      &:hover {
        transition: 1s transform;
        transform: scale(1.1);
      }
    }
  }
`;

function NavScroll() {
  return (
    <StyledWrap>
      <Navbar expand="lg">
        <Container fluid>
          <FontAwesomeIcon icon={faPaperPlane} size="2x" />
          <Navbar.Brand href="#">Flighter</Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav className="me-auto my-2 my-lg-0" style={{ maxHeight: "100px" }} navbarScroll>
              <Nav.Link href="#action1">Home</Nav.Link>
              <Nav.Link href="#action2">Link</Nav.Link>
              <NavDropdown title="Link" id="navbarScrollingDropdown">
                <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
                <NavDropdown.Item href="#action4">Another action</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action5">Something else here</NavDropdown.Item>
              </NavDropdown>
            </Nav>
            <Form className="d-flex">
              <Form.Control type="search" placeholder="Search" aria-label="Search" />
              <Button variant="outline-light">
                <FontAwesomeIcon icon={faMagnifyingGlass} size="2x" />
              </Button>
            </Form>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </StyledWrap>
  );
}

export default NavScroll;
