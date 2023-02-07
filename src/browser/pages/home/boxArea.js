import styled from "styled-components";
import BoxPage1 from "./boxPage1/boxPage1";
import BoxPage2 from "./boxPage2/boxPage2";
import BoxPage3 from "./boxPage3/boxPage3";
import BoxPage4 from "./boxPage4/boxPage4";

const { default: HomeBox } = require("browser/components/HomeBox/homeBox");
const { default: MainNavBox } = require("browser/components/mainNavBox");

const BoxArea = () => {
  return (
    <div>
      <BoxPage1 />
      <BoxPage2 />
      <BoxPage3 />
      <BoxPage4 />
    </div>
  );
};

export default BoxArea;
