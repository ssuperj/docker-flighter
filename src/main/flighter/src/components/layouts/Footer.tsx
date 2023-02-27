import FooterCopyRight from "./FooterCopyRight";
import FooterSlider from "./FooterSlider";
import styled from "styled-components";
import { PC } from "../utils/MediaQueryModule";

const FooterWrap = styled.div`
  position: relative;
  transform: translateY(-100%);
  height: 250px;
  background: linear-gradient(140deg, var(--color-r-m), lightpink);
  margin-top: 100px;
  @media screen and (max-width: 992px) {
    height: 100px;
    margin-top: 0px;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .slick-slider {
    padding: 20px 0;
  }
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
