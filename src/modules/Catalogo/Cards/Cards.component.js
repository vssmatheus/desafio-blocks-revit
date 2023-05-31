import React, { useEffect, useState } from "react";
import { PropTypes } from "prop-types";
import * as S from "./Cards.style";
import CardCatalogo from "../CardCatalogo/CardCatalogo.component";
import { useGetUsers } from "../Hooks";
import useForceUpdate from "../Hooks/useForceUpdate";

const Cards = () => {
  const [isEndOfPage, setIsEndOfPage] = useState(false);
  const [take, setTake] = useState(10);
  const data = useGetUsers(take);
  const forceUpdate = useForceUpdate();

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop =
        (document.documentElement && document.documentElement.scrollTop) ||
        document.body.scrollTop;
      const scrollHeight =
        (document.documentElement && document.documentElement.scrollHeight) ||
        document.body.scrollHeight;
      const clientHeight =
        document.documentElement.clientHeight || window.innerHeight;
      const scrolledToBottom =
        Math.ceil(scrollTop + clientHeight) >= scrollHeight;

      if (scrolledToBottom) {
        setTimeout(() => {
          setTake((prevTake) => prevTake + 10);
          isEndOfPage && forceUpdate();
        }, 500);
      }

      setIsEndOfPage(scrolledToBottom);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [forceUpdate]);

  return (
    <>
      <S.Title>Resultados</S.Title>
      <S.Container>
        {data?.map((item, index) => (
          <CardCatalogo key={index} description={item?.details?.description} />
        ))}
      </S.Container>
    </>
  );
};

Cards.propTypes = {
  data: PropTypes.array,
};

export default Cards;
