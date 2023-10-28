import styled from "styled-components";
interface Props {
  img: string;
}

export const Container = styled.div`
  width: 100%;
  height: 100vh;
  position: fixed;
  background-color: #1974b9;
  z-index: 999;
  display: flex;
  top: 0;

  > button {
    position: absolute;
    right: 40px;
    top: 40px;
    background-color: transparent;
    border: none;
    cursor: pointer;
    width: 30px;
    height: 30px;

    img {
      max-width: 100%;
    }
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

export const UserPhoto = styled.div<Props>`
  min-width: 150px;
  min-height: 150px;
  border-radius: 50%;
  background-image: ${({ img }) => (img ? `url(${img})` : "none")};
  background-color: ${({ img }) => (img ? "transparent" : "#4FB8FF")};
  background-repeat: no-repeat;
  background-size: contain;
  display: flex;
  align-items: center;
  justify-content: center;

  h1 {
    font-size: 40px;
    font-weight: 700;
    color: #043262;
    margin: 0;
  }
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
    font-family: "Montserrat";
    display: flex;
    align-items: center;
    gap: 20px;

    :hover {
      background-color: rgba(79, 184, 255, 0.3);
      cursor: pointer;
      font-weight: 700;
      color: #043262;
    }

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

  .custom-calendar {
    height: 500px;
    width: 50%;
  }

  .custom-calendar .rbc-toolbar {
    display: flex;
    align-items: center;
    margin-bottom: 20px;
  }

  .custom-calendar .rbc-toolbar button {
    color: #ffffff;
    border: none;
    width: 40px;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
  }

  .custom-calendar .rbc-toolbar button:hover {
    background-color: #0369a1;
  }

  .custom-calendar .rbc-month-view .rbc-row + .rbc-row {
    margin-top: 10px;
  }

  .rbc-today {
    background-color: #043262;
    color: #ffffff;
  }

  .rbc-off-range-bg {
    background-color: #dddddd;
    opacity: 0.3;
  }

  .rbc-event {
    border-radius: 4px;
    padding: 4px;
    font-size: 12px;
    font-weight: 700;
  }
`;
