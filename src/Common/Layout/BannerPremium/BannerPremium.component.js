import React from "react";
import * as S from "./BannerPremium.style";
import Button from "../../Button/Button.component";
import { ArrowForward } from "@mui/icons-material";

const BannerPremium = () => {
  return (
    <S.Container>
      <span>
        Não limite sua criatividade, junte-se a familia Blocks por apenas {' '}
        <strong>BRL 19,99</strong>
      </span>
      <Button name="Quero ser Premium" icon={ArrowForward} />
    </S.Container>
  );
};

export default BannerPremium;
