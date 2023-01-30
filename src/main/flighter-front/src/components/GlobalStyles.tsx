import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";
import LINESeedKR_Rg from "../fonts/LINESeedKR-Rg.woff2";
import LINESeedKR_Bd from "../fonts/LINESeedKR-Bd.woff2";
import LINESeedKR_Th from "../fonts/LINESeedKR-Th.woff2";

const globalStyles = createGlobalStyle`
    ${reset};
    @font-face {
    font-family: "LINESeedKR_Rg";
    src: local("LINESeedKR_Rg"), local("LINESeedKR_Rg");
    font-style: normal;
    src: url(${LINESeedKR_Rg}) format("truetype");
    }
    @font-face {
    font-family: "LINESeedKR_Bd";
    src: local("LINESeedKR_Bd"), local("LINESeedKR_Bd");
    font-style: normal;
    src: url(${LINESeedKR_Bd}) format("truetype");
    }
    @font-face {
    font-family: "LINESeedKR_Th";
    src: local("LINESeedKR_Th"), local("LINESeedKR_Th");
    font-style: normal;
    src: url(${LINESeedKR_Th}) format("truetype");
    }
    :root {
        //font
        --font-rg: LINESeedKR_Rg;
        --font-bd: LINESeedKR_Bd;
        --font-th: LINESeedKR_Th;

        //color
        --color-d-m: #E31C5F;
        --color-r-m: #FF385C;
        --color-l-m: #FFB6C1;
        --color-d-g: #717171;
        --color-r-g: #B0B0B0;
        --color-l-g: #EBEBEB;
    }
    * {
    box-sizing: border-box;
    }
    a {
    text-decoration: none;
    color: inherit;
    }
    body {
    font-family: LINESeedKR_Rg, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans",
        "Helvetica Neue", sans-serif;
    font-size: 14px;
    }
    .form-control {
    border: none;
    caret-color: #FF385C;
    }
    .form-control:focus {
    box-shadow: none;
    outline: #FFB6C1;
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
    .navbar-nav .nav-link.active,.navbar-nav .nav-link, #navbarScrollingDropdown {
        color: white;
    }
 `;
export default globalStyles;
