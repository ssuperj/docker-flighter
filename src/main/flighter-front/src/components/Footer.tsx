import CopyRIght from "./FooterCopyRight";
import FooterSlider from "./FooterSlider";
import styled from "styled-components";

const FooterWrap = styled.div`
  height: 200px;
  position: relative;
  transform: translateY(-100%);
`;

function Footer(props: any) {
  return (
    <FooterWrap>
      <FooterSlider></FooterSlider>
      <CopyRIght></CopyRIght>
    </FooterWrap>
  );
}

export default Footer;
