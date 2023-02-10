import styled from "styled-components";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";
import Weather from "./Weather";

const StyleWrap = styled.div`
  .container {
    display: flex;
    flex-direction: column;
    justify-content: center;
    text-align: center;
    align-items: center;
    margin-top: 60px;
    margin-bottom: 50px;

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

        input:hover, input:focus {
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
  return (
    <StyleWrap>
      <div className="container">
        <Weather />
        <h1 className="title">회원수정</h1>
        <br />
        {/* <h1 className="title-1">회원정보 변경 페이지 입니다.</h1> */}
        <form className="content">
          {/* <img src={`${process.env.PUBLIC_URL}/images/ic-user-normal.png`} alt="" /> */}
          <table>
            <tbody>
              <tr>
                <th>
                  <label>이 &nbsp; 름</label>
                </th>
                <td>
                  <input type="text" placeholder="이름을 입력해주세요." defaultValue={"박정흠"} disabled />
                </td>
              </tr>
              <tr>
                <th>
                  <label>아이디</label>
                </th>
                <td>
                  <input className="input_small input_id" type="text" placeholder="아이디를 입력해주세요." defaultValue={"qwe123"} disabled />
                </td>
              </tr>
              <tr>
                <th>
                  <label>현재 비밀번호</label>
                </th>
                <td>
                  <input type="password" placeholder="현재 비밀번호를 입력해주세요." />
                </td>
              </tr>
              <tr>
                <th>
                  <label>변경 비밀번호</label>
                </th>
                <td>
                  <input type="password" placeholder="변경하실 비밀번호를 입력해주세요." />
                </td>
              </tr>
              <tr>
                <th>
                  <label>비밀번호 확인</label>
                </th>
                <td>
                  <input type="password" placeholder="비밀번호를 한번 더 입력해주세요." />
                </td>
              </tr>
              <tr>
                <th>
                  <label>이메일</label>
                </th>
                <td>
                  <input className="input_small input_mail" type="email" placeholder="이메일 입력해주세요" />
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
          >
            수정완료
          </Button>
          {/* <Button className="btn-cancle" type="reset">
            <Link to="/login">취소</Link>
          </Button> */}
        </form>
      </div>
    </StyleWrap>
  )
}

export default UserInfo;
