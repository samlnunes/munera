import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin: auto;
  background-color: #ffffff;
  padding: 40px 30px;
  width: 380px;
  border-radius: 10px;

  form {
    margin-top: 45px;
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 10px;

    div {
      width: 100%;
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

    p {
      font-size: 12px;
      line-height: 14px;
      margin: 3px 0;
    }

    > p {
      color: #b00020;
      margin-bottom: 10px;
    }
  }

  .actions {
    margin-top: 20px;
    gap: 10px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    > p {
      color: #8d8d8d;
      font-size: 12px;
      line-height: 14px;
    }

    a {
      font-size: 12px;
      color: #111;
      text-decoration: underline;
      transition: 0.5s;

      :hover {
        transition: 0.5s;
        color: #043262;
      }
    }
  }
`;
