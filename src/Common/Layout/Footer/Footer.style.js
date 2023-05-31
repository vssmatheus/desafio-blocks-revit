import styled from "styled-components";

export const Container = styled.div`
  height: 80px;
  position: absolute;
  z-index: 2;
  width: 100%;
  bottom: 0;
  right: 0;
  border-radius: 0px;
  display: flex;
  justify-content: center;
  align-items: center;
  background: #E9E9E9;
`;

export const FooterContainer = styled.div`
    display: flex;
`;

export const ItemLink = styled.a`
    margin: 0 36px;
    cursor: pointer;
    font-weight: 400;
    font-size: 16px;
    line-height: 22px;
`;