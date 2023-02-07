import { searchFocusState } from "atoms/searchFocusState";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useRecoilState, useSetRecoilState } from "recoil";
import styled from "styled-components";
import { navState } from "../../atoms/atoms";
import Browser from "../browser";
import Nav from "./nav";
import { RxHamburgerMenu } from "react-icons/rx";
import { BsSearch } from "react-icons/bs";
const Header = () => {
  const navigate = useNavigate();
  const pathName = window.location.pathname;
  // console.log(window.location.pathname);

  const [show, setShow] = useRecoilState(navState);
  const setSearchFocus = useSetRecoilState(searchFocusState);

  const onClickShow = () => {
    setShow((prev) => !prev);
  };

  const clickSearch = () => {
    setSearchFocus((prev) => !prev);
  };
  return (
    <HeaderArea>
      <HeaderWrap>
        <div>
          <img src={""} alt="NO_IMAGE" />
        </div>
        <HeaderUlArea>
          <li onClick={clickSearch}>
            <BsSearch />
          </li>
          <HeaderUlAreaPage
            pathName={pathName}
            path="/1"
            onClick={() => navigate("/1")}
          >
            페이지1
          </HeaderUlAreaPage>
          <HeaderUlAreaPage
            pathName={pathName}
            path="/2"
            onClick={() => navigate("/2")}
          >
            페이지2
          </HeaderUlAreaPage>
          <HeaderUlAreaPage
            pathName={pathName}
            path="/3"
            onClick={() => navigate("/3")}
          >
            페이지3
          </HeaderUlAreaPage>
          <HeaderUlAreaPage
            pathName={pathName}
            path="/4"
            onClick={() => navigate("/4")}
          >
            페이지4
          </HeaderUlAreaPage>
          <HeaderUlAreaPage
            pathName={pathName}
            path="/5"
            onClick={() => navigate("/5")}
          >
            페이지5
          </HeaderUlAreaPage>
          {!show ? (
            <HeaderUiAreaMenu onClick={onClickShow}>
              <RxHamburgerMenu />
            </HeaderUiAreaMenu>
          ) : (
            <div onClick={onClickShow}>X</div>
          )}
        </HeaderUlArea>
      </HeaderWrap>
    </HeaderArea>
  );
};

const HeaderArea = styled.div`
  width: 1000px;
  display: flex;
  justify-content: center;
  background-color: white;
  margin-left: auto;
  margin-right: auto;
  padding: 1.75em 0 1.0925em 0;
`;

const HeaderWrap = styled.div`
  width: 800px;
  background-color: white;

  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const HeaderUlArea = styled.ul`
  display: flex;
  gap: 10px;
`;

const HeaderUlAreaPage = styled.li`
  color: ${({ pathName, path }) => (pathName === path ? "blue" : "")};
`;

const HeaderUiAreaMenu = styled.li``;
export default Header;
