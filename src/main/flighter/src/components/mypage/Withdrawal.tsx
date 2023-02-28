import styled from "styled-components";
import Button from "react-bootstrap/Button";
import Weather from "../utils/Weather";
import ModalParam from "../utils/ModalParam";
import { useRef, useState } from "react";
import instance from "../../utils/instance";
import { saveToken } from "../../redux/actions";
import store from "../../redux/store";
import { useNavigate } from "react-router-dom";

const StyleWrap = styled.div`
  .weather_list {
    margin-top: 60px;
  }

  .container {
    justify-content: center;
    text-align: center;
    width: auto;
    height: 700px;

    .title {
      margin-top: 60px;
      font-size: 18px;
      color: var(--color-r-m);
      font-family: var(--font-bd);
      opacity: 0.8;
      margin-bottom: 30px;
      font-size: 30px;
    }

    .content {
      margin-top: 50px;
      margin-bottom: 50px;
      font-size: 18px;

      .ico-stewardess {
        width: auto;
        margin-bottom: 25px;
      }

      .p-b {
        font-family: var(--font-bd);
        margin-bottom: 10px;
      }

      .p {
        line-height: 23px;
      }

      .input:focus {
        caret-color: var(--color-r-m);
        outline-color: var(--color-r-m);
      }

      input {
        background-color: var(--color-l-g);
        border: none;
        width: 170px;
        margin-top: 20px;
        margin-left: 10px;
        margin-right: 10px;
        border-radius: 10px;
        padding-left: 10px;
        height: 35px;
        outline: none;
      }

      input:hover,
      input:focus {
        caret-color: var(--color-d-m);
      }
    }
  }
`;

function Withdrawal() {
  const [isNotValidate, setIsNotValidate] = useState(true);
  const [isWithdraw, setIsWithdraw] = useState(false);
  const passwordRef = useRef<HTMLInputElement>(null);
  const navigate = useNavigate();

  const handleValidatePassword = () => {
    instance
      .post("/api/user/password", {
        password: passwordRef.current?.value,
      })
      .then((res) => {
        if (res.status === 200) {
          setIsNotValidate(false);
        }
      })
      .catch((err) => {
        setIsNotValidate(true);
      });
  };

  const handleWithdraw = () => {
    instance
      .delete("/api/user")
      .then((res) => {
        if (res && res.status === 200) {
          setIsWithdraw(true);
          setTimeout(() => {
            navigate("/");
            store.dispatch(saveToken("{}"));
          }, 2000);
        } else {
          console.log(res.status);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <StyleWrap>
      <Weather />
      <div className="container">
        <h1 className="title">회원탈퇴</h1>
        <form
          className="content"
          onSubmit={(event) => {
            event.preventDefault();
          }}
        >
          {isWithdraw ? (
            <>
              <img
                className="ico-stewardess"
                src={`${process.env.PUBLIC_URL}/images/ic-stewardess1-normal.png`}
                alt=""
              />
              <p className="p-b">회원탈퇴가 완료되었습니다.</p>
              <p className="p">
                Flighter를 이용해주시고 사랑해주셔서 감사합니다. <br />
                더욱 더 노력하는 Flighter가 되겠습니다.
              </p>
              <br />
            </>
          ) : (
            <>
              <img
                className="ico-stewardess"
                src={`${process.env.PUBLIC_URL}/images/ic-stewardess3-normal.png`}
                alt=""
              />
              <p className="p-b">회원탈퇴 페이지입니다.</p>
              <p className="p">
                탈퇴를 원하시면 회원님의 비밀번호를 입력하시고, <br />
                탈퇴하기를 눌러주세요. <br />
                소셜 유저는 홈페이지에서 탈퇴
              </p>
              <br />
              <input className="input" type="password" id="password" ref={passwordRef} />
              <ModalParam
                render={() => (
                  <Button
                    style={{
                      backgroundColor: "var(--color-r-m)",
                      border: "none",
                      opacity: "0.8",
                      margin: "0 0 4px 5px",
                    }}
                    variant="secondary"
                    onClick={handleValidatePassword}
                  >
                    탈퇴하기
                  </Button>
                )}
                title="회원탈퇴"
                content="정말로 탈퇴하시겠습니까?"
                btnContent="탈퇴하기"
                isWithdraw={true}
                handleWithdraw={handleWithdraw}
                isNotValidate={isNotValidate}
                setIsNotValidate={setIsNotValidate}
              />
            </>
          )}
        </form>
      </div>
    </StyleWrap>
  );
}

export default Withdrawal;
