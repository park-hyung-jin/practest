import { useRecoilState } from "recoil";
import styled from "styled-components";
import { navState } from "../../atoms/atoms";

const Nav = () => {
  return <NavArea>hello</NavArea>;
};

export default Nav;

const NavArea = styled.div`
  background-color: white;
  width: 100%;
  height: 100%;
  position: absolute;
  z-index: 1;
  display: flex;
  flex-direction: column;
`;
