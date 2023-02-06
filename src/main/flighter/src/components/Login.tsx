import styled from "styled-components";
import { GithubLoginButton } from "react-social-login-buttons";
import { GoogleLoginButton } from "react-social-login-buttons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPaperPlane } from "@fortawesome/free-regular-svg-icons";
import { Link } from "react-router-dom";

const StyleWrap = styled.div`
  .container {
    margin-top: 100px;
    display: flex;
    text-align: center;
    flex-direction: column;
    border: 1px solid var(--color-l-g);
    background: linear-gradient(var(--color-r-m), var(--color-d-m));
    opacity: 0.7;
    border-radius: 50px;
    width: 400px;
    height: 500px;

    svg {
      width: 32px;
      height: 32px;
    }

    h1 {
      font-family: var(--font-bd);
      font-size: 28px;
      color: white;
      margin-top: 80px;
      margin-bottom: 70px;
    }

    div {
      position: absolute;
      height: 50px;
      line-height: 1px;
    }

    .link {
      width: 235px;
      color: white;
      top: 400px;
      margin-left: 73px;
    }

    .link-c:first-child {
      margin-left: 10px;
    }

    .link-c {
      margin-right: 10px;
    }

    .link-c:hover {
      color: var(--color-l-m);
      transition: 0.2s;
    }

    .ico-id,
    .ico-pwd {
      position: absolute;
      border: 1px solid var(--color-l-g);
      border-radius: 30px;
      padding: 5px;
      background-color: white;
    }

    .ico-id {
      left: 73px;
      bottom: 1px;
    }

    .ico-pwd {
      top: 56px;
      left: 247px;
    }

    input {
      position: absolute;
      background-color: var(--color-l-m);
      width: 230px;
      height: 50px;
      border: 1px solid var(--color-l-m);
      border-radius: 45px;
      left: 75px;

      padding-left: 15px;
      z-index: -9999;
    }

    .input-id {
      bottom: 5px;
      padding-left: 65px;
    }
    .input-pwd {
      margin-top: 60px;
    }

    input:focus {
      outline: 3px solid var(--color-l-m);
      transition: 0.2s;
    }

    .btn-lg {
      position: absolute;
      width: 230px;
      height: 50px;
      background-color: white;
      border: none;
      border-radius: 45px;
      top: 150px;
      left: 75px;
      font-family: var(--font-bd);
      font-size: 20px;
      color: var(--color-d-g);
    }

    .btn-lg:hover,
    .btn-lg:focus {
      color: var(--color-r-m);
      outline: 3px solid white;
      transition: 0.2s;
      font-size: 23px;
    }
  }

  .ad {
    /* float: right; */
    position: absolute;
    left: 88%;
    bottom: 38%;

    .ad-link {
      /* position: absolute;; */
      img {
        /* position: absolute; */
      }
    }
  }

  .other-container {
    display: flex;
    flex-direction: column;
    margin-top: 10px;
    margin: auto;
    text-align: center;
    width: 400px;

    .line {
      margin-top: 30px;
      margin-bottom: 30px;
      display: flex;
      flex-basis: 100%;
      align-items: center;
      width: auto;
      color: rgba(0, 0, 0, 0.35);
      font-size: 18px;
    }
    .line::before {
      content: "";
      flex-grow: 1;
      margin: 0px 16px;
      background: rgba(0, 0, 0, 0.35);
      height: 1px;
      font-size: 0px;
      line-height: 0px;
    }
    .line::after {
      content: "";
      flex-grow: 1;
      margin: 0px 16px;
      background: rgba(0, 0, 0, 0.35);
      height: 1px;
      font-size: 0px;
      line-height: 0px;
    }

    .social {
      align-items: center;
      margin: auto;

      .btn-social {
        width: 235px;
        margin-top: 10px;
      }
    }
  }
`;

function Login() {
  return (
    <StyleWrap>
      <div className="container">
        <h1>
          <FontAwesomeIcon icon={faPaperPlane} size="2x" />
          &nbsp; Flighter &nbsp;
        </h1>
        <form action="">
          <div className="input-box">
            <label htmlFor="">
              <img
                className="ico-id"
                src={`${process.env.PUBLIC_URL}/images/ic-user-48.png`}
                alt=""
              />
            </label>
            <input className="input-id" type="text" placeholder="Username" />
            <br />
          </div>
          <div className="input-box">
            <input
              className="input-pwd"
              type="password"
              placeholder="Password"
            />
            <label htmlFor="">
              <img
                className="ico-pwd"
                src={`${process.env.PUBLIC_URL}/images/ic-lock-48.png`}
                alt=""
              />
            </label>
            <br />
          </div>
          <div>
            <button className="btn-lg" type="submit">
              LOGIN
            </button>
          </div>
          <div className="link">
            <Link to="" className="link-c">
              회원가입
            </Link>
            <Link to="" className="link-c">
              아이디 찾기
            </Link>
            <Link to="" className="link-c">
              비밀번호 찾기
            </Link>
          </div>
        </form>
      </div>

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

      <div className="other-container">
        <div className="line">OR</div>
        <div className="social">
          <div className="btn-social">
            <GithubLoginButton onClick={() => alert("")} />
            <GoogleLoginButton onClick={() => alert("")} />
          </div>
        </div>
      </div>
    </StyleWrap>
  );
}

export default Login;
