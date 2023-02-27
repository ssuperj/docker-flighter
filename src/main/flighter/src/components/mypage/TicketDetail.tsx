import { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import styled from "styled-components";

const ModalWrap = styled.div`
  img {
    position: absolute;
    right: 5%;
    bottom: 1%;
  }
  table {
    tr {
      height: 30px;
      td {
        font-size: 17px;
      }
      td:first-child {
        width: 80px;
        font-weight: 700;
      }
      .passengers {
        padding-left: 3px;
        p {
          margin-bottom: 10px;
        }
      }
    }
  }
`;

function TicketDetail(props: any) {
  const [show, setShow] = useState(false);
  const handleShow = () => setShow(true);
  const handleClose = () => {
    setShow(false);
  };

  function priceToString(price: any) {
    return price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  }

  function timeToString(price: any) {
    return price.toString().replace(/\B(?=(\d{2})+(?!\d))/g, ":");
  }
  return (
    <>
      <div onClick={handleShow} className="btn__modal">
        {props.render()}
      </div>
      <Modal style={{ backgroundColor: "rgb(255,255,255,0.1)" }} show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>티켓 상세보기</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <ModalWrap>
            <table>
              <tbody>
                <tr>
                  <td>항공사</td>
                  <td>&nbsp;: &nbsp;{props.airLine}</td>
                </tr>
                <tr>
                  <td>항공편</td>
                  <td>&nbsp;: &nbsp;{props.flight}</td>
                </tr>
                <tr>
                  <td>출발지</td>
                  <td>
                    &nbsp;: &nbsp;{props.departure} ({props.depCode})
                  </td>
                </tr>
                <tr>
                  <td>도착지</td>
                  <td>
                    &nbsp;: &nbsp;{props.destination} ({props.desCode})
                  </td>
                </tr>
                <tr>
                  <td>출발일</td>
                  <td>&nbsp;: &nbsp;{props.departureDate}</td>
                </tr>
                <tr>
                  <td>출발시간</td>
                  <td>&nbsp;: &nbsp;{timeToString(props.startTime)}</td>
                </tr>
                <tr>
                  <td>도착시간</td>
                  <td>&nbsp;: &nbsp;{timeToString(props.endTime)}</td>
                </tr>
                <tr>
                  <td>탑승인원</td>
                  <td className="passengers">
                    {props.adult === 0 ? null : <p> - 성인 {props.adult} 명</p>}
                    {props.youth === 0 ? null : <p> - 청소년 {props.youth} 명</p>}
                    {props.child === 0 ? null : <p> - 유아 {props.child} 명</p>}
                  </td>
                </tr>
                <tr>
                  <td>티켓 금액</td>
                  <td>&nbsp;: &nbsp;{priceToString(props.price)} 원</td>
                </tr>
                <tr>
                  <td>Class</td>
                  <td>&nbsp;: &nbsp;{props.seats[0].seatType}</td>
                </tr>
                <tr>
                  <td>좌석 번호</td>
                  <td>
                    &nbsp;: &nbsp;
                    {props.seats.map((seat: any) => (
                      <>{seat.seatNo}&nbsp;</>
                    ))}
                  </td>
                </tr>
              </tbody>
            </table>
          </ModalWrap>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default TicketDetail;
