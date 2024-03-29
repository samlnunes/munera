import styled from "styled-components";

export const Container = styled.div`
  width: 35vw;
  display: flex;
  flex-direction: column;
  gap: 20px;

  @media (max-width: 768px) {
    width: 100%;
    gap: 0;
  }
`;
