import styled from "styled-components";

export const Container = styled.div`
  background-color: #ffffff;
  border-radius: 10px;
  display: flex;
  align-items: center;
  gap: 20px;
  padding: 30px;
  transition: 0.5s;

  :hover {
    transition: 0.5s;
    background-color: #e4e6e9;
  }
`;

export const Logo = styled.a`
  img {
    border-radius: 8px;
    width: 80px;
  }
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;

  h1 {
    font-weight: 600;
    font-size: 16px;
    line-height: 19px;
    color: #65676b;
  }

  p {
    font-weight: 400;
    font-size: 14px;
    line-height: 19px;
    color: #6a6a6a;
  }
`;
