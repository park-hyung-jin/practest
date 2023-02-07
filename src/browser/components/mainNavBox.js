import { Link } from "react-router-dom";
import styled from "styled-components";

export default function MainNavBox({ title, link = "" }) {
  return (
    <MainNavBoxArea>
      <MainNavBoxWrapper>
        <MainNavBoxImoWrapper>
          <MainNavBoxImo />
          <Title>{title}</Title>
        </MainNavBoxImoWrapper>
        <Link to={link}>+ 더보기</Link>
      </MainNavBoxWrapper>
    </MainNavBoxArea>
  );
}

const MainNavBoxArea = styled.div`
  display: flex;
  justify-content: center;
`;

const MainNavBoxWrapper = styled.div`
  display: flex;
  width: 945px;
  background-color: white;
  display: flex;
  justify-content: space-between;
`;

const MainNavBoxImoWrapper = styled.div`
  display: flex;
  align-items: center;
`;
const MainNavBoxImo = styled.div`
  width: 6px;
  height: 6px;
  background-color: black;
`;

const Title = styled.span`
  display: inline-block;
`;
