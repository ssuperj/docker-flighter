import Button from "react-bootstrap/esm/Button";
import styled from "styled-components";
import Weather from "../components/Weather";
import Coupang from '../components/Coupang';
import { Link } from "react-router-dom";

const StyleWrap = styled.div`

  .container {
    display: flex;
    justify-content: center;
    margin-top: 50px;
    margin-bottom: 120px;

    .payment-info1 {
      display: flex;
      flex-direction: column;

      .title {
          font-size: 24px;
          margin-bottom: 15px;
        }

      .info-1, .info-2, .info-3 {
        width: 600px;
        height: 300px;
        padding-top: 25px;
        border-radius: 20px;
        box-shadow: 1px 1px 1px 1px var(--color-d-g);
        margin-top: 30px;
        background: linear-gradient(snow, snow);
      }

      .info-1 {
        position: relative;
        padding-top: 5px;

        .intainer {
          background: linear-gradient(pink, pink);
          padding-top: 15px;

          .info {
            img {
              /* position: absolute; */
              width: 150px;
            }
          }
        }
        .bot {
            /* span:first-child {
              color: white;
            }
            span:nth-child(2) {
              color: red;
            }
            span:last-child {
              color: green;
            } */
            display: flex;
            /* justify-content: space-between; */

            span {
              margin-top: 10px;
              height: 50px;
              width: 200px;
              text-align: center;
              p {
                font-size: 18px;
                margin-top: 5px;
              }
              p:first-child {
                color: var(--color-d-g);
              }
            }

            span:nth-child(1), span:nth-child(2) {
              border-right: 1px solid black;
            }
          }

        .title {
          line-height: 70px;
          padding-left: 20px;
          padding-right: 20px
        }

        .img-qr {
          position: absolute;
          width: 60px;
          right: 10px;
        }

        div {
          height: 150px;
          padding-left: 20px;
          padding-right: 20px;

          .info {
            display: flex;
            margin-top: 10px;
            
            div:nth-child(2) {
              /* margin-top: 20px; */
              margin-left: 10px;
              margin-right: 10px;
            }
            div {
              p:first-child {
                margin-left: 25px;
                padding-top: 15px;
                font-size: 26px;
              }
              p:nth-child(2) {
                margin-left: 25px;
                font-size: 24px;
                text-align: center;
              }
            }
          }
        }
      }

      .info-2 {
        padding-left: 20px;
        
        p {
          margin-top: 10px;
          color: var(--color-d-g);
          font-size: 12px;
        }
      }
    }

    .payment-info2 {
      display: flex;
      flex-direction: column;

      .info-1, .info-2, .info-3 {
        width: 300px;;
        margin-left: 50px;
        border-radius: 10px;
        padding-top: 20px;
        padding-left: 10px;
        padding-right: 10px;
      }

      .info-1 {
        margin-top: 30px;
        border-top: 1px solid var(--color-r-g);
        border-left: 1px solid var(--color-r-g);
        border-right: 1px solid var(--color-r-g);

        span:first-child {
          font-size: 18px;
          line-height: 30px;
        }
        span:nth-child(2) {
          text-align: right;
          float: right;
          font-size: 24px;
        }
        p {
          margin-top: 15px;
          margin-bottom: 15px;
          color: var(--color-r-g);
        }
      }

      .info-2 {
        margin-top: 1px;
        border-bottom: none;
        border-top: 2px dotted var(--color-d-g);
        border-left: 1px solid var(--color-r-g);
        border-right: 1px solid var(--color-r-g);

        .title {
          font-size: 18px;
          margin-bottom: 15px;
        }

        div {
          margin-bottom: 10px;
          height: 20px;

          span:first-child {
            line-height: 20px;
          }

          span:nth-child(2) {
          text-align: right;
          float: right;
          font-size: 18px;
        }
        }
      }

      .info-3 {
        margin-top: 1px;
        border-top: 2px dotted var(--color-d-g);
        border-left: 1px solid var(--color-r-g);
        border-right: 1px solid var(--color-r-g);
        border-bottom: 1px solid var(--color-r-g);

        .title {          
          font-size: 18px;
          margin-bottom: 15px;
        }
        p {
          margin-top: 15px;
          margin-bottom: 15px;
          color: var(--color-r-g);
        }
      }

      .btn {
        background-Color: black;
        border: none;
        opacity: 0.7;
        width: 300px;
        margin-top: 2px;
        margin-left: 50px;
      }
    }
  }

  .event {
    display: flex;
    justify-content: center;
    flex-direction: column;
    text-align: center;
    align-items: center;
    margin: auto;
    width: 95%;
    background-color: pink;
    border-radius: 30px;
    margin-top: 50px;
    height: 300px;

    .title {
      font-size: 30px;
    }

    div {
      width: 500px auto;
      margin-top: 40px;
      margin-bottom: 30px;

      p {
        margin-top: 5px;
      }
    }

    img {
      width: 100px;
      height: 100px;
    }
  }

  @media (max-width: 1000px) {
    .container {
      flex-direction: column;
      margin: auto;

      .payment-info1, .payment-info2 {
        margin: auto;
      }
      .payment-info2 {
        margin-top: 30px;

        .info-1, .info-2, .info-3 {
          margin: auto;
        }
        .btn {
          margin-top: 5px;
          margin-left: 0;
        }
      }
    }
  }

  @media (max-width: 767px) {
    .container {
      
      .payment-info1 {
        .info-1 {
          width: 500px;

          .intainer {
            .info {
              div {
              p:first-child {
                margin-left: 0px;
                padding-top: 20px;
                font-size: 20px;
              }
              p:nth-child(2) {
                margin-left: 0px;
                font-size: 18px;
              }
            }
            }
          }
        }
        .info-2 {
          width: 500px;
          p {
            font-size: 10px;
          }
        }
      }
    }
    .event {
      .title {
        font-size: 24px;
      }
      div {
        font-size: 11px;
      }
    }
  }

  @media (max-width: 585px) {
    .container {
      .payment-info1 {
        .info-1 {
          width: 320px;
          .intainer {
            .info {
              padding: 10px;
              div {
                padding: 10px;
                img {
                  width: 80px;
                }

                p:first-child {
                  font-size: 16px;
                }
                p:nth-child(2) {
                  font-size: 14px;
                }
              }
            }
          }
          .bot {
            span {
              p {
                font-size: 16px;
              }
            }
          }
        }
        .info-2 {
          width: 320px;
          p {
            width: 290px;
          }
        }
      }
    }
    .event {
      .title {
        font-size: 18px;
      }
      div {
        width: 310px;
      }
    }
  }
  @media (max-width: 1394px) {
    .weather_list {
      display: none;
    }
    .ad {
      display: none;
    }
  }
`;

