import React from "react";
import { PropTypes } from "prop-types";
import * as S from "./HeaderBlock.style";

const HeaderBlock = ({title}) => {
  return (
    <S.Container>
      <h2>{title}</h2>
    </S.Container>
  );
};

HeaderBlock.propTypes = {
    title: PropTypes.string,
  };
  

export default HeaderBlock;
