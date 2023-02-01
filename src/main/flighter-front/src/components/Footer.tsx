import FooterCopyRight from "./FooterCopyRight";
import FooterSlider from "./FooterSlider";
import styled from "styled-components";
import { PC } from "./MediaQuery";

const FooterWrap = styled.div`
  position: relative;
  transform: translateY(-100%);
  background: linear-gradient(140deg, var(--color-r-m), pink);
  padding: 20px 0px;
`;

function Footer() {
  return (
    <FooterWrap>
      <PC>
        <FooterSlider></FooterSlider>
      </PC>
      <FooterCopyRight></FooterCopyRight>
    </FooterWrap>
  );
}

export default Footer;
