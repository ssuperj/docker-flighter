import styled from "styled-components";
import Button from "react-bootstrap/Button";
import { Link, useNavigate } from "react-router-dom";
import Coupang from "../components/utils/Coupang";
import Agreement1 from "../components/join/AgreementRule";
import Agreement2 from "../components/join/AgreementPrivacy";
import Weather from "../components/utils/Weather";
import { ChangeEvent, FormEvent, useCallback, useEffect, useState } from "react";
import MailModal from "../components/join/MailModal";

const StyleWrap = styled.div`
  .weather_list {
    margin-top: 90px;
  }
  .container {
    display: flex;
    flex-direction: column;
    justify-content: center;
    text-align: center;
    align-items: center;
    margin-top: 100px;

    .blue {
      color: red;
    }
    .gray {
      color: gray;
    }

    .title {
      color: var(--color-r-m);
      font-family: var(--font-bd);
      font-size: 36px;
    }

    .title-1 {
      margin-bottom: 20px;
      color: var(--color-r-g);
    }

    .content {
      table {
        margin: auto;

        .error {
          color: red;
        }
        .success {
          color: skyblue;
        }

        th {
          text-align: left;
        }

        td {
          height: 60px;
          display: flex;
          flex-direction: column;

          span {
            text-align: left;
            padding-left: 15px;
            padding-top: 3px;
          }
        }

        input {
          background-color: var(--color-l-g);
          border: none;
          width: 250px;
          margin-left: 10px;
          border-radius: 10px;
          padding-left: 10px;
          height: 40px;
          outline: none;
        }

        .input_small {
          margin-right: 5px;
        }

        .input_birth1 {
          width: 153px;
        }

        .input_birth2 {
          width: 30px;
        }
        .input_mail {
          width: 190px;
        }

        .input_btn {
          width: 55px;
          height: 35px;
          border-radius: 10px;
          background-color: skyblue;
          color: white;
          padding: 7px;
        }

        input:hover,
        input:focus {
          caret-color: var(--color-d-m);
        }
      }
    }

    .btn-cancle {
      background-color: var(--color-r-g);
      border: none;
      margin-left: 10px;
    }

    .form_agreement {
      margin-top: 60px;

      .form_agreement_title {
        margin-bottom: 20px;
        font-size: 20px;
        float: left;
      }

      .form_agreement_item:first-child {
        margin-bottom: 30px;
      }

      .form_agreement_item {
        text-align: left;

        textarea {
          padding: 3px;
          line-height: 25px;
          resize: none;
        }

        input,
        label {
          margin-top: 5px;
          margin-bottom: 20px;
        }
      }

      .form_agreement_all {
        background-color: var(--color-l-g);
        line-height: 60px;
        height: 60px;
        border-radius: 15px;
        margin-bottom: 20px;
      }
    }

    @media (max-width: 780px) {
      textarea {
        width: 500px;
      }
    }

    @media (max-width: 560px) {
      textarea {
        width: 350px;
      }
      .form_agreement_all {
        font-size: 12px;
      }
    }
  }

  @media (max-width: 1180px) {
    .weather_list {
      display: none;
    }
    .ad {
      display: none;
    }
  }
`;

