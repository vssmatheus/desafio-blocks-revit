import React from "react";
import * as S from "./Footer.style";

const Footer = () => {
  return (
    <S.Container>
      <S.FooterContainer>
        <S.ItemLink>Sobre</S.ItemLink>
        <S.ItemLink>FAQ</S.ItemLink>
        <S.ItemLink>Termos de uso</S.ItemLink>
        <S.ItemLink>Politica de privacidade</S.ItemLink>
      </S.FooterContainer>
    </S.Container>
  );
};

export default Footer;