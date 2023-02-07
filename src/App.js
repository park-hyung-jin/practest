import logo from "./logo.svg";
import "./App.css";
import { useEffect, useState } from "react";
import styled from "styled-components";
import { isBrowser } from "react-device-detect";
import Browser from "./browser/browser";
import Mobile from "./mobile/mobile";
import GlobalStyle from "./styles/globalStyle";

function App() {
  const renderPage = () => {
    if (isBrowser) {
      return <Browser />;
    } else {
      return <Mobile />;
    }
  };

  return (
    <div>
      <div>{renderPage()}</div>
      <GlobalStyle />
    </div>
  );
}
export default App;
