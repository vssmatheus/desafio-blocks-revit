import React from "react";
import { PropTypes } from "prop-types";
import * as S from "./Cards.style";

const Cards = ({ data }) => {
  return (
    <S.Container>
      <>cards</>
    </S.Container>
  );
};

Cards.propTypes = {
  data: PropTypes.array,
};

export default Cards;
