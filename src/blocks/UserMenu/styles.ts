import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100vh;
  position: fixed;
  background-color: #1974b9;
  z-index: 1;
  display: flex;
  top: 0;

  > button {
    position: absolute;
    right: 40px;
    top: 40px;
    background-color: transparent;
    border: none;
    cursor: pointer;
  }
`;

export const Box = styled.div`
  width: 400px;
  height: 100vh;
  background-color: #043262;
  padding: 126px 0;
  display: flex;
  flex-direction: column;
  align-items: center;

  h1 {
    font-weight: 800;
    font-size: 24px;
    line-height: 29px;
    color: #ffffff;
    margin-top: 10px;
  }
`;

export const UserPhoto = styled.div`
  width: 150px;
  height: 150px;
  border-radius: 50%;
  background-image: url("/user-profile.jpg");
  background-repeat: no-repeat;
  background-size: contain;
`;

export const MenuTabs = styled.ul`
  width: 100%;
  margin-top: 50px;

  button {
    background-color: transparent;
    border: none;
    padding: 19px 47px;
    width: 100%;
    text-align: start;
    font-weight: 500;
    font-size: 16px;
    line-height: 19px;
    color: #ffffff;

    &.active {
      background-color: #4fb8ff;
      font-weight: 700;
      color: #043262;
    }
  }
`;

export const Content = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;

  > div {
    width: 500px;
  }
`;
