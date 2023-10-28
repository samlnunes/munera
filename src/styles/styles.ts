import styled from "styled-components";

interface Props {
  left?: boolean;
}

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  gap: 15px;
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
    margin-bottom: 0;
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

export const NotPublics = styled.div`
  background: #ffffff;
  border-radius: 10px;
  text-align: center;
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.2);
  padding: 20px 0;
  width: 35vw;

  p {
    font-weight: 600;
    font-size: 15px;
    line-height: 18px;
    color: #6a6a6a;
  }

  img {
    margin-top: 24px;
    width: 100%;
  }

  @media (max-width: 768px) {
    width: 100%;
    border-radius: 0;
    padding: 10px 0;

    p {
      margin-top: 10px;
    }
  }
`;
