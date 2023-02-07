import Carousel from "browser/components/carousel";
import Carousel2 from "browser/components/carousel2";

export default function Page3() {
  const carouselItem = [
    { id: 1, cItem: <div>hi</div> },
    { id: 2, cItem: <div>hihi</div> },
    { id: 3, cItem: <img src={""} alt="NO IMAGE" /> },
  ];
  return (
    <div>
      <Carousel2 carouselMap={carouselItem} />
    </div>
  );
}
