import React, { useEffect, useState } from "react";
import { useGetUsers } from "./Hooks/useGetUsers";
import Cards from "./Cards";
import * as S from "./Catalogo.style";
import HeaderBlock from "../../Common/HeaderBlock/HeaderBlock.component";

const Catalogo = () => {
  const users = useGetUsers();
  const [dataUsers, setDataUsers] = useState([]);

  useEffect(() => {
    setDataUsers(users);
    
    setInterval(() => {
      setDataUsers(users); 
    }, 30000);
  }, [users]);
  
  return (
    <S.CatalogoSection>
      <HeaderBlock title={'Catálogo'}/>
      <S.Container>
        <Cards data={dataUsers} />
      </S.Container>
    </S.CatalogoSection>
  );
};

export default Catalogo;
