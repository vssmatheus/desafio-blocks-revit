import styled from "styled-components";

export const Container = styled.div`
  height: 67px;
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
`;
