import styled from "styled-components";

export const BarContainer = styled.div`
  height: 38px;
  display: flex;
  flex-direction: column;
  gap: 2px;

  .numbers {
    display: flex;
    justify-content: space-between;
    font-weight: 700;
    font-size: 12px;
    line-height: 14px;
    color: #a09fb1;
  }

  .bar {
    border-radius: 5px;
    width: 100%;
    background: #e7e7eb;
  }

  .width-color {
    border-radius: 5px;
    background: #ffec65;
  }
  .percentage {
    text-align: right;
    font-weight: 700;
    font-size: 12px;
    line-height: 14px;
    color: #a09fb1;
  }
`;
