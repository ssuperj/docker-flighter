import styled from "styled-components";
import Weather from "../components/utils/Weather";
import Coupang from "../components/utils/Coupang";
import Payment from "./Payment";
import { useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import instance from "../utils/instance";

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

      .info-1,
      .info-2,
      .info-3 {
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
          display: flex;

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

          span:nth-child(1),
          span:nth-child(2) {
            border-right: 1px solid black;
          }
        }

        .title {
          line-height: 70px;
          padding-left: 20px;
          padding-right: 20px;
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
                padding-top: 24px;
                font-size: 22px;
                text-align: center;
              }
              p:nth-child(2) {
                margin-top: 2px;
                margin-left: 25px;
                font-size: 14px;
                text-align: center;
                /* font-style: oblique; */
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

      .info-1,
      .info-2,
      .info-3 {
        width: 300px;
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

      button {
        background-color: black;
        color: white;
        border: none;
        opacity: 0.7;
        width: 300px;
        height: 36px;
        margin-top: 2px;
        margin-left: 50px;
        font-size: 15px;
        border-radius: 0.375rem;
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

      .payment-info1,
      .payment-info2 {
        margin: auto;
      }
      .payment-info2 {
        margin-top: 30px;

        .info-1,
        .info-2,
        .info-3 {
          margin: auto;
        }
        button {
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

function priceToString(price: any) {
  return price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

function Ticketing() {
  const location = useLocation();
  const [airline, setAirline] = useState("");
  const [airCode, setAirCode] = useState("");
  const [distance, setDistance] = useState(Number);
  const [departure, setDeparture] = useState("");
  const [depCode, setDepCode] = useState("");
  const [destination, setDestination] = useState("");
  const [desCode, setDesCode] = useState("");
  const [dateTime, setDateTime] = useState("");
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [passengers, setPassengers] = useState(Object);
  const [seats, setSeats]: any = useState([]);
  const [reservedSeats, setReservedSeats] = useState([]);

  // eslint-disable-next-line react-hooks/exhaustive-deps
  function countPassengers(passengers: object): number {
    return Object.keys(passengers).reduce((acc, key) => acc + parseInt(location.state.passengers[key]), 0);
  }

  useEffect(() => {
    const getRandomSeatNo = (seatType: string, reservedSeats: Array<string>, previousSeatNo?: string) => {
      const seatLetter = seatType.substring(0, 1);
      let seatNumber = Math.ceil(Math.random() * 100);
      let seatNo = `${seatLetter}${seatNumber.toString().padStart(2, "0")}`;

      while (reservedSeats.includes(seatNo) || seatNo === previousSeatNo) {
        seatNumber = Math.ceil(Math.random() * 100);
        seatNo = `${seatLetter}${seatNumber.toString().padStart(2, "0")}`;
      }

      if (reservedSeats.length >= 100) {
        throw new Error("All seats are taken");
      }

      return seatNo;
    };

    const fetchReservedSeats = async () => {
      const response = await instance.get(`/api/seat/${location.state.airCode}`);
      const data = response.data;
      setReservedSeats(data);
    };

    fetchReservedSeats();

    const count = countPassengers(location.state.passengers);

    setSeats(
      [...new Array(count)].map((_, index, arr) => {
        const previousSeatNo: any = index > 0 ? arr[index - 1]?.seatNo : undefined;
        return {
          seatNo: getRandomSeatNo(location.state.seatType, reservedSeats, previousSeatNo),
          seatType: location.state.seatType,
        };
      })
    );

    setAirline(location.state.airline);
    setAirCode(location.state.airCode);
    setDistance(Math.ceil((location.state.distance * 0.001) / 800));
    setDeparture(location.state.departure);
    setDepCode(location.state.depCode);
    setDestination(location.state.destination);
    setDesCode(location.state.desCode);
    setDateTime(location.state.dateTime);
    setStartDate(location.state.startDate);
    setEndDate(location.state.endDate);
    setPassengers(location.state.passengers);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  let endHour = (parseInt(startDate[0] + startDate[1]) + distance).toString().padStart(2, "0");

  if (parseInt(endHour) >= 24) {
    endHour = String(parseInt(endHour) % 24).padStart(2, "0");
  }

  const end = endDate !== "미정" ? endDate : endHour + startDate[2] + startDate[3];

  const paymentData = {
    pg: "kakaopay",
    pay_method: "card",
    merchant_uid: `FLIGHTER${new Date().getTime()}`,
    name: destination + " 티켓",
    amount: String(
      distance * 130000 * passengers.adult + distance * 80000 * passengers.youth + distance * 50000 * passengers.child
    ),
    buyer_name: "park",
    passengers: parseInt(passengers.adult) + parseInt(passengers.youth) + parseInt(passengers.child),
    ticketDto: {
      airLine: airline,
      price:
        distance * 130000 * passengers.adult +
        distance * 80000 * passengers.youth +
        distance * 50000 * passengers.child,
      adult: passengers.adult,
      youth: passengers.youth,
      child: passengers.child,
    },
    seatDtos: seats,
    flightDto: {
      flight: airCode,
      departure: departure,
      depCode: depCode,
      destination: destination,
      desCode: desCode,
      departureDate: dateTime,
      startTime: startDate,
      endTime: end,
    },
  };

  return (
    <StyleWrap>
      <Weather />
      <Coupang />
      <div className="container">
        <div className="payment-info1">
          <div className="info-1">
            <span className="title">BOARDING PASS</span>
            <img className="img-qr" src={`${process.env.PUBLIC_URL}/images/QRcode.png`} alt="" />
            <div className="intainer">
              <span>{airline}</span>&nbsp;&nbsp;/&nbsp;&nbsp;<span>{airCode}</span>
              <div className="info">
                <div>
                  <p>{departure}</p>
                  <p>
                    출발 {startDate[0] + startDate[1]}:{startDate[2] + startDate[3]}
                  </p>
                </div>
                <div>
                  <img src={`${process.env.PUBLIC_URL}/images/ic-travel.png`} alt="" />
                </div>
                <div>
                  <p>{destination}</p>
                  {endDate === "미정" ? (
                    <p>
                      도착 {endHour}:{startDate[2] + startDate[3]}
                    </p>
                  ) : (
                    <p>
                      도착 {endDate[0] + endDate[1]}:{endDate[2] + endDate[3]}
                    </p>
                  )}
                </div>
              </div>
            </div>
            <div className="bot">
              <span>
                <p>FIGHT</p>
                <p>{airCode}</p>
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
            <span>
              ₩{" "}
              {priceToString(
                distance * 130000 * passengers.adult +
                  distance * 80000 * passengers.youth +
                  distance * 50000 * passengers.child
              )}
              원
            </span>
            <p>부가세와 서비스 요금이 포함됩니다.</p>
          </div>
          <div className="info-2">
            <h1 className="title">승객</h1>
            <div>
              <span>성인</span>
              <span>{passengers.adult} 명</span>
            </div>
            <div>
              <span>청소년</span>
              <span>{passengers.youth} 명</span>
            </div>
            <div>
              <span>유아</span>
              <span>{passengers.child} 명</span>
            </div>
          </div>
          <div className="info-3">
            <h1 className="title">서비스</h1>
            <p>선택된 추가 서비스 없음</p>
          </div>
          <Payment paymentData={paymentData} />
        </div>
      </div>
      <div className="event">
        <h1 className="title">플라이터 앱에서 즐기는 더 많은 혜택</h1>
        <div>
          <p>
            앱에서 예약 시 수천 개 호텔을 평균 15% 할인받으실 수 있으며 모든 예약에 대해 포인트를 두 배로 적립해 드려요.
          </p>
          <p>
            앱 전용 특가 상품으로 저렴하게 예약해 부담 없이 더 많은 여행을 즐기고, 이동 중에도 여행의 모든 것을 관리하실
            수 있어요.
          </p>
          <p>기기의 카메라로 QR 코드를 스캔하여 앱을 다운로드해 보세요.</p>
        </div>
        <img src={`${process.env.PUBLIC_URL}/images/QRcode.png`} alt="" />
      </div>
    </StyleWrap>
  );
}

export default Ticketing;
