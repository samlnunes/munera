import styled from "styled-components";

export const Container = styled.div`
  background: #ffffff;
  border-radius: 10px;
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.2);
  padding: 20px 0;
  max-width: 50vw;

  p {
    margin-top: 20px;
    font-weight: 400;
    font-size: 15px;
    line-height: 18px;
    color: #6a6a6a;
  }

  img {
    max-width: 100%;
    margin-top: 20px;
  }
`;

export const Content = styled.div`
  padding: 0 22px;
`;

export const Top = styled.div`
  display: flex;
  gap: 10px;
  align-items: center;

  h1 {
    font-weight: 600;
    font-size: 16px;
    line-height: 14px;
    color: #000000;
  }

  span {
    font-weight: 500;
    font-size: 13px;
    line-height: 16px;
    color: #65676b;
  }

  img {
    width: 40px;
    height: 40px;
    border-radius: 50%;
    margin: 0;
  }
`;
