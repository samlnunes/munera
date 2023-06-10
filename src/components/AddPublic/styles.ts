import styled from "styled-components";

export const Container = styled.div`
  background-color: #ffffff;
  border-radius: 10px;
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.2);
  padding: 20px 22px;
  width: 50vw;
  display: flex;
  flex-direction: column;
  gap: 20px;

  h1 {
    font-weight: 600;
    font-size: 16px;
    line-height: 19px;
    color: #000000;
  }

  .dzu-dropzone {
    overflow: hidden;
    border: 1px solid #ced0d4;
  }

  @media (max-width: 768px) {
    width: 100%;
  }
`;

export const ContentPublic = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
  position: relative;
`;

export const ButtonImage = styled.button`
  border: none;
  position: absolute;
  bottom: 10px;
  background-color: transparent;
  right: 10px;
  cursor: pointer;
`;

export const InputContent = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 10px;

  div {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 2px;

    span {
      font-weight: 500;
      font-size: 13px;
      line-height: 16px;
      color: #65676b;
    }

    p {
      font-weight: 600;
      font-size: 16px;
      line-height: 14px;
      color: #000000;
    }
  }
`;

export const BoxButton = styled.div`
  display: flex;
  justify-content: flex-end;

  button {
    background-color: #1974b9;
    width: 50%;
    color: #fff;
    border: none;
    border-radius: 5px;
    padding: 10px;
    cursor: pointer;
    font-style: normal;
    font-weight: 500;
    font-size: 16px;
    line-height: 19px;
    font-family: "Montserrat";

    :disabled {
      background-color: #D9D9D9;
      cursor: default;
    }
  }
`;