function Payment(props: any) {
  return(
    <StyleWrap>
      <Weather />
      <Coupang />
      <div className="container">
        <div className="payment-info1">
          <div className="info-1">
            <span className="title">BOARDING PASS</span>
            <img className="img-qr" src={`${process.env.PUBLIC_URL}/images/QRcode.png`} alt="" />
            <div className="intainer">
              <span>AIR SEOUL</span>&nbsp;&nbsp;/&nbsp;&nbsp;<span>RS933</span>
              <div className="info">
                <div>
                  <p>서울/김포</p>
                  <p>GMP</p>
                </div>
                <div>
                  <img src={`${process.env.PUBLIC_URL}/images/ic-travel.png`} alt="" />
                </div>
                <div>
                  <p>제주</p>
                  <p>CJU</p>
                </div>
              </div>
            </div>
            <div className="bot">
              <span>
                <p>FIGHT</p>
                <p>RS933</p>
              </span>
              <span>
                <p>GATE</p>
                <p>41A</p>
              </span>
              <span>
                <p>SEAT NO.</p>
                <p>10C</p>
              </span>
            </div>
          </div>
          <div className="info-2">
            <h1 className="title">* 주의사항</h1>
            <p>1. 여권 만료 기간을 꼭 확인해주세요.</p>
            <p>2. 도시명을 꼭 확인해주세요.</p>
            <p>3. 항공권 문제 발생 시 고객센터로 꼭 문의해주세요.</p>
            <p>4. 규정이 엄격한 항공권 예약 시 주의 해주세요.</p>
            <p>5. 항공권에 이름을 꼭 확인해주세요.</p>
            <p>6. ID 카드, 여권, 일정표 및 기타 개인 필수품을 지참하시기 바랍니다.</p>
            <p>7. 기내 휴대 수하물은 가급적 줄이십시오. 큰 수하물은 보안검색을 거쳐야 합니다.</p>
            <p>8. 국제선에 탑승하시는 경우 출발 전에 검색 및 검역 절차, 세관 규정, 시차, 날씨에 대해 알아보십시오.</p>
            <p>9. 멀미가 나거나 탑승 전에 질병이 있는 것으로 진단 받으신 경우 의사가 처방해 드린 약을 복용하십시오.</p>
            <p>10. 임산부는 여행 전에 담당 의사와 상담해서 위험을 예방하는 것이 바람직합니다.</p>
          </div>
          {/* <div className="info-3">
            <h1 className="title">항공권 정보</h1>
          </div> */}
        </div>
        <div className="payment-info2">
          <div className="info-1">
            <span>총 금액</span>
            <span>₩ 250,000</span>
            <p>부가세와 서비스 요금이 포함됩니다.</p>
          </div>
          <div className="info-2">
            <h1 className="title">승객</h1>
            <div>
              <span>성인</span>
              <span>0 명</span>
            </div>
            <div>
              <span>청소년</span>
              <span>0 명</span>
            </div>
            <div>
              <span>유아</span>
              <span>0 명</span>
            </div>
          </div>
          <div className="info-3">
            <h1 className="title">서비스</h1>
            <p>선택된 추가 서비스 없음</p>
          </div>
          <Link to="/paycomplete"><Button type="submit" variant="secondary">결제하기</Button></Link>
        </div>
      </div>
      <div className="event">
        <h1 className="title">플라이터 앱에서 즐기는 더 많은 혜택</h1>
        <div>
          <p>앱에서 예약 시 수천 개 호텔을 평균 15% 할인받으실 수 있으며 모든 예약에 대해 포인트를 두 배로 적립해 드려요.</p>
          <p>앱 전용 특가 상품으로 저렴하게 예약해 부담 없이 더 많은 여행을 즐기고, 이동 중에도 여행의 모든 것을 관리하실 수 있어요.</p>
          <p>기기의 카메라로 QR 코드를 스캔하여 앱을 다운로드해 보세요.</p>
        </div>
        <img src={`${process.env.PUBLIC_URL}/images/QRcode.png`} alt="" />
      </div>
    </StyleWrap>
  )
}

export default Payment;
