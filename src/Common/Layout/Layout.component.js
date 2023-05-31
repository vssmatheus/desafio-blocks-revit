import React from "react";
import * as S from "./Layout.style";
import Header from "./Header/Header.component";

const Layout = ({ children }) => {
  return (
    <S.Container>
      <Header />
      <div>{children}</div>
    </S.Container>
  );
};

export default Layout;
