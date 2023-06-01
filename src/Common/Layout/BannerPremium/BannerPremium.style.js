import styled from "styled-components";

export const Container = styled.div`
  height: 67px;
  width: 100%;
  position: fixed;
  z-index: 3;
  width: 100%;
  top: 0;
  right: 0;
  border-radius: 0px;
  display: flex;
  justify-content: center;
  align-items: center;
  background: rgba(36, 36, 36, 0.95);
  color: #ffffff;

  span {
    font-weight: 400;
    font-size: 18px;
    line-height: 25px;
    margin-right: 18px;
  }

  @media (max-width: 768px) {
    bottom: 0;
    top: auto;
    height: 186px;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    span {
      margin: 0 1rem;
      text-align: center;
    }

    button{
      margin-top: 18px;
    }
  }
`;

export const Close = styled.span`
  display: none;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  padding: 0 0 16px 0;

  svg {
    font-size: 18px;
    padding: 3px 0 0 8px;
  }

  @media (max-width: 768px) {
    display: flex;
  }
`;
