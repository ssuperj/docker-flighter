import styled from "styled-components";
import Button from "react-bootstrap/Button";
import Weather from "../utils/Weather";
import instance from "../../utils/instance";
import { FormEventHandler, useEffect, useRef, useState } from "react";
import { User } from "../../types/types";
import Modals from "../utils/Modals";
import { useNavigate } from "react-router-dom";
import store from "../../redux/store";
import { saveToken } from "../../redux/actions";

const StyleWrap = styled.div`
  .container {
    display: flex;
    flex-direction: column;
    justify-content: center;
    text-align: center;
    align-items: center;
    margin-top: 60px;
    margin-bottom: 100px;

    .blue {
      color: red;
    }
    .gray {
      color: gray;
    }

    .title {
      color: var(--color-r-m);
      font-family: var(--font-bd);
      opacity: 0.8;
      font-size: 30px;
    }

    .title-1 {
      margin-bottom: 20px;
      color: var(--color-r-g);
    }

    .content {
      table {
        margin: auto;
        margin-top: 30px;
        margin-bottom: 50px;

        th {
          text-align: left;
        }

        input {
          background-color: var(--color-l-g);
          border: none;
          width: 250px;
          margin-top: 20px;
          margin-left: 10px;
          border-radius: 10px;
          padding-left: 10px;
          height: 35px;
          outline: none;
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

    Button {
      margin-bottom: 100px;
    }
  }
`;

