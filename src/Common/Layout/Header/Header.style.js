import styled from "styled-components";

export const Container = styled.div`
  height: 80px;
  position: absolute;
  z-index: 2;
  width: 100%;
  top: 67px;
  right: 0;
  border-radius: 0px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(255, 255, 255, 1);
  border-bottom: 1px solid;
  border-image: linear-gradient(to right, #a11cf3, #d835c5) 1;

  img {
    width: 146px;
    height: 54px;
  }

  @media (max-width: 768px) {
    top: 0;
    img {
      width: 91px;
      height: 34px;
    }
  }
`;
