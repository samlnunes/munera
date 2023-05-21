import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  background-color: #ffffff;
  width: 96%;
  border-radius: 10px;
  padding: 30px 50px;
`;

export const Nav = styled.nav`
  border-right: 1px solid #e4e6eb;
  width: fit-content;
  padding-right: 15px;

  h1 {
    font-weight: 700;
    font-size: 16px;
    line-height: 19px;
    color: #000000;
  }

  ul {
    list-style-type: none;
    flex-direction: column;
    display: flex;
    gap: 6px;
    margin-top: 30px;
  }

  li {
    font-weight: 600;
    font-size: 13px;
    line-height: 16px;
    color: #6a6a6a;
    padding: 10px 15px;
    border-radius: 10px;
    width: 360px;
  }

  li.active {
    background-color: rgba(79, 184, 255, 0.2);
    color: #043262;
  }
`;

export const Content = styled.article`
  display: flex;
  flex-direction: column;
  gap: 20px;
  padding: 25px 0 0 30px;

  p {
    font-weight: 500;
    font-size: 15px;
    line-height: 18px;
    text-align: justify;
    color: #6a6a6a;
  }
`;
