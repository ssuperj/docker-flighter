import styled from "styled-components";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";
import Coupang from "../components/Coupang";
import Agreement1 from "../components/Agreement1";
import Agreement2 from "../components/Agreement2";
import { useEffect, useState } from "react";

const StyleWrap = styled.div`
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

        .input_small {
          margin-right: 5px;
        }

        .input_id {
          width: 181px;
        }

        .input_mail {
          width: 207px;

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

        input, label {
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

    @media (max-width: 1180px) {
      .ad {
        display: none;
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
`;

const Join = (props: any) => {
  const [allCheck, setAllCheck] = useState(false);
  const [ageCheck, setAgeCheck] = useState(false);
  const [useCheck, setUseCheck] = useState(false);
  const [marketingCheck, setMarketingCheck] = useState(false);

  const allBtnEvent = () => {
    if (allCheck === false) {
      setAllCheck(true);
      setAgeCheck(true);
      setUseCheck(true);
      setMarketingCheck(true);
    } else {
      setAllCheck(false);
      setAgeCheck(false);
      setUseCheck(false);
      setMarketingCheck(false);
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

  const marketingBtnEvent = () => {
    if (marketingCheck === false) {
      setMarketingCheck(true);
    } else {
      setMarketingCheck(false);
    }
  };

  useEffect(() => {
    if (ageCheck === true && useCheck === true && marketingCheck === true) {
      setAllCheck(true);
    } else {
      setAllCheck(false);
    }
  }, [ageCheck, useCheck, marketingCheck]);

  return (
    <StyleWrap>
      <div className="container">
        <h1 className="title">FLIGHTER SIGNUP</h1>
        <br />
        <h1 className="title-1">플라이터의 항공권 예매와 특별한 혜택을 받으실 수 있습니다.</h1>
        <Coupang />
        <form className="content">
          {/* <img src={`${process.env.PUBLIC_URL}/images/ic-user-normal.png`} alt="" /> */}
          <table>
            <tbody>
              <tr>
                <th>
                  <label>이 &nbsp; 름</label>
                </th>
                <td>
                  <input type="text" placeholder="이름을 입력해주세요." />
                </td>
              </tr>
              <tr>
                <th>
                  <label>아이디</label>
                </th>
                <td>
                  <input className="input_small input_id" type="text" placeholder="아이디를 입력해주세요." />
                  <Link className="input_btn" to="">중복확인</Link>
                </td>
              </tr>
              <tr>
                <th>
                  <label>비밀번호</label>
                </th>
                <td>
                  <input type="password" placeholder="비밀번호를 입력해주세요." />
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
                  <Link className="input_btn" to="">인증</Link>
                </td>
              </tr>
            </tbody>
          </table>

          <div className="form_agreement">
            <label className="form_agreement_title">ㅁ 약관동의</label>
            <div className="form_agreement_box">
              <div className="form_agreement_item">
                <Agreement1 /><br />
                <input
                  type="checkbox"
                  id="check1"
                  checked={ageCheck}
                  onChange={ageBtnEvent}
                />
                <label htmlFor="check1">
                  &nbsp;위의 이용약관에 동의합니다. <span className="blue">(필수)</span>
                </label>
              </div>
              <div className="form_agreement_item">
                <Agreement2 /><br />
                <input
                  type="checkbox"
                  id="check2"
                  checked={useCheck}
                  onChange={useBtnEvent}
                />
                <label htmlFor="check2">
                  &nbsp;위의 개인정보 수집 및 이용에 대한 안내에 동의합니다. <span className="blue">(필수)</span>
                </label>
              </div>
              <div className="form_agreement_item">
                <input
                  type="checkbox"
                  id="check3"
                  checked={marketingCheck}
                  onChange={marketingBtnEvent}
                />
                <label htmlFor="check3">
                  &nbsp;마케팅 동의 <span className="gray">(선택)</span>
                </label>
              </div>
              <div className="form_agreement_all">
                <input
                  type="checkbox"
                  id="all-check"
                  checked={allCheck}
                  onChange={allBtnEvent}
                />
                <label htmlFor="all-check">&nbsp;위의 이용약관 및 개인정보 수집 및 이용에 대한 안내에 동의합니다.</label>
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
            회원가입
          </Button>
          <Button className="btn-cancle" type="reset">
            <Link to="/login">취소</Link>
          </Button>
        </form>
      </div>
    </StyleWrap>
  );
};

export default Join;
