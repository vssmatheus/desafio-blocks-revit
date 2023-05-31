import React from "react";
import { PropTypes } from "prop-types";
import * as S from "./CardCatalogo.style";
import { ArrowOutward } from "@mui/icons-material";
import img from '../../../assets/logo-blocks.png';

const CardCatalogo = ({ data }) => {
  return (
    <S.Container>
      <img src={img} alt="ImageItem" />
      <S.CardFooter>
        <span>
          Lorem Ipsum is sLorem Ipsum is simply Lorem Ipsum is sLorem Ipsum is
          simply
        </span>
        <ArrowOutward />
      </S.CardFooter>
    </S.Container>
  );
};

CardCatalogo.propTypes = {
  data: PropTypes.array,
};

export default CardCatalogo;
