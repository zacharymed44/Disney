import React from "react";
import styled from "styled-components";
import Carousel from "../components/ImgCarousel";
import Viewers from "../components/Viewers";
import Movies from "../components/Movies";

function Home() {
  return (
    <Container>
      <Carousel />
      <Viewers />
      <Movies />
    </Container>
  );
}

export default Home;

const Container = styled.main`
  min-height: calc(100vh - 70px);
  padding: 0 calc(3.5vw + 5px);
  /* topbot = 0, left/right = calc */
  position: relative;
  overflow-x: hidden;

  &:before {
    background: url("/disney-images/home-background.png") center center / cover
      no-repeat fixed;
    /* center center = vertical and horizontal center */
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: -1;
  }
`;
