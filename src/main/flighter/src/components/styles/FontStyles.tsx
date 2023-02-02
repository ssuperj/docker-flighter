import { css } from "styled-components";
import LINESeedKR_Rg from "../../fonts/LINESeedKR-Rg.woff2";
import LINESeedKR_Bd from "../../fonts/LINESeedKR-Bd.woff2";
import LINESeedKR_Th from "../../fonts/LINESeedKR-Th.woff2";
import AnandaBlack from "../../fonts/AnandaBlack.ttf";

const fontStyles = css`
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
  @font-face {
    font-family: "AnandaBlack";
    src: local("AnandaBlack"), local("AnandaBlack");
    font-style: normal;
    src: url(${AnandaBlack}) format("truetype");
  }
`;
export default fontStyles;
