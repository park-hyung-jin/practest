import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";
import styled from "styled-components";

function App() {
  const [changeColor, setChangeColor] = useState(1);

  const backColor = () => {
    setChangeColor((prev) => prev + 1);
  };
  return (
    <ColorArea>
      <button onClick={backColor}>{changeColor}</button>
    </ColorArea>
  );
}

const ColorArea = styled.div``;
export default App;
