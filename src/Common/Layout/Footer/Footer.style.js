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
  background: #e9e9e9;

  @media (max-width: 768px) {
    height: 160px;
    justify-content: flex-start;
  }
`;

export const FooterContainer = styled.div`
  display: flex;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    height: 160px;
  }
`;

export const ItemLink = styled.a`
  margin: 0 36px;
  cursor: pointer;
  font-weight: 400;
  font-size: 16px;
  line-height: 22px;

  @media (max-width: 768px) {
    margin: 12px 20px 0;
  }
`;
