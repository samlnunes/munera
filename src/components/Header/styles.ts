import styled from "styled-components";

interface Props {
  img: string;
}

export const Container = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 56px;
  background-color: #ffffff;
  width: 100%;
  padding: 0 30px;
  position: fixed;
  top: 0;
  z-index: 9;

  img {
    width: 50px;
  }

  @media (max-width: 768px) {
    padding: 0 4vw;
  }
`;

export const Nav = styled.nav`
  width: 50vw;
  height: 100%;
  display: flex;
  margin-left: 39px;

  ul {
    width: 100%;
    justify-content: space-between;
    display: flex;
    list-style-type: none;
  }

  li {
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
    width: 100%;
    padding: 0 20px;
    white-space: nowrap;

    &.active {
      border-bottom: 3px solid #1974b9;
    }

    a {
      font-style: normal;
      font-weight: 500;
      font-size: 14px;
      line-height: 19px;
      color: #65676b;
    }
  }

  @media (max-width: 768px) {
    display: none;
  }
`;

export const BoxUser = styled.div`
  display: flex;
  gap: 10px;
  align-items: center;

  a {
    font-weight: 500;
    font-size: 14px;
    line-height: 19px;
    color: #65676b;
  }
`;

export const Notifications = styled.div`
  width: 40px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #e4e6eb;
  border-radius: 50%;
`;

export const UserProfile = styled.button<Props>`
  width: 40px;
  height: 40px;
  background-image: ${({ img }) => (img ? `url(${img})` : "none")};
  background-color: ${({ img }) => (img ? "transparent" : "#043262")};
  background-repeat: no-repeat;
  background-size: contain;
  border-radius: 50%;
  border: none;
  cursor: pointer;
  font-weight: 700;

  @media (max-width: 768px) {
    display: none;
  }
`;
