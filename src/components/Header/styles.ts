import styled from "styled-components";

export const Container = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 56px;
  background-color: #ffffff;
  width: 100%;
  padding: 0 30px;

  img {
    width: 50px;
  }
`;

export const Nav = styled.nav`
  width: 50vw;
  height: 100%;
  display: flex;

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

    a {
      font-style: normal;
      font-weight: 500;
      font-size: 16px;
      line-height: 19px;
      color: #65676b;
    }
  }
`;

export const BoxUser = styled.div`
  display: flex;
  gap: 10px;
`;

export const Notifications = styled.div`
  width: 40px;
  height: 40px;
  background-color: #E4E6EB;
  border-radius: 50%;
`;

export const UserProfile = styled.div`
  width: 40px;
  height: 40px;
  background-image: url('./user-photo.png');
  background-repeat: no-repeat;
  background-size: contain;
  border-radius: 50%;
`;
