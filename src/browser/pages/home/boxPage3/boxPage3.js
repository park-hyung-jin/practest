import HomeBox from "browser/components/HomeBox/homeBox";
import MainNavBox from "browser/components/mainNavBox";
import styled from "styled-components";
import Info3 from "./info3";

const BoxPage3 = () => {
  return (
    <div>
      <MainNavBox title="page3" link="/3" />
      <HomeBox>
        <Info3 />
      </HomeBox>
    </div>
  );
};

export default BoxPage3;
