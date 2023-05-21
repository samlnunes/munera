import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #fff;
  border: 1px solid #ced0d4;
  border-radius: 5px;
  padding: 10px;

  &:focus-within {
    border-color: #043262;
  }
`;

export const TextArea = styled.textarea`
border: none;
  resize: none;
  overflow: hidden;
  background-color: #fff;
  padding: 5px;
  margin-bottom: 10px;
  font-family: "Montserrat";
  font-weight: 400;
  font-size: 15px;
  line-height: 18px;
  color: #6a6a6a;

  &:focus {
    outline: none;
  }
`;
