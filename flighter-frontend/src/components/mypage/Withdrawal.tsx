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
        <h1 className="title">????????????</h1>
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
              <p className="p-b">??????????????? ?????????????????????.</p>
              <p className="p">
                Flighter??? ?????????????????? ?????????????????? ???????????????. <br />
                ?????? ??? ???????????? Flighter??? ???????????????.
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
              <p className="p-b">???????????? ??????????????????.</p>
              <p className="p">
                ????????? ???????????? ???????????? ??????????????? ???????????????, <br />
                ??????????????? ???????????????. <br />
                ?????? ????????? ?????????????????? ??????
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
                    ????????????
                  </Button>
                )}
                title="????????????"
                content="????????? ?????????????????????????"
                btnContent="????????????"
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
