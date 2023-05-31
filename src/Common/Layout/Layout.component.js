import React from "react";
import * as S from "./Layout.style";
import Header from "./Header/Header.component";
import Footer from "./Footer/Footer.component";
import BannerPremium from "./BannerPremium/BannerPremium.component";

const Layout = ({ children }) => {
  return (
    <S.Container>
      <BannerPremium />
      <Header />
      <div className="mainContent">
        {children}
      </div>
      <Footer />
    </S.Container>
  );
};

export default Layout;
