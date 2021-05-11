import React from "react";
import styled from "styled-components";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

function ImgCarousel() {
  let settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
  };

  return (
    <Carousel {...settings}>
      <Wrap>
        <img src="/disney-images/slider-badging.jpg" />
      </Wrap>
      <Wrap>
        <img src="/disney-images/slider-badag.jpg" />
      </Wrap>
      <Wrap>
        <img src="/disney-images/slider-scales.jpg" />
      </Wrap>
      <Wrap>
        <img src="/disney-images/slider-scale.jpg" />
      </Wrap>
    </Carousel>
  );
}

export default ImgCarousel;

// now you can style the slider itself
const Carousel = styled(Slider)`
  margin-top: 20px;

  ul li button {
    &:before {
      font-size: 10px;
      color: rgb(150, 158, 171);
    }
  }
  /* list buttons underneath the slider */

  /* when the class "slick-active" is added to li, add this effect*/
  /* this effect overwrites the default react-slick css */
  li.slick-active button::before {
    color: white;
  }
  /* next button on the right of the slider */

  .slick-list {
    overflow: visible;
    /* this shows the box shadow style more and shows multiple options on the slider */
  }

  button {
    z-index: 1;
  }
  /* put buttons on top of slider */
`;

const Wrap = styled.div`
  cursor: pointer;
  img {
    border: 4px solid transparent;
    /* transparent is the color */

    width: 100%;
    height: 100%;
    border-radius: 4px;
    box-shadow: rgb(0 0 0 / 69%) 0px 26px 30px -10px,
      rgb(0 0 0 / 73%) 0px 16px 10px -10px;
    /* box shadow style  */
    transition-duration: 300ms;
    /* hover effect takes 300ms */

    &:hover {
      border: 4px solid white;
    }
  }
`;
