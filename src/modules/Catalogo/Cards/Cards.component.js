import React from "react";
import { PropTypes } from "prop-types";
import * as S from "./Cards.style";
import CardCatalogo from "../CardCatalogo/CardCatalogo.component";

const Cards = ({ data }) => {
  return (
    <>
      <S.Title>Resultados</S.Title>
      <S.Container>
        <CardCatalogo />
      </S.Container>
    </>
  );
};

Cards.propTypes = {
  data: PropTypes.array,
};

export default Cards;
