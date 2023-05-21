import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 21px;
`;

export const Top = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;
`;

export const Description = styled.div`
  background: #ffffff;
  border-radius: 10px;
  padding: 23px 15px;

  p {
    font-weight: 400;
    font-size: 15px;
    line-height: 18px;
    color: #6a6a6a;
  }
`;

export const ContentLogo = styled.div`
  position: relative;
  min-width: 126px;
  height: 126px;
  border-radius: 50%;

  img {
    border-radius: 50%;
    width: 100%;
    height: 100%;
  }
`;

export const BoxBroker = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background: #ffffff;
  display: flex;
  align-items: center;
  justify-content: center;

  img {
    width: 30px;
    height: 30px;
  }
`;

export const BoxInfos = styled.div`
  display: flex;
  flex-direction: column;

  > div {
    display: flex;
    align-items: center;
    gap: 10px;
    margin-top: 10px;

    button {
      background-color: transparent;
      border: none;
      cursor: pointer;
    }
  }

  h1 {
    font-weight: 600;
    font-size: 32px;
    line-height: 39px;
    color: #000000;
  }

  span {
    font-weight: 600;
    font-size: 16px;
    line-height: 19px;
    color: #65676b;
  }
`;
