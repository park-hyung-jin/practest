import styled from "styled-components";

export default function CarouselItem({ cItem }) {
  return (
    <div>
      <div>
        <CarouselImg>{cItem}</CarouselImg>
      </div>
    </div>
  );
}

const CarouselImg = styled.div``;
