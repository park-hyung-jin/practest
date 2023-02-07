import styled from "styled-components";

const ImgBox = ({ sea, children }) => {
  return (
    <ImgBoxArea>
      <div>
        <div>
          <ImgWrapper src={sea} alt="No Image" />
        </div>
        {children}
      </div>
    </ImgBoxArea>
  );
};

const ImgBoxArea = styled.div`
  /* max-width: 100%; */
  position: relative;
  display: flex;
  justify-content: center;
`;

const ImgWrapper = styled.img`
  width: 1000px;
  height: 50vh;
`;

export default ImgBox;
