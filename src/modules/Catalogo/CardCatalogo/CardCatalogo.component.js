import React from "react";
import { PropTypes } from "prop-types";
import * as S from "./CardCatalogo.style";
import { ArrowOutward } from "@mui/icons-material";
import img from '../../../assets/img-lustre.png';

const CardCatalogo = ({ data, description }) => {
  return (
    <S.Container>
      <img src={img} alt="ImageItem" />
      <S.CardFooter>
        <span>
          {description}
        </span>
        <ArrowOutward />
      </S.CardFooter>
    </S.Container>
  );
};

CardCatalogo.propTypes = {
  data: PropTypes.array,
  description: PropTypes.string,
};

export default CardCatalogo;
