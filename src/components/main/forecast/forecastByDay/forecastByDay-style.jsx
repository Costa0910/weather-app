import styled from "styled-components";

export const ForecastByDayStyle = styled.article`
  background: #1e213a;
  width: 140px;
  height: 200px;
  padding: 15px;
  & {
    color: #e7e7eb;
    font-weight: 500;
    font-size: 16px;
    line-height: 19px;
    display: flex;
    flex-direction: column;
    gap: 10px;
    align-items: center;
    justify-content: center;
  }
  img {
    width: 125;
    height: 110px;
  }

  span {
    color: #a09fb1;
    padding-left: 10px;
  }
  @media screen and (max-width: 550px) {
    width: 47%;
    height: 210px;
  }
`;
