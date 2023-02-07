import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import Slider from "react-slick/lib/slider";
import NextArrow from "./Arrow/nextArrow";
import PrevArrow from "./Arrow/prevArrow";
import CarouselItem from "./carouselItem";

const SlickCarousel = (props) => {
  return (
    <div>
      <Slider {...props.settings} dotsClass={props.dotsClass}>
        {props.carouselMap?.map((cItem) => {
          return <CarouselItem cItem={cItem.cItem} key={cItem.id} />;
        })}
      </Slider>
    </div>
  );
};

export default SlickCarousel;
