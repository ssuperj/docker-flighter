import styled from "styled-components";
import Button from "react-bootstrap/Button";

const StyleWrap = styled.div`
  .container {
    justify-content: center;
    text-align: center;
    width: auto;

    .title {
      margin-top: 10px;
      font-size: 18px;
      color: var(--color-r-m);
      font-family: var(--font-bd);
      opacity: 0.8;
      margin-bottom: 30px;
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
    }
  }
`;

function Withdrawal() {
  return (
    <StyleWrap>
      <div className="container">
        <h1 className="title">Withdrawal</h1>
        <br />
        <div className="content">
          <img className="ico-stewardess" src={`${process.env.PUBLIC_URL}/images/ic-stewardess3-normal.png`} alt="" />
          <p className="p-b">회원탈퇴 페이지입니다.</p>
          <p className="p">
            탈퇴를 원하시면 회원님의 비밀번호를 입력하시고, <br />
            탈퇴하기를 눌러주세요.
          </p>
          <br />
          <input className="input" type="password" id="password" />
          <Button
            style={{ backgroundColor: "var(--color-r-m)", border: "none", opacity: "0.8", margin: "0 0 4px 3px" }}
            variant="secondary"
          >
            탈퇴하기
          </Button>
          {/* <ModalParam
            render={() =>           
            <Button
              style={{ backgroundColor: "var(--color-r-m)", border: "none", opacity: "0.8", margin: "0 0 4px 5px" }}
              variant="secondary"
            >
              탈퇴하기
            </Button>}
            title="회원탈퇴"
            content="정말로 탈퇴하시겠습니까?"
            btnContent="탈퇴하기"
          ></ModalParam> */}
          <hr />
          <img className="ico-stewardess" src={`${process.env.PUBLIC_URL}/images/ic-stewardess1-normal.png`} alt="" />
          <p className="p-b">회원탈퇴가 완료되었습니다.</p>
          <p className="p">
            Flighter를 이용해주시고 사랑해주셔서 감사합니다. <br />
            더욱 더 노력하는 Flighter가 되겠습니다.
          </p>
          <br />
          <Button style={{ backgroundColor: "var(--color-r-m)", border: "none", opacity: "0.8" }} variant="secondary">
            확인
          </Button>
        </div>
      </div>
    </StyleWrap>
  );
}

export default Withdrawal;
