import { useEffect } from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import NowDate from "../utils/ResultInput";
import AOS from "aos";
import "aos/dist/aos.css";
import { useNavigate, useLocation } from "react-router-dom";
import Flickr from "../utils/Flickr";

const SearchView = (props: any) => {
  const location = useLocation();

  const Wrapper = styled.div`
    .air-card {
      border: 0.25px solid grey;
      border-radius: 20px;
      min-width: 300px;
      box-shadow: 2px 2px 2px 2px grey;
      position: relative;
      background-image: linear-gradient(75deg, #add8e660, #eee);
      box-shadow: 0 0 50px rgba(0, 0, 0, 0.315);
      font-family: var(--font-apple);
      font-weight: 700;
      &::after {
        content: "";
        border-radius: 20px;
        position: absolute;
        left: 0px;
        top: 0px;
        right: 0px;
        bottom: 0px;
        background-image: linear-gradient(75deg, #f8bbc5, #d7f2fa);
        opacity: 0.9;
        transition: all 0.5s ease-in-out;
        z-index: -1;
      }
      &:hover::after {
        opacity: 0.99;
      }
      .air-card__btn {
        width: 150px;
      }
    }
  `;

  const international = () => {
    return (
      <>
        {props.searchResult.map((item: any, index: number) => (
          <div data-aos="zoom-in" key={index} className="d-flex justify-content-center">
            <div className="air-card row d-flex align-items-center w-50 my-5 px-4" key={index}>
              <div className="air-card__logo col-lg-6 d-flex flex-column align-items-center text-center">
                <Flickr query={`${item.children[0].innerHTML} airline`} />
                <div className="row my-4 w-100 fs-6">
                  <div className="air-card__airline-en col-6" id={"airline"}>
                    {item.children[0].innerHTML}
                  </div>
                  <div className="air-card__airline-kr col-6">{item.children[1].innerHTML}</div>
                </div>
              </div>

              <div className="air-card__content col-lg-6 d-flex flex-wrap justify-content-center  text-center">
                <div className="air-card__flight d-flex align-items-center mt-4 fs-5 w-100 justify-content-evenly">
                  <div>항공편&nbsp;</div>
                  <div id={"airCode"}>{item.children[11].innerHTML}</div>
                </div>
                <div className="d-flex flex-wrap justify-content-center align-items-center">
                  <div className="row d-flex justify-content-center  my-4 w-100">
                    <div className="air-card__departure col-4 text-nowrap" id={"departure"}>
                      {item.children[2].innerHTML}
                    </div>
                    <FontAwesomeIcon className="col-2" icon={faArrowRight} size={"lg"} />
                    <div className="air-card__destination col-4" id={"destination"}>
                      {item.children[4].innerHTML}
                    </div>
                  </div>
                  <div className="row w-100 my-2">
                    <div className="col-lg-12 col-6 mt-2">DATE TIME</div>
                    <div className="col-lg-12 col-6 mt-2" id={"dateTime"}>
                      {props.date}
                    </div>
                  </div>
                  <div className="row w-100">
                    <div className="air-card__start-date col-6">
                      <div>
                        <div className="my-2">출발시간</div>
                        <div id={"startDate"}>{item.children[16].innerHTML}</div>
                      </div>
                    </div>
                    <div className="air-card__end-date col-6">
                      <div className="my-2">도착시간</div>
                      <div id={"endDate"}>미정</div>
                    </div>
                  </div>
                </div>
                <div className="my-4">
                  <button className="air-card__btn btn btn-danger" onClick={clickTicketingBtn}>
                    예매하기
                  </button>
                </div>
              </div>
            </div>
            <div className="air-price"></div>
          </div>
        ))}
      </>
    );
  };

  const domestic = () => {
    return (
      <>
        {props.searchResult.map((item: any, index: number) => (
          <div data-aos="zoom-in" key={index} className="d-flex justify-content-center">
            <div className="air-card row d-flex align-items-center w-50 my-5 px-4" key={index}>
              <div className="air-card__logo col-lg-6 d-flex flex-column align-items-center text-center">
                <Flickr query={`${item.children[0].innerHTML} airline`} />
                <div className="row my-4 w-100 fs-6">
                  <div className="air-card__airline-en col-6" id={"airline"}>
                    {item.children[0].innerHTML}
                  </div>
                  <div className="air-card__airline-kr col-6">{item.children[1].innerHTML}</div>
                </div>
              </div>

              <div className="air-card__content col-lg-6 d-flex flex-wrap justify-content-center  text-center">
                <div className="air-card__flight d-flex align-items-center mt-4 fs-5 w-100 justify-content-evenly">
                  <div>항공편&nbsp;</div>
                  <div id={"airCode"}>{item.children[8].innerHTML}</div>
                </div>
                <div className="d-flex flex-wrap justify-content-center">
                  <div className="row d-flex justify-content-center my-4 w-100 align-items-center">
                    <div className="air-card__departure col-4 text-nowrap" id={"departure"}>
                      {item.children[17].innerHTML}
                    </div>
                    <FontAwesomeIcon className="col-2" icon={faArrowRight} size={"lg"} />
                    <div className="air-card__destination col-4 text-nowrap" id={"destination"}>
                      {item.children[2].innerHTML}
                    </div>
                  </div>
                  <div className="row w-100 my-2">
                    <div className="col-lg-12 col-6">DATE TIME</div>
                    <div className="col-lg-12 col-6" id={"dateTime"}>
                      {props.date}
                    </div>
                  </div>
                  <div className="row w-100">
                    <div className="air-card__start-date col-6">
                      <div>
                        <div className="my-2">출발시간</div>
                        <div id={"startDate"}>{item.children[10].innerHTML}</div>
                      </div>
                    </div>
                    <div className="air-card__end-date col-6">
                      <div className="my-2">도착시간</div>
                      <div id={"endDate"}>{item.children[4].innerHTML}</div>
                    </div>
                  </div>
                </div>
                <div className="my-4">
                  <button className="air-card__btn btn btn-danger" onClick={clickTicketingBtn}>
                    예매하기
                  </button>
                </div>
              </div>
            </div>
            <div className="air-price"></div>
          </div>
        ))}
      </>
    );
  };

  useEffect(() => {
    AOS.init();
  }, []);

  const navigate = useNavigate();

  const clickTicketingBtn = (event: any) => {
    const airline: any = event.currentTarget.parentNode.parentNode.parentNode.querySelector("#airline");
    const airCode: any = event.currentTarget.parentNode.parentNode.querySelector("#airCode");
    const distance: any = location.state.distance;
    const departure: any = event.currentTarget.parentNode.parentNode.querySelector("#departure");
    const depCode: any = location.state.departure;
    const destination: any = event.currentTarget.parentNode.parentNode.querySelector("#destination");
    const desCode: any = location.state.destination;
    const dateTime: any = event.currentTarget.parentNode.parentNode.querySelector("#dateTime");
    const startDate: any = event.currentTarget.parentNode.parentNode.querySelector("#startDate");
    const endDate: any = event.currentTarget.parentNode.parentNode.querySelector("#endDate");
    const passengers: any = location.state.passengers;
    const seatType: any = location.state.seatType;

    navigate("/payment", {
      state: {
        airline: airline.innerText,
        airCode: airCode.innerText,
        distance: distance,
        departure: departure.innerText,
        depCode: depCode,
        destination: destination.innerText,
        desCode: desCode,
        dateTime: dateTime.innerText,
        startDate: startDate.innerText,
        endDate: endDate.innerText,
        passengers: {
          adult: passengers.adult,
          youth: passengers.youth,
          child: passengers.child,
        },
        seatType: seatType,
      },
    });
  };

  return (
    <div className="pt-5">
      <NowDate></NowDate>
      <Wrapper className="container mt-5">{props.isDomestic ? domestic() : international()}</Wrapper>
      <div className="row d-flex justify-content-center">
        {props.isNextPage && (
          <button
            className="btn btn-danger btn-lg w-50"
            style={{ maxWidth: "600px", minWidth: "250px" }}
            onClick={props.clickMoreBtn}
          >
            {props.isLoading ? (
              <div className="spinner-border text-white" role="status">
                <span className="visually-hidden">Loading...</span>
              </div>
            ) : (
              <>MORE</>
            )}
          </button>
        )}
      </div>
    </div>
  );
};
export default SearchView;
