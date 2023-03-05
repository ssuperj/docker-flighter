import Button from "react-bootstrap/esm/Button";
import styled from "styled-components";
import { Link, useNavigate } from "react-router-dom";

const StyleWrap = styled.div`
  .container {
    display: flex;
    justify-content: center;
    flex-direction: column;
    text-align: center;
    align-items: center;
    width: 70%;
    height: 500px;
    border-top: 1px solid pink;
    border-bottom: 1px solid pink;
    margin-top: 200px;

    img {
      width: 80px;
    }
    .title {
      font-family: var(--font-bd);
      font-size: 26px;
      margin-top: 20px;
    }
    p {
      font-size: 20px;
      margin-top: 5px;
    }
    div {
      margin-top: 20px;
      button:first-child {
        background-color: var(--color-r-m);
        border: none;
        opacity: 0.8;
      }
      a:last-child {
        button {
          background-color: white;
          color: black;
          border: 1px solid black;
          margin-left: 10px;
        }
      }
    }
  }
`;

const Paycomplete = () => {
  const navigate = useNavigate();

  const clickNav = () => {
    const nav = 2;
    navigate("/mypage", { state: { nav: nav } });
  };

  return (
    <StyleWrap>
      <div className="container">
        <img src={`${process.env.PUBLIC_URL}/images/ic-tickets.png`} alt="" />
        <h1 className="title">예매가 정상적으로 완료되었습니다.</h1>
        <p>저희 플라이터를 이용해주셔서 감사합니다.</p>
        <div>
          <Button onClick={clickNav}>예약내역보기</Button>
          <Link to="/">
            <Button>홈으로</Button>
          </Link>
        </div>
      </div>
    </StyleWrap>
  );
};

export default Paycomplete;
