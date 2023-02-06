import { Component } from "react";
import Slider from "react-slick";
import styled from "styled-components";

const StyledWrap = styled.div`
  .img-box {
    border-radius: 20px;
  }
  .slick-slide {
    margin: 0 10px;
  }
`;

export default class FooterSlider extends Component {
  render() {
    const settings = {
      variableWidth: true,
      dots: false,
      infinite: true,
      slidesToShow: 4,
      slidesToScroll: 1,
      autoplay: true,
      speed: 6000,
      autoplaySpeed: 1000,
      cssEase: "linear",
      arrows: false,
    };
    return (
      <StyledWrap>
        <Slider {...settings}>
          <div>
            <img
              src={process.env.PUBLIC_URL + "/images/bg-rome-normal.jpg"}
              width="200"
              alt="rome"
              className="img-box"
            />
          </div>
          <div>
            <img
              src={process.env.PUBLIC_URL + "/images/bg-japan-normal.jpg"}
              width="200"
              alt="japan"
              className="img-box"
            />
          </div>
          <div>
            <img
              src={process.env.PUBLIC_URL + "/images/bg-kempen-normal.jpg"}
              width="200"
              alt="kempen"
              className="img-box"
            />
          </div>
          <div>
            <img
              src={process.env.PUBLIC_URL + "/images/bg-mountain-normal.jpg"}
              width="200"
              alt="mountain"
              className="img-box"
            />
          </div>
          <div>
            <img
              src={process.env.PUBLIC_URL + "/images/bg-river-normal.jpg"}
              width="200"
              alt="river"
              className="img-box"
            />
          </div>
          <div>
            <img
              src={process.env.PUBLIC_URL + "/images/bg-india-normal.jpg"}
              width="200"
              alt="india"
              className="img-box"
            />
          </div>
          <div>
            <img
              src={process.env.PUBLIC_URL + "/images/bg-street-normal.jpg"}
              width="200"
              alt="street"
              className="img-box"
            />
          </div>
          <div>
            <img
              src={process.env.PUBLIC_URL + "/images/bg-street2-normal.jpg"}
              width="200"
              alt="street"
              className="img-box"
            />
          </div>
          <div>
            <img
              src={process.env.PUBLIC_URL + "/images/bg-japan2-normal.jpg"}
              width="200"
              alt="street"
              className="img-box"
            />
          </div>
          <div>
            <img
              src={process.env.PUBLIC_URL + "/images/bg-architecture-normal.jpg"}
              width="200"
              alt="street"
              className="img-box"
            />
          </div>
          <div>
            <img
              src={process.env.PUBLIC_URL + "/images/bg-blonde-normal.jpg"}
              width="200"
              alt="street"
              className="img-box"
            />
          </div>
          <div>
            <img
              src={process.env.PUBLIC_URL + "/images/bg-palace-normal.jpg"}
              width="200"
              alt="street"
              className="img-box"
            />
          </div>
          <div>
            <img
              src={process.env.PUBLIC_URL + "/images/bg-santorini-normal.jpg"}
              width="200"
              alt="street"
              className="img-box"
            />
          </div>
          <div>
            <img
              src={process.env.PUBLIC_URL + "/images/bg-stone-normal.jpg"}
              width="200"
              alt="street"
              className="img-box"
            />
          </div>
          <div>
            <img
              src={process.env.PUBLIC_URL + "/images/bg-jeju-normal.jpg"}
              width="200"
              alt="street"
              className="img-box"
            />
          </div>
          <div>
            <img
              src={process.env.PUBLIC_URL + "/images/bg-dadaepo-normal.jpg"}
              width="200"
              alt="street"
              className="img-box"
            />
          </div>
        </Slider>
      </StyledWrap>
    );
  }
}
