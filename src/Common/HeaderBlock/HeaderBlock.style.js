import styled from "styled-components";

export const Container = styled.div`
  height: 80px;
  position: absolute;
  z-index: 1;
  top: 80px;
  width: 100%;
  right: 0;
  border-radius: 0px;
  display: flex;
  align-items: center;
  background: #fbfbfb;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.15);

  h2 {
    margin-left: 200px;
    color: #202020;
    position: relative;
    font-weight: 700;
    font-size: 28px;

    &::before {
      content: "";
      position: absolute;
      width: 34%;
      height: 4px;
      bottom: -4px;
      border-radius: 8px;
      background-image: linear-gradient(to bottom right, #a11cf3, #d835c5);
    }
  }
`;
