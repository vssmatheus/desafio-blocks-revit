import React, { useEffect, useState } from "react";
import { useGetUsers } from "./Hooks/useGetUsers";
import Cards from "./Cards";
import * as S from "./Catalogo.style";
import HeaderBlock from "../../Common/HeaderBlock/HeaderBlock.component";

const Catalogo = () => {
  const families = useGetUsers();
  const [dataFamilies, setDataFamilies] = useState([]);

  useEffect(() => {
    setDataFamilies(families);
    
    setInterval(() => {
      setDataFamilies(families); 
    }, 30000);
  }, [families]);
  
  return (
    <S.CatalogoSection>
      <HeaderBlock title={'Catálogo'}/>
      <S.Container>
        <Cards data={dataFamilies} />
      </S.Container>
    </S.CatalogoSection>
  );
};

export default Catalogo;
