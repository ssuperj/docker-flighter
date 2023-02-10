import { useEffect, useState } from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import NowDate from "./ResultInput";
import AOS from "aos";
import "aos/dist/aos.css";
import Rellax from "rellax";
import Decoration from "./Decoration";

const SearchView = (props: any) => {
  const Wrapper = styled.div`
    .air-card {
      border: 0.25px solid grey;
      border-radius: 20px;
      min-width: 300px;
      box-shadow: 2px 2px 2px 2px grey;
      position: relative;
      background-image: linear-gradient(75deg, #add8e633, #80808033);
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
        background-image: linear-gradient(75deg, lightblue, magenta);
        opacity: 0;
        transition: all 1s ease-in-out;
        z-index: -1;
      }
      &:hover::after {
        opacity: 0.1;
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
          <div>
            <div></div>
            <div key={index}>
              <div className="">{item.children[0].innerHTML}</div>
              <div>{item.children[1].innerHTML}</div>
              <div>{item.children[2].innerHTML}</div>
              <div>{item.children[3].innerHTML}</div>
              <div>{item.children[4].innerHTML}</div>
              <div>{item.children[5].innerHTML}</div>
              <div>{item.children[9].innerHTML}</div>
              <div>{item.children[11].innerHTML}</div>
              <div>{item.children[16].innerHTML}</div>
            </div>
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
                <img width="200px" src={process.env.PUBLIC_URL + "/images/Korean-Air-Logo-1024x640.png"} alt="logo" />
                <div className="row my-4 w-100 fs-6">
                  <div className="air-card__airline-en col-6">{item.children[0].innerHTML}</div>
                  <div className="air-card__airline-kr col-6">{item.children[1].innerHTML}</div>
                </div>
              </div>

              <div className="air-card__content col-lg-6 d-flex flex-wrap justify-content-center  text-center">
                <div className="air-card__flight d-flex align-items-center my-4 fs-5">
                  <div>항공편&nbsp;</div>
                  <div>{item.children[8].innerHTML}</div>
                </div>
                <div className="d-flex flex-wrap justify-content-center">
                  <div className="row d-flex justify-content-center my-4 w-100">
                    <div className="air-card__departure col-4 text-nowrap">{item.children[17].innerHTML}</div>
                    <FontAwesomeIcon className="col-2" icon={faArrowRight} size={"lg"} />
                    <div className="air-card__destination col-4">{item.children[2].innerHTML}</div>
                  </div>
                  <div className="row w-100 my-2">
                    <div className="col-lg-12 col-6">DATE TIME</div>
                    <div className="col-lg-12 col-6">{props.date}</div>
                  </div>
                  <div className="row w-100">
                    <div className="air-card__start-date col-6">
                      <div>
                        <div className="my-2">출발시간</div>
                        <div>{item.children[10].innerHTML}</div>
                      </div>
                    </div>
                    <div className="air-card__end-date col-6">
                      <div className="my-2">도착시간</div>
                      <div>{item.children[4].innerHTML}</div>
                    </div>
                  </div>
                </div>
                <div className="my-4">
                  <button className="air-card__btn btn btn-danger">예매하기</button>
                </div>
              </div>
            </div>
            <div className="air-price"></div>
          </div>
        ))}
      </>
    );
  };

  const [empty, setEmpty] = useState(true);

  useEffect(() => {
    AOS.init();

    new Rellax(".rellax", {
      speed: -10,
      center: false,
      round: true,
      vertical: true,
      horizontal: false,
    });
  }, []);

  useEffect(() => {
    props.searchResult.length === 0 ? setEmpty(true) : setEmpty(false);
    console.log(props.searchResult);
  }, [props.searchResult]);

  return (
    <>
      <Decoration />
      <NowDate></NowDate>
      <Wrapper className="container mt-5">{empty ? <>값이 없습니다.</> : domestic()}</Wrapper>
    </>
  );
};
export default SearchView;
