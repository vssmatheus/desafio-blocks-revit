import styled from "styled-components";

export const Container = styled.div`
  min-width: 176px;
  min-height: 234px;
  border: solid 1px #cccccc;
  border-radius: 8px;
  position: relative;
  display: flex;
  align-items: center;

  img {
    object-fit: contain;
    max-width: 100%;
    margin: -25% auto 0;
  }

  @media (max-width: 768px) {
    min-width: 46%;
  }
`;

export const CardFooter = styled.div`
  bottom: 0;
  position: absolute;
  display: flex;
  align-items: center;
  max-width: 176px;
  height: 36px;
  padding: 8px;
  font-weight: 600;
  font-size: 10px;
  border-radius: 0 0 8px 8px;
  border-top: #cccccc 1px solid;

  span {
    overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 2; 
  -webkit-box-orient: vertical;
  max-height: 3.6em;
  }

  svg {
    color: #474747;
    font-size: 18px;
    padding: 0 0 0 8px;
    cursor: pointer;
    margin-left: 8px;
    border-left: #474747 1px solid;
  }
`;
