import HomeBox from "browser/components/HomeBox/homeBox";
import MainNavBox from "browser/components/mainNavBox";
import styled from "styled-components";
import Info2 from "./info2";

const BoxPage2 = () => {
  return (
    <div>
      <MainNavBox title="page2" link="/2" />
      <HomeBox>
        <Info2 />
      </HomeBox>
    </div>
  );
};

export default BoxPage2;
