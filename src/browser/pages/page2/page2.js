import Carousel from "browser/components/carousel";
import carouselItem from "./carouselItem";

export default function Page2() {
  return (
    <div>
      <Carousel carouselMap={carouselItem} />
    </div>
  );
}
