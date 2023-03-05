import { faPaperPlane } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import axios from "axios";
import { FormEvent, useEffect, useRef } from "react";
import { Link, useNavigate } from "react-router-dom";
import styled from "styled-components";
import GithubLoginButton from "../components/login/GithubLoginButton";
import GoogleLoginButton from "../components/login/GoogleLoginButton";
import Weather from "../components/utils/Weather";
import { useAuth } from "../hooks/useAuth";
import { saveToken } from "../redux/actions";
import store from "../redux/store";

const StyleWrap = styled.div`
  padding-top: 200px;
  .container {
    display: flex;
    text-align: center;
    flex-direction: column;
    border: 1px solid var(--color-l-g);
    background: linear-gradient(var(--color-r-m), var(--color-d-m));
    opacity: 0.7;
    border-radius: 50px;
    width: 400px;
    height: 500px;
    position: relative;

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
      position: absolute;
      bottom: 10px;
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

  @media (max-width: 849px) {
    .ad {
      display: none;
    }
  }

  .ad {
    position: absolute;
    right: 3%;
    bottom: 38%;
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

  @media (max-width: 425px) {
    .container {
      width: 330px;
      height: 450px;

      h1 {
        margin-bottom: 55px;
      }

      input {
        left: 40px;
      }

      .ico-id {
        left: 38px;
        bottom: 1px;
      }

      .ico-pwd {
        top: 56px;
        left: 212px;
      }

      .btn-lg {
        left: 40px;
      }

      .link {
        margin-left: 38px;
        bottom: 0px;
      }
    }

    .other-container {
      width: 330px;
    }
  }
`;

function Login() {
  const emailRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);
  const navigate = useNavigate();
  const { isAuthenticated } = useAuth();

  const handleLoginFormSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const emailValue = emailRef.current?.value;
    const passwordValue = passwordRef.current?.value;

    authenticateToServer(emailValue, passwordValue);
  };

  useEffect(() => {
    isAuthenticated && navigate("/");
  }, [navigate, isAuthenticated]);

  const authenticateToServer = (emailValue?: string, passwordValue?: string) => {
    axios({
      url: "/api/login",
      method: "post",
      data: {
        email: emailValue,
        password: passwordValue,
      },
    })
      .then((response) => response.data)
      .then((data) => {
        const token = data;
        store.dispatch(saveToken(token));
        navigate(-1);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <StyleWrap>
      <Weather />
      <div className="container">
        <h1>
          <FontAwesomeIcon icon={faPaperPlane} size="2x" />
          &nbsp; Flighter &nbsp;
        </h1>
        <form className="login-form" action="" onSubmit={handleLoginFormSubmit}>
          <div className="input-box">
            <label htmlFor="">
              <img className="ico-id" src={`${process.env.PUBLIC_URL}/images/ic-user-48.png`} alt="" />
            </label>
            <input ref={emailRef} className="input-id" type="text" placeholder="Email" id="input-email" />
            <br />
          </div>
          <div className="input-box">
            <input ref={passwordRef} className="input-pwd" type="password" placeholder="Password" id="input-pwd" />
            <label htmlFor="">
              <img className="ico-pwd" src={`${process.env.PUBLIC_URL}/images/ic-lock-48.png`} alt="" />
            </label>
            <br />
          </div>
          <div>
            <button className="btn-lg" type="submit">
              LOGIN
            </button>
          </div>
          <div className="link">
            <Link to="/join" className="link-c">
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

      <div className="other-container">
        <div className="line">OR</div>
        <div className="social d-flex flex-wrap justify-content-center">
          <GoogleLoginButton />
          <div className="btn-social m-2"></div>
          <GithubLoginButton />
        </div>
      </div>
    </StyleWrap>
  );
}

export default Login;
