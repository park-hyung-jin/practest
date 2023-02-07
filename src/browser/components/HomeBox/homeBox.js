import styled from "styled-components";

const HomeBox = ({ children, imgUrl, bkColor, paddingNum }) => {
  return (
    <HomeBoxArea
      imgUrl={imgUrl}
      bkColor={(bkColor = "#EAEAEA")}
      paddingNum={(paddingNum = "2.254em 0em 2.58em 0em")}
    >
      <HomeBoxWrapper>{children}</HomeBoxWrapper>
    </HomeBoxArea>
  );
};

const HomeBoxArea = styled.div`
  width: 100%;
  /* background-image: url(${(props) => props.imgUrl}); ✨ 2 */
  background: ${({ imgUrl }) => `url(${imgUrl}) no-repeat top center`};
  /* background-color: ${({ bkColor }) => bkColor}; */
  /* background-image: linear-gradient(45deg, #000, #f00 80%, #fff); */
  padding: ${({ paddingNum }) => paddingNum};
  display: flex;
  justify-content: center;
  align-items: center;
`;

const HomeBoxWrapper = styled.div`
  width: 945px;
  background-color: blue;
`;
export default HomeBox;
