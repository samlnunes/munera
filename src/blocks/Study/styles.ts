import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  background-color: #ffffff;
  width: 96%;
  border-radius: 10px;
  padding: 30px 40px;
  z-index: 7;

  @media (max-width: 768px) {
    width: 100%;
    flex-direction: column;
    padding: 20px;
  }
`;

export const Nav = styled.nav`
  border-right: 1px solid #e4e6eb;
  width: fit-content;
  padding-right: 15px;

  button {
    font-family: "Montserrat";
    background-color: transparent;
    border: none;
    font-weight: 600;
    font-size: 13px;
    line-height: 16px;
    color: #6a6a6a;
    width: 100%;
    text-align: start;
    padding: 10px 15px;
    border-radius: 10px;
    cursor: pointer;

    :hover {
      background-color: rgba(79, 184, 255, 0.1);
    }
  }

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
    width: 360px;
    border-radius: 10px;
  }

  li.active {
    background-color: rgba(79, 184, 255, 0.2);
    color: #043262;
  }

  @media (max-width: 768px) {
    width: 100%;
    padding: 0;
    padding-bottom: 20px;
    border-bottom: 1px solid #e4e6eb;
    border-right: none;
  }
`;

export const Content = styled.article`
  display: flex;
  flex-direction: column;
  gap: 20px;
  padding: 25px 0 0 30px;

  h1 {
    color: #000;
    font-size: 16px;
    margin-top: 20px;
  }

  h2 {
    color: #1974b9;
  }

  p {
    font-weight: 500;
    font-size: 15px;
    line-height: 18px;
    text-align: justify;
    color: #6a6a6a;
  }

  @media (max-width: 768px) {
    padding: 0;
    margin-top: 20px;

    iframe {
      height: auto;
    }
  }
`;
