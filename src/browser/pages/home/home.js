import styled from "styled-components";
import sea from "assets/sea.jpeg";
import ImgBox from "browser/components/imgBox";
import useFocus from "hooks/useFocus";
import MainNavBox from "browser/components/mainNavBox";
import HomeBox from "browser/components/HomeBox/homeBox";
import BoxArea from "./boxArea";
const Home = () => {
  // const [inputFocus, setSearchFocus] = useFocus();
  return (
    <HomeArea>
      <ImgBox sea={sea}>
        <ImgBoxBtn>+ 버튼</ImgBoxBtn>
      </ImgBox>
      {/* <Input
        ref={inputFocus}
        onBlur={() => {
          setSearchFocus((focus) => !focus);
        }}
      /> */}
      {/* <MainNavBox title="page1" link="/1" />
      <HomeBox>
        <Box>hello</Box>
      </HomeBox>
      <MainNavBox title="page2" link="/2" />
      <HomeBox>
        <Box>hello</Box>
      </HomeBox>
      <MainNavBox title="page3" link="/3" />
      <HomeBox>
        <Box>hello</Box>
      </HomeBox>
      <MainNavBox title="page4" link="/4" />
      <HomeBox>
        <Box>hello</Box>
      </HomeBox> */}
      <BoxArea />
    </HomeArea>
  );
};

const HomeArea = styled.div``;

const ImgBoxBtn = styled.button`
  position: absolute;
  top: 50%;
  left: 50%;
`;

// const Input = styled.input`
//   position: absolute;
//   top: 60%;
//   left: 50%;
// `;

// const Box = styled.div`
//   display: flex;
//   justify-content: center;
//   width: 945px;
//   background-color: yellow;
// `;

export default Home;
