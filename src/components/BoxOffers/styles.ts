import styled from "styled-components";

export const Container = styled.div`
  background-color: #ffffff;
  border-radius: 10px;
  display: flex;
  align-items: flex-start;
  gap: 20px;
  padding: 30px;
  transition: 0.5s;

  :hover {
    transition: 0.5s;
    background-color: #e4e6e9;
  }

  @media (max-width: 768px) {
    border-bottom: 1px solid #e4e6e9;
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

export const FakeImage = styled.div`
  background-color: #1974b9;
  width: 80px;
  height: 80px;
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: center;

  span {
    font-size: 24px;
    font-weight: 600;
  }
`;
