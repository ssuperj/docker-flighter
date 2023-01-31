import { Component } from "react";
import Slider from "react-slick";
import styled from "styled-components";

const StyledWrap = styled.div`
  .slick-dots {
    bottom: -40px;
  }
`;

export default class FooterSlider extends Component {
  render() {
    const settings = {
      dots: false,
      infinite: true,
      slidesToShow: 5,
      slidesToScroll: 1,
      autoplay: true,
      speed: 5000,
      autoplaySpeed: 0,
      cssEase: "linear",
    };
    return (
      <StyledWrap>
        <Slider {...settings}>
          <div>
            <img src={process.env.PUBLIC_URL + "/images/bg-rome-normal.jpg"} width="220" alt="" />
          </div>
          <div>
            <img src={process.env.PUBLIC_URL + "/images/bg-japan-normal.jpg"} width="220" alt="" />
          </div>
          <div>
            <img src={process.env.PUBLIC_URL + "/images/bg-kempen-normal.jpg"} width="220" alt="" />
          </div>
          <div>
            <img src={process.env.PUBLIC_URL + "/images/bg-mountain-normal.jpg"} width="220" alt="" />
          </div>
          <div>
            <img src={process.env.PUBLIC_URL + "/images/bg-river-normal.jpg"} width="220" alt="" />
          </div>
          <div>
            <img src={process.env.PUBLIC_URL + "/images/bg-india-normal.jpg"} width="220" alt="" />
          </div>
          <div>
            <img src={process.env.PUBLIC_URL + "/images/bg-street-normal.jpg"} width="220" alt="" />
          </div>
        </Slider>
      </StyledWrap>
    );
  }
}
