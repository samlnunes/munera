import styled from "styled-components";

export const Row = styled.div`
  display: flex;
  gap: 10px;

  > div {
    width: 100%;
  }

  > div:last-child {
    width: 100px;
  }
`;

export const Container = styled.div`
  width: 380px;
  margin: auto;

  form {
    display: flex;
    flex-direction: column;
    gap: 15px;
    margin-top: 30px;
    max-width: 100%;

    > div {
      width: 100%;
      gap: 10px;
      display: flex;
      flex-direction: column;
    }

    button {
      background-color: #043262;
      border: none;
      text-transform: uppercase;
      border-radius: 3px;
      color: #fff;
      cursor: pointer;
      height: 53.6px;
      font-family: "Montserrat";
      font-weight: 700;
    }

    > p {
      color: #b00020;
      margin-bottom: 10px;
    }
  }

  p {
    font-size: 12px;
    line-height: 14px;
    margin: 0;
    margin-top: -7px;
  }
`;

export const Top = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  h1 {
    font-size: 26px;
    line-height: 26px;
    max-width: 25ch;
    font-weight: 700;
    text-transform: uppercase;
    text-align: center;
    margin-top: 20px;
    color: #043262;
  }

  img {
    width: 60px;
  }
`;
