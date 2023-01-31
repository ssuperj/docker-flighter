import { css } from "styled-components";
import { textShaking } from "./AnimationStyles";

const bootstrapStyles = css`
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
`;
export default bootstrapStyles;