function UserInfo() {
  /**
   * Hooks
   */
  const [user, setUser] = useState<null | User>(null);
  const [show, setShow] = useState(true);
  const [modalTitle, setModalTitle] = useState("");
  const [modalText, setModalText] = useState("");
  const [modalNavigate, setModalNavigate] = useState(false);
  const passwordRef = useRef<HTMLInputElement>(null);
  const passwordConfirmRef = useRef<HTMLInputElement>(null);
  const passwordNewRef = useRef<HTMLInputElement>(null);
  const fileRef = useRef<HTMLInputElement>(null);
  const previewRef = useRef<HTMLImageElement>(null);
  const navigate = useNavigate();

  /**
   * useEffect
   */
  useEffect(() => {
    setShow(false);
    instance
      .get("/api/user")
      .then((response) => response.data)
      .then((data) => {
        setUser(data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  /**
   *
   * @param event
   * @returns
   */
  const handleUserModifySubmit: FormEventHandler<HTMLFormElement> = async (event) => {
    event.preventDefault();

    const password = passwordRef.current?.value;
    const passwordConfirm = passwordConfirmRef.current?.value;
    const passwordNew = passwordNewRef.current?.value;
    const file: any = fileRef.current?.files?.[0] ?? null;

    const formData = new FormData();
    formData.append("file", file);

    instance
      .post("/api/user/image", formData)
      .then((imageResponse) => {
        if (imageResponse.status === 200) {
          instance
            .patch("/api/user/password", {
              password: password,
              passwordNew: passwordNew,
            })
            .then((passwordResponse) => {
              console.log("passwordResponse" + passwordResponse.status);
              if (passwordResponse.status === 200) {
                validate(true, "회원정보 수정", "회원정보가 수정 되었습니다.", true);
              } else {
                console.error("비밀번호 변경 실패");
              }
            })
            .catch((error) => {
              validate(true, "회원정보 수정", "이미지가 수정 되었습니다.", false);
            });
        }
      })
      .catch((error) => {
        if (doubleCheckPassword(password ?? "", passwordNew ?? "", passwordConfirm ?? "")) {
          instance
            .patch("/api/user/password", {
              password: password,
              passwordNew: passwordNew,
            })
            .then((passwordResponse) => {
              console.log("passwordResponse" + passwordResponse.status);
              if (passwordResponse.status === 200) {
                validate(true, "회원정보 수정", "비밀번호가 수정 되었습니다.", true);
              } else {
                console.error("비밀번호 변경 실패");
              }
            })
            .catch((error) => {
              console.error(error);
            });
        }
      });
  };

  const isValidPassword = (password: string | undefined): boolean => {
    const passwordRegex =
      /^(?=.*[a-zA-Z])(?=.*\d)(?=.*[~!@#$%^&*()_+\-=[\]{};':"\\|,.<>/?])(?=.*[a-zA-Z\d~!@#$%^&*()_+\-=[\]{};':"\\|,.<>/?]).{8,30}$/;
    return passwordRegex.test(password ?? "");
  };

  const doubleCheckPassword = (password: string, passwordNew: string, passwordConfirm: string) => {
    if (!isValidPassword(password) || !isValidPassword(passwordNew) || !isValidPassword(passwordConfirm)) {
      validate(true, "유효성 실패", "비밀번호 숫자+영문자+특수문자 8자리 이상 입력 해주세요.", false);
      return false;
    }

    if (passwordNew !== passwordConfirm) {
      validate(true, "유효성 실패", "변경 비밀번호와 비밀번호 확인이 일치하지 않습니다.", false);
      return false;
    }
    return true;
  };

  const handleImageUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0] ?? null;
    const reader = new FileReader();

    if (!file) {
      console.log("No file selected");
      return;
    }

    if (file.size > 1024 * 1024 * 10) {
      alert("이미지 파일 크기는 10MB 이하여야 합니다.");
      event.target!.value = "";
      return;
    }

    reader.onload = (event) => {
      previewRef.current?.setAttribute("src", event.target?.result as string);
    };

    reader.readAsDataURL(file);
  };

  const validate = (isShow: boolean, title: string, text: string, isNavigate: boolean) => {
    setShow(isShow);
    setModalTitle(title);
    setModalText(text);
    setModalNavigate(isNavigate);
  };

  const showModalHandler = () => {
    if (modalNavigate) {
      navigate("/login");
      store.dispatch(saveToken("{}"));
    } else {
      setShow(false);
    }
  };

  return (
    <StyleWrap>
      <div className="container">
        <Weather />
        <h1 className="title">회원수정</h1>
        <br />
        <form className="content" onSubmit={handleUserModifySubmit}>
          <table>
            <tbody>
              <tr>
                <th>
                  <label>이 &nbsp; 름</label>
                </th>
                <td>
                  <input type="text" placeholder="이름을 입력해주세요." defaultValue={user?.name} disabled />
                </td>
              </tr>
              <tr>
                <th>
                  <label>이메일</label>
                </th>
                <td>
                  <input className="input_small input_id" type="text" defaultValue={user?.email} disabled />
                </td>
              </tr>
              <tr>
                <th>
                  <label>현재 비밀번호</label>
                </th>
                <td>
                  <input type="password" placeholder="현재 비밀번호를 입력해주세요." id="password" ref={passwordRef} />
                </td>
              </tr>

              <tr>
                <th>
                  <label>변경 비밀번호</label>
                </th>
                <td>
                  <input
                    type="password"
                    placeholder="변경하실 비밀번호를 입력해주세요."
                    id="password-new"
                    ref={passwordNewRef}
                  />
                </td>
              </tr>
              <tr>
                <th>
                  <label>비밀번호 확인</label>
                </th>
                <td>
                  <input
                    type="password"
                    placeholder="비밀번호를 한번 더 입력해주세요."
                    id="password-confirm"
                    ref={passwordConfirmRef}
                  />
                </td>
              </tr>
              <tr>
                <th style={{ verticalAlign: "middle" }}>
                  <label>이미지 변경</label>
                </th>
                <td>
                  <div>
                    <div
                      className=" rounded-4 mt-3 ms-2 d-flex align-items-center justify-content-center flex-wrap"
                      style={{ backgroundColor: "var(--color-l-g)", width: "250px", height: "250px" }}
                    >
                      <input
                        id="profile"
                        type="file"
                        accept="image/*"
                        ref={fileRef}
                        onChange={handleImageUpload}
                        style={{ display: "none" }}
                      />
                      <img
                        id="preview"
                        src={
                          user?.image?.slice(0, 5) === "https"
                            ? user.image
                            : `${process.env.PUBLIC_URL}/images/profile/${user?.image ?? `mypage-profile-default.webp`}`
                        }
                        alt="preview"
                        width="180"
                        height="180"
                        ref={previewRef}
                        className="rounded-3"
                      />
                      <label htmlFor="profile" className="btn btn-secondary">
                        파일 찾기
                      </label>
                    </div>
                  </div>
                </td>
              </tr>
            </tbody>
          </table>

          <Button
            type="submit"
            style={{
              backgroundColor: "var(--color-r-m)",
              border: "none",
              opacity: "0.8",
            }}
            variant="secondary"
            size="lg"
            className="m-0"
          >
            수정완료
          </Button>
        </form>
        <Modals show={show} title={modalTitle} text={modalText} showModalHandler={showModalHandler} />
      </div>
    </StyleWrap>
  );
}

export default UserInfo;
