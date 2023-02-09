import styled from "styled-components";
import { Link } from 'react-router-dom';
import Weather from "./Weather";

const StyleWrap = styled.div`
  .weather_list {
    margin-top: 100px;
  }

  .container {

    .title {
      margin-top: 10px;
      font-size: 18px;
      color: var(--color-r-m) ;
      font-family: var(--font-bd);
      opacity: 0.8;
      text-align: center;
    }

    .content {
      display: flex;
      text-align: center;
      flex-direction: column;
      margin-top: 50px;
      margin-bottom: 50px;
      font-size: 18px;

      .ico-air1 {
        width: auto;
        margin-bottom: 25px;
      }

      .p {
        line-height: 23px;
      }

      .reserve {
        display: flex;
        flex-direction: column;
        flex-wrap: wrap;
        margin-bottom: 50px;
        border-radius: 20px;
        border: 1px solid var(--color-r-g);
        border-top: none;
        width: 400px;

        .reserveInfo-head {
          display: flex;
          justify-content: space-between;
          background-color: var(--color-l-g);
          color: var(--color-d-g);
          border-radius: 20px;
          height: 30px;
          line-height: 30px;

          .reserveInfo-1 {
            padding-left: 15px;
          }
          .reserveInfo-2 {
            padding-right: 15px;
          }
        }

        .reserveInfo-body {
          display: flex;
          justify-content: space-around;
          padding-top: 15px;
          padding-bottom: 15px;

          img {
            height: 50px;
          }

          .p-h {
            width: 135px;
            font-size: 30px;
            padding-top: 10px;
            color: var(--color-d-g);
          }
          .p-b {
            color: var(--color-d-g);
            opacity: 0.5;
          }
        }
      }

      .reserve:hover {
          border-color: var(--color-r-m);
          cursor: pointer;
          
          .reserveInfo-head {
            background-color: var(--color-l-m);
            transition: 0.3s;
            color: white;
          }
          .reserveInfo-body {
            color: var(--color-d-m);

            .p-h {
              color: var(--color-l-m);
            }

            .p-b {
              color: var(--color-l-m);
            }
            img {
              color: var(--color-d-m);
              content: url(${process.env.PUBLIC_URL}/images/ic-airplane-take-off-pink.png);
            }
          }
        }
    }
  }
`;

function ReserveInfo() {
  return (
    <StyleWrap>
      <Weather />
      <div className="container">
        <h1 className="title">RESERVE INFO</h1><br />
        <div className="content">
          <div className="noReserve">
            <img className="ico-air1" src={`${process.env.PUBLIC_URL}/images/ic-air1.png`} alt="" />
            <p className="p-b">죄송합니다, 아직 항공편을 표시할 수 없습니다</p>
            <p className="p">고객님의 예약 정보를 확인하시려면, 확정 이메일 또는 <br />
            여행 제공 업체에 연락하시기 바랍니다.</p>
          </div>

          <hr />

          <Link to="/">
            <div className="reserve">
              <div className="reserveInfo-head">
                <div className="reserveInfo-1">예약번호 : FLY-32415</div>
                <div className="reserveInfo-2">2023-04-29(금)</div>
              </div>
              <div className="reserveInfo-body">
                <div className="reserveInfo-3">
                  <p className="p-h">김포</p>
                  <p className="p-b">GMP</p>
                </div>
                <img src={`${process.env.PUBLIC_URL}/images/ic-airplane-take-off-black.png`} alt="" />
                <div className="reserveInfo-4">
                  <p className="p-h">제주</p>
                  <p className="p-b">CJU</p>
                </div>
              </div>
            </div>
          </Link>

          <Link to="/">
            <div className="reserve">
              <div className="reserveInfo-head">
                <div className="reserveInfo-1">예약번호 : FLY-32415</div>
                <div className="reserveInfo-2">2023-04-29(금)</div>
              </div>
              <div className="reserveInfo-body">
                <div className="reserveInfo-3">
                  <p className="p-h">제주</p>
                  <p className="p-b">CJU</p>
                </div>
                <img src={`${process.env.PUBLIC_URL}/images/ic-airplane-take-off-black.png`} alt="" />
                <div className="reserveInfo-4">
                  <p className="p-h">바로셀로나</p>
                  <p className="p-b">BCN</p>
                </div>
              </div>
            </div>
          </Link>

          <Link to="/">
            <div className="reserve">
              <div className="reserveInfo-head">
                <div className="reserveInfo-1">예약번호 : FLY-32415</div>
                <div className="reserveInfo-2">2023-04-29(금)</div>
              </div>
              <div className="reserveInfo-body">
                <div className="reserveInfo-3">
                  <p className="p-h">바로셀로나</p>
                  <p className="p-b">BCN</p>
                </div>
                <img src={`${process.env.PUBLIC_URL}/images/ic-airplane-take-off-black.png`} alt="" />
                <div className="reserveInfo-4">
                  <p className="p-h">후쿠오카</p>
                  <p className="p-b">FUK</p>
                </div>
              </div>
            </div>
          </Link>
        </div>
      </div>
    </StyleWrap>
  )
}

export default ReserveInfo;