import HomeBox from "browser/components/HomeBox/homeBox";
import MainNavBox from "browser/components/mainNavBox";
import styled from "styled-components";
import Info1 from "./info1";

const BoxPage1 = () => {
  return (
    <div>
      <MainNavBox title="page1" link="/1" />
      <HomeBox>
        <Info1 />
      </HomeBox>
    </div>
  );
};

export default BoxPage1;
