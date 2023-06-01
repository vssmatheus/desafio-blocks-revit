import React, { useState } from "react";
import * as S from "./BannerPremium.style";
import Button from "../../Button/Button.component";
import { ArrowForward, CloseOutlined } from "@mui/icons-material";

const BannerPremium = () => {
  const [closeBanner, setCloseBanner] = useState(false);

  return (
    <>
      {!closeBanner && (
        <S.Container>
          <S.Close onClick={() => setCloseBanner(true)}>Fechar <CloseOutlined /></S.Close>
          <span>
            Não limite sua criatividade, junte-se a familia Blocks por apenas{" "}
            <strong>BRL 19,99</strong>
          </span>
          <Button name="Quero ser Premium" icon={ArrowForward} />
        </S.Container>
      )}
    </>
  );
};

export default BannerPremium;
