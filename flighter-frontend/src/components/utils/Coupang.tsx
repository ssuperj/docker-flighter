import { Link } from "react-router-dom";
import styled from "styled-components";

const StyledWrap = styled.div`
  .ad {
    position: absolute;
    right: 3%;
  }
  @media (max-width: 849px) {
    .ad {
    display: none;
    }
  }
`;

function Coupang() {
  return (
    <StyledWrap>
      <div className="ad">
        <Link
          to="https://link.coupang.com/a/N9Q3Y"
          target="_blank"
          referrerPolicy="unsafe-url"
        >
          <img
            src="https://ads-partners.coupang.com/banners/636975?subId=&traceId=V0-301-879dd1202e5c73b2-I636975&w=160&h=600"
            alt=""
          />
        </Link>
      </div>
    </ StyledWrap>
  );
}

export default Coupang;
