import HomeBox from "browser/components/HomeBox/homeBox";
import MainNavBox from "browser/components/mainNavBox";
import styled from "styled-components";
import Info4 from "./info4";

const BoxPage4 = () => {
  return (
    <div>
      <MainNavBox title="page4" link="/4" />
      <HomeBox>
        <Info4 />
      </HomeBox>
    </div>
  );
};

export default BoxPage4;
