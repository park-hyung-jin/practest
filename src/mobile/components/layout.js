import Header from "./header";
import Header2 from "../../browser/components/header";
import Footer from "./footer";
import styled from "styled-components";

const Layout = ({ children }) => {
  return (
    <LayoutArea>
      <Header />
      <BodyArea>{children}</BodyArea>
      <Footer />
    </LayoutArea>
  );
};

const LayoutArea = styled.div`
  width: 100%;
  height: 100vh;
  background-color: red;
  display: flex;
  flex-direction: column;
`;

const BodyArea = styled.div`
  flex: 1;
`;
export default Layout;
