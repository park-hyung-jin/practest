import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import React from "react";
import Slider from "react-slick";
import styled from "styled-components";
import CarouselItem from "./carouselItem";
import NextArrow from "./Arrow/nextArrow";
import PrevArrow from "./Arrow/prevArrow";
import SlickCarousel from "./slickCarousel";
import "./slick-css.css";

// 마운트 될 때
const settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  fade: true,
  nextArrow: <NextArrow />,
  prevArrow: <PrevArrow />,
};

export default function Carousel2({ carouselMap }) {
  return (
    <Area>
      <SlickCarousel
        carouselMap={carouselMap}
        settings={settings}
        dotsClass="slick-css"
      />
    </Area>
  );
}

const Area = styled.div`
  width: 300px;
  margin-left: auto;
  margin-right: auto;
`;
