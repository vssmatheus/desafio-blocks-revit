import React from "react";
import * as S from "./Layout.style";
import Header from "./Header/Header.component";
import Footer from "./Footer/Footer.component";

const Layout = ({ children }) => {
  return (
    <S.Container>
      <Header />
      <div className="mainContent">{children}</div>
      <Footer />
    </S.Container>
  );
};

export default Layout;
