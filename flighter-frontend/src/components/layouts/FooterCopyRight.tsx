import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faGoogle } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import ModalParam from "../utils/ModalParam";

const FooterCopyWrap = styled.div`
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 12px 0px;
  font-size: 16px;
  .svg-inline--fa {
    transition: 0.5s all;
    margin-left: 10px;
  }
  a:hover {
    color: var(--color-l-m);
  }
`;

function CopyRIght() {
  return (
    <FooterCopyWrap>
      <p>&#169; 2023 Copyright Flighter</p>
      <Link to="https://github.com/ssuperj/docker-flighter">
        <FontAwesomeIcon icon={faGithub} size="2x" />
      </Link>
      <Link to="https://www.google.com/search?q=flighter">
        <FontAwesomeIcon icon={faGoogle} size="2x" />
      </Link>
      <ModalParam
        render={() => <FontAwesomeIcon icon={faEnvelope} size="2x" />}
        title="Official Email"
        content="Hello, send email here! poqwer95@naver.com"
        btnContent="Copy"
      ></ModalParam>
    </FooterCopyWrap>
  );
}

export default CopyRIght;