const Join = (props: any) => {
  const [allCheck, setAllCheck] = useState(false);
  const [ageCheck, setAgeCheck] = useState(false);
  const [useCheck, setUseCheck] = useState(false);
  const navigate = useNavigate();

  const allBtnEvent = () => {
    if (allCheck === false) {
      setAllCheck(true);
      setAgeCheck(true);
      setUseCheck(true);
    } else {
      setAllCheck(false);
      setAgeCheck(false);
      setUseCheck(false);
    }
  };

  const ageBtnEvent = () => {
    if (ageCheck === false) {
      setAgeCheck(true);
    } else {
      setAgeCheck(false);
    }
  };

  const useBtnEvent = () => {
    if (useCheck === false) {
      setUseCheck(true);
    } else {
      setUseCheck(false);
    }
  };

  useEffect(() => {
    if (ageCheck === true && useCheck === true) {
      setAllCheck(true);
    } else {
      setAllCheck(false);
    }
  }, [ageCheck, useCheck]);

  // -------------------------------------------------------------------------------------------------- //

  //??????, ?????????, ????????????, ???????????? ??????
  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [passwordConfirm, setPasswordConfirm] = useState<string>("");

  //??????????????? ????????????
  const [nameMessage, setNameMessage] = useState<string>("");
  const [emailMessage, setEmailMessage] = useState<string>("");
  const [passwordMessage, setPasswordMessage] = useState<string>("");
  const [passwordConfirmMessage, setPasswordConfirmMessage] = useState<string>("");

  // ????????? ??????
  const [isName, setIsName] = useState<boolean>(false);
  const [isEmail, setIsEmail] = useState<boolean>(false);
  const [isAuthEmail, setIsAuthEmail] = useState<boolean>(false);
  const [isPassword, setIsPassword] = useState<boolean>(false);
  const [isPasswordConfirm, setIsPasswordConfirm] = useState<boolean>(false);
  const [isBirth, setIsBirth] = useState<boolean>(false);
  const [isSex, setIsSex] = useState<boolean>(false);

  // EMAIL ?????? ?????????
  const [show, setShow] = useState(false);

  // ??????
  const onChangeName = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value);
    if (e.target.value.length < 2 || e.target.value.length > 5) {
      setNameMessage("2?????? ?????? 5?????? ???????????? ??????????????????.");
      setIsName(false);
    } else {
      setNameMessage("????????? ?????? ???????????????");
      setIsName(true);
    }
  }, []);

  // ?????????
  const onChangeEmail = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    const emailRegex =
      /([\w-.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([\w-]+\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\]?)$/;
    const emailCurrent = e.target.value;
    setEmail(emailCurrent);

    if (!emailRegex.test(emailCurrent)) {
      setEmailMessage("????????? ????????? ???????????????");
      setIsEmail(false);
    } else {
      setEmailMessage("????????? ????????? ???????????????");
      setIsEmail(true);
    }
  }, []);

  // ????????????
  const onChangePassword = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    const passwordRegex = /^(?=.*[a-zA-Z])(?=.*[!@#$%^&*()_+\-=[\]{};':"\\|,.<>/~?])(?=.*[0-9]).{8,30}$/;
    const passwordCurrent = e.target.value;
    setPassword(passwordCurrent);

    if (!passwordRegex.test(passwordCurrent)) {
      setPasswordMessage("??????+?????????+???????????? 8?????? ??????");
      setIsPassword(false);
    } else {
      setPasswordMessage("????????? ??????????????? ?????????????????????");
      setIsPassword(true);
    }
  }, []);

  // ???????????? ??????
  const onChangePasswordConfirm = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      const passwordConfirmCurrent = e.target.value;
      setPasswordConfirm(passwordConfirmCurrent);

      if (password === passwordConfirmCurrent) {
        setPasswordConfirmMessage("??????????????? ????????? ?????????????????????");
        setIsPasswordConfirm(true);
      } else {
        setPasswordConfirmMessage("??????????????? ?????????. ?????? ??????????????????");
        setIsPasswordConfirm(false);
      }
    },
    [password]
  );

  // ???????????? ????????? ??????
  const onChangeBirthInput = (event: ChangeEvent<HTMLInputElement>) => {
    const birthRegex = /[0-9]{6}/;
    const birthInputValue: string = event.target.value;
    birthRegex.test(birthInputValue) ? setIsBirth(true) : setIsBirth(false);
  };

  // ?????? ????????? ??????
  const onChangeSexInput = (event: ChangeEvent<HTMLInputElement>) => {
    const sexRegex = /[1-4]/;
    const SexInputValue: string = event.target.value;
    sexRegex.test(SexInputValue) ? setIsSex(true) : setIsSex(false);
  };

  // ??? ????????? ??????
  const validateForm = () =>
    isName && isEmail && isPassword && isPasswordConfirm && isAuthEmail && isBirth && isSex && ageCheck && useCheck;
  const makeJoinData = () => {
    const name = document.querySelector("#name") as HTMLInputElement;
    const email = document.querySelector("#email") as HTMLInputElement;
    const password = document.querySelector("#password") as HTMLInputElement;
    const birth = document.querySelector("#birth-front") as HTMLInputElement;
    const sexType = document.querySelector("#birth-back") as HTMLInputElement;

    const birthStr = `${birth.value.slice(0, 2)}/${birth.value.slice(2, 4)}/${birth.value.slice(4, 6)}`;
    const birthValue = sexType.value === "1" || sexType.value === "2" ? `19${birthStr}` : `20${birthStr}`;

    const sexTypeValue = sexType.value === "1" || sexType.value === "3" ? "MALE" : "FEMALE";

    const data = {
      name: name.value,
      email: email.value,
      password: password.value,
      birth: new Date(birthValue),
      sexType: sexTypeValue,
    };
    return data;
  };

  /**
   * ????????? ????????? ?????? ????????? ????????? json ????????? ??????
   */
  const sendData = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (validateForm()) {
      const data = makeJoinData();

      fetch("/api/join", {
        method: "post",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(data),
      })
        .then((res) => {
          navigate("/");
        })
        .catch((err) => {
          console.log(err);
        });
    }
  };

  const MailValidate = async (email: string) => {
    await fetch("/api/join/validate", {
      method: "post",
      body: email,
    })
      .then((res) => {
        res.status === 200 ? setShow(true) : setEmailMessage("???????????? ???????????????.");
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <StyleWrap>
      <Weather />
      <div className="container">
        <h1 className="title">FLIGHTER SIGNUP</h1>
        <br />
        <h1 className="title-1">??????????????? ????????? ????????? ????????? ????????? ????????? ??? ????????????.</h1>
        <Coupang />
        <form className="content" onSubmit={sendData}>
          {/* <img src={`${process.env.PUBLIC_URL}/images/ic-user-normal.png`} alt="" /> */}
          <table>
            <tbody>
              <tr>
                <th>
                  <label>??? &nbsp; ???</label>
                </th>
                <td>
                  <input type="text" placeholder="????????? ??????????????????." onChange={onChangeName} id="name" />
                  {name.length > 0 && <span className={`message ${isName ? "success" : "error"}`}>{nameMessage}</span>}
                </td>
              </tr>
              <tr>
                <th>
                  <label>?????????</label>
                </th>
                <td>
                  <div>
                    <input
                      className="input_small input_mail"
                      type="email"
                      placeholder="????????? ??????????????????"
                      onChange={onChangeEmail}
                      id="email"
                      disabled={isAuthEmail}
                    />
                    <button
                      className="input_btn"
                      type="button"
                      onClick={
                        isEmail
                          ? () => {
                              MailValidate(email);
                            }
                          : () => false
                      }
                    >
                      ??????
                    </button>
                  </div>
                  {email.length > 0 && (
                    <span className={`message ${isEmail ? "success" : "error"}`}>{emailMessage}</span>
                  )}
                </td>
              </tr>

              <tr>
                <th>
                  <label>????????????</label>
                </th>
                <td className="position-relative">
                  <input
                    type="password"
                    placeholder="??????+??????+???????????? 8?????? ??????"
                    onChange={onChangePassword}
                    id="password"
                  />
                  {password.length > 0 && (
                    <span className={`${isPassword ? "success" : "error"}`}>{passwordMessage}</span>
                  )}
                </td>
              </tr>
              <tr>
                <th>
                  <label>???????????? ??????</label>
                </th>
                <td>
                  <input
                    type="password"
                    placeholder="??????????????? ?????? ??? ??????????????????."
                    onChange={onChangePasswordConfirm}
                    id="password2"
                  />
                  {passwordConfirm.length > 0 && (
                    <span className={`message ${isPasswordConfirm ? "success" : "error"}`}>
                      {passwordConfirmMessage}
                    </span>
                  )}
                </td>
              </tr>
              <tr>
                <th>
                  <label>????????????</label>
                </th>
                <td>
                  <div>
                    <input
                      className="input_small input_birth1"
                      type="text"
                      placeholder="???????????? ??? 6??????"
                      maxLength={6}
                      id="birth-front"
                      onChange={onChangeBirthInput}
                    />
                    <span className="p-1">-</span>
                    <input
                      className="input_small input_birth2 mx-1"
                      type="password"
                      maxLength={1}
                      id="birth-back"
                      onChange={onChangeSexInput}
                    />
                    <span className="input_birth3 p-0">******</span>
                  </div>
                </td>
              </tr>
            </tbody>
          </table>

          <div className="form_agreement">
            <label className="form_agreement_title">??? ????????????</label>
            <div className="form_agreement_box">
              <div className="form_agreement_item">
                <Agreement1 />
                <br />
                <input type="checkbox" id="check1" checked={ageCheck} onChange={ageBtnEvent} />
                <label htmlFor="check1">
                  &nbsp;?????? ??????????????? ???????????????. <span className="blue">(??????)</span>
                </label>
              </div>
              <div className="form_agreement_item">
                <Agreement2 />
                <br />
                <input type="checkbox" id="check2" checked={useCheck} onChange={useBtnEvent} />
                <label htmlFor="check2">
                  &nbsp;?????? ???????????? ?????? ??? ????????? ?????? ????????? ???????????????. <span className="blue">(??????)</span>
                </label>
              </div>

              <div className="form_agreement_all">
                <input type="checkbox" id="all-check" checked={allCheck} onChange={allBtnEvent} />
                <label htmlFor="all-check">
                  &nbsp;?????? ???????????? ??? ???????????? ?????? ??? ????????? ?????? ????????? ???????????????.
                </label>
              </div>
            </div>
          </div>

          <Button
            type="submit"
            style={{
              backgroundColor: "var(--color-r-m)",
              border: "none",
              opacity: "0.8",
            }}
            variant="secondary"
          >
            ????????????
          </Button>
          <Button className="btn-cancle" type="reset">
            <Link to="/login">??????</Link>
          </Button>
        </form>
      </div>
      <MailModal
        email={email}
        setEmailMessage={setEmailMessage}
        setIsAuthEmail={setIsAuthEmail}
        show={show}
        setShow={setShow}
        title="?????? ??????"
        text="??????????????? ?????? ????????????"
      />
    </StyleWrap>
  );
};

export default Join;
