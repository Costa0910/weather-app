import styled from "styled-components";

export const ForecastStyle = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 13.5px;

  @media screen and (max-width: 550px) {
    gap: 20px;
  }
`;
