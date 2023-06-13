import styled from "styled-components";

interface Props {
  left?: boolean;
}

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  gap: 30px;
  align-items: center;
  width: 100%;
  margin-top: 76px;
  margin-bottom: 50px;

  .soon {
    font-size: 16px;
    margin-top: 150px;
  }

  .maintenance {
    width: 300px;
  }

  @media (max-width: 768px) {
    gap: 0;
    margin-top: 56px;
  }
`;

export const SideBar = styled.div<Props>`
  position: fixed;
  right: ${(props) => (props.left ? "inherit" : "30px")};
  left: ${(props) => (props.left ? "30px" : "inherit")};
  top: 76px;
  height: 100%;
  width: 20vw;

  @media (max-width: 768px) {
    display: none;
  }
`;
