import React from "react";
import { PropTypes } from "prop-types";
import * as S from "./Button.style";

const Button = ({ name, icon }) => {
  const IconComponent = icon;

  return (
    <S.Container>
      <span>{name}</span>
      {IconComponent && <IconComponent />}
    </S.Container>
  );
};

Button.propTypes = {
  name: PropTypes.string,
  icon: PropTypes.any,
};

export default Button;
