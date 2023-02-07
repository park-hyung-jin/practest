import { Route, Routes } from "react-router-dom";
import { useRecoilState } from "recoil";
import styled from "styled-components";
import { navState } from "../atoms/atoms";
import Layout from "./components/layout";
import Nav from "./components/nav";
import Home from "./pages/home/home";
import Page1 from "./pages/page1/page1";
import Page2 from "./pages/page2/page2";
import Page3 from "./pages/page3/page3";
import Page4 from "./pages/page4/page4";
import Page5 from "./pages/page5/page5";

const Browser = () => {
  const [show, setShow] = useRecoilState(navState);
  return (
    <BrowserArea>
      <Layout>
        <Routes>
          <Route path="/1" element={<Page1 />} />
          <Route path="/2" element={<Page2 />} />
          <Route path="/3" element={<Page3 />} />
          <Route path="/4" element={<Page4 />} />
          <Route path="/5" element={<Page5 />} />
          <Route path="/" element={<Home />} />
        </Routes>
        {show && <Nav />}
      </Layout>
    </BrowserArea>
  );
};

const BrowserArea = styled.div`
  position: relative;
`;
export default Browser;
