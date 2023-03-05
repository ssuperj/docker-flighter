import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";
import fontStyles from "./FontStyles";
import variableStyles from "./VariableStyles";

const globalStyles = createGlobalStyle`
  ${reset};
  * {
    box-sizing: border-box;
  }
  html, body, #root {
    height: 100%
  }
  a {
    text-decoration: none;
    color: inherit;
    &:hover {
      color: inherit;
    }
  }
  body {
    font-family: LINESeedKR_Rg, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell,
      "Open Sans", "Helvetica Neue", sans-serif;
    font-size: 14px;
  }
  ${fontStyles};
  ${variableStyles};

`;
export default globalStyles;
