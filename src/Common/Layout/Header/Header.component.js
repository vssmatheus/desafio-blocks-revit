import React from "react";
import * as S from "./Header.style";
import ImageLogo from '../../../assets/logo-blocks.png'

const Header = () => {
  return (
    <S.Container>
      <img src={ImageLogo} alt='Logo Blocks'/>
    </S.Container>
  );
};

export default Header;
