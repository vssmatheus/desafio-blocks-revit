import styled from "styled-components";

export const Container = styled.button`
  border-radius: 0px;
  height: 43px;
  display: flex;
  padding: 10px 24px;
  border: solid 1px rgba(199, 110, 255, 0.6);
  border-radius: 8px;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  background: linear-gradient(
    90deg,
    rgba(161, 28, 243, 0.6) 0%,
    rgba(216, 53, 197, 0.6) 100%
  );
  backdrop-filter: blur(20px);
  color: #ffffff;

  &:hover {
    width: 294px;
    justify-content: space-between;
    background: rgba(223, 172, 255, 0.1);

    svg {
      border-left: #ffffff 1px solid;
      padding-left: 13px;
    }
  }

  &:active {
    width: 294px;
    justify-content: space-between;
    background: linear-gradient(
      90deg,
      rgba(161, 28, 243, 0.6) 0%,
      rgba(216, 53, 197, 0.6) 100%
    );

    svg {
      border-left: #ffffff 1px solid;
      padding-left: 13px;
    }
  }

  span {
    font-weight: 600;
    font-size: 16px;
    line-height: 22px;
    margin-right: 15px;
  }
`;
