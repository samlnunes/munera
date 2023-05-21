import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #fff;
  border: 1px solid #CED0D4;
  border-radius: 5px;
  padding: 10px;

  &:focus-within {
    border-color: #043262;
  }
`;

export const TextArea = styled.textarea`
  border: none;
  resize: none;
  font-size: 16px;
  padding: 5px;
  margin-bottom: 10px;
  font-family: 'Montserrat';

  &:focus {
    outline: none;
  }
`;