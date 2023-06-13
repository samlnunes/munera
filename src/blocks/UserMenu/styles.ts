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
    font-family: Arial, sans-serif;
    height: 500px;
  }

  .custom-calendar .rbc-toolbar {
    display: flex;
    justify-content: center;
    margin-bottom: 20px;
  }

  .custom-calendar .rbc-toolbar button {
    background-color: #043262;
    color: #ffffff;
    border: none;
    padding: 8px 12px;
    margin: 0 5px;
    cursor: pointer;
  }

  .custom-calendar .rbc-toolbar button:hover {
    background-color: #0369a1;
  }

  .custom-calendar .rbc-header {
    text-align: center;
  }

  .custom-calendar .rbc-header + .rbc-header {
    border-left: none;
  }

  .custom-calendar .rbc-header .rbc-header-label {
    font-size: 18px;
    font-weight: bold;
    margin: 10px 0;
  }

  .custom-calendar .rbc-header .rbc-date-cell {
    font-size: 14px;
    color: #666666;
    background-color: #f5f5f5;
    border: none;
    padding: 6px;
    text-align: center;
  }

  .custom-calendar .rbc-header .rbc-date-cell:hover {
    background-color: #eaeaea;
  }

  .custom-calendar .rbc-month-view .rbc-row {
    display: flex;
    justify-content: space-between;
  }

  .custom-calendar .rbc-month-view .rbc-row + .rbc-row {
    margin-top: 10px;
  }

  .custom-calendar .rbc-month-view .rbc-event {
    background-color: #eaeaea;
    border-radius: 4px;
    padding: 4px;
    font-size: 12px;
  }

  .rbc-month-view .rbc-today .rbc-event {
    background-color: #0369a1;
    color: #ffffff;
  }

  .rbc-month-view {
    background-color: #0369a1;
    color: #ffffff;
  }

  .rbc-selected-cell {
    background-color: #0369a1;
    color: #ffffff;
  }

  .rbc-today {
    background-color: #043262;
    color: #ffffff;
  }

  .rbc-off-range-bg {
    background-color: #87aadd;
  }

  .rbc-event {
    background-color: #043262 !important;
  }
`;
