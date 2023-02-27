import styled from "styled-components";
import Weather from "../utils/Weather";
import TicketDetail from "./TicketDetail";
import { useEffect, useState } from "react";
import instance from "../../utils/instance";

const StyleWrap = styled.div`
  .weather_list {
    margin-top: 60px;
  }

  .container {
    .title {
      margin-top: 60px;
      font-size: 18px;
      color: var(--color-r-m);
      font-family: var(--font-bd);
      opacity: 0.8;
      text-align: center;
      font-size: 30px;
    }

    .content {
      display: flex;
      text-align: center;
      flex-direction: column;
      min-height: 600px;
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

      .noReserve {
        .p-b {
          margin-bottom: 2px;
        }
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
            font-size: 22px;
            padding-top: 10px;
            color: var(--color-d-g);
          }
          .p-b {
            color: var(--color-d-g);
            opacity: 0.5;
            font-size: 22px;
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

const ReserveInfo = () => {
  const [tickets, setTickets]: any = useState([]);

  useEffect(() => {
    instance
      .get("/api/ticket")
      .then((response) => response.data)
      .then((data) => {
        setTickets(data);
      })
      .catch((error) => console.log(error));
  }, []);

  return (
    <StyleWrap>
      <Weather />
      <div className="container">
        <h1 className="title">예약내역</h1>
        <br />
        <div className="content">
          {tickets.length === 0 ? (
            <div className="noReserve">
              <img className="ico-air1" src={`${process.env.PUBLIC_URL}/images/ic-air1.png`} alt="" />
              <p className="p-b">죄송합니다, 아직 항공편을 표시할 수 없습니다</p>
              <p className="p">
                고객님의 예약 정보를 확인하시려면, 확정 이메일 또는 <br />
                여행 제공 업체에 연락하시기 바랍니다.
              </p>
            </div>
          ) : (
            <>
              {tickets.map((ticket: any) => (
                <div>
                  <TicketDetail
                    render={() => (
                      <div className="reserve">
                        <div className="reserveInfo-head">
                          <div className="reserveInfo-1">항공편 : {ticket.flight.flight}</div>
                          <div className="reserveInfo-2">{ticket.flight.departureDate}</div>
                        </div>
                        <div className="reserveInfo-body">
                          <div className="reserveInfo-3">
                            <p className="p-h">{ticket.flight.departure}</p>
                            <p className="p-b">{ticket.flight.depCode}</p>
                          </div>
                          <img src={`${process.env.PUBLIC_URL}/images/ic-airplane-take-off-black.png`} alt="" />
                          <div className="reserveInfo-4">
                            <p className="p-h">{ticket.flight.destination}</p>
                            <p className="p-b">{ticket.flight.desCode}</p>
                          </div>
                        </div>
                      </div>
                    )}
                    airLine={ticket.airLine}
                    flight={ticket.flight.flight}
                    departure={ticket.flight.departure}
                    depCode={ticket.flight.depCode}
                    destination={ticket.flight.destination}
                    desCode={ticket.flight.desCode}
                    departureDate={ticket.flight.departureDate}
                    startTime={ticket.flight.startTime}
                    endTime={ticket.flight.endTime}
                    price={ticket.price}
                    adult={ticket.adult}
                    youth={ticket.youth}
                    child={ticket.child}
                    seats={ticket.seats}
                  ></TicketDetail>
                </div>
              ))}
            </>
          )}
        </div>
      </div>
    </StyleWrap>
  );
};

export default ReserveInfo;
