import styled from "styled-components";

export const Container = styled.div`
  position: relative;
  min-height: 100vh;
  height: 100%;
  width: auto;
  background: #fbfbfb;
  padding: 255px 200px 150px 200px;

  @media (max-width: 768px) {
    overflow: hidden;
    max-width: 100%;
    padding: 255px 20px 200px 20px;
  }
`;
