import styled from "styled-components";

export const CurrentStyle = styled.section`
  display: flex;
  place-items: center;
  flex-direction: column;
  padding: 1.5rem;
  gap: 90px;
`;

export const SearchAndMap = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  .search {
    width: 150px;
    height: 35px;
    background: #6e707a;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    font-weight: 500;
    line-height: 16px;
    color: #e7e7eb;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
  }

  .my-location {
    width: 30px;
    height: 30px;
    color: #e7e7eb;
    background: rgba(255, 255, 255, 0.2);
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    border-radius: 20px;
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;

export const CurrentCity = styled.div`
  padding-top: 70px;
  background: url(${(props) => props.bg});
  background-position-y: 150px;
  background-size: contain;
  background-repeat: no-repeat;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 60px;
  img {
    width: 110px;
    height: 140px;
  }

  h1 {
    font-size: 100px;
    line-height: 169px;
    color: #e7e7eb;
  }

  h1 > span {
    font-size: 35px;
    color: #a09fb1;
  }

  & > p {
    color: #a09fb1;
    font-weight: 600;
    font-size: 28px;
    line-height: 42px;
    text-align: center;
  }

  .dateAndCity {
    text-align: center;
    font-weight: 600;
    font-size: 14px;
    line-height: 21px;
    color: #88869d;
    & {
      display: flex;
      flex-direction: column;
      gap: 10px;
    }

    span {
      padding: 0 5px;
    }

    .city {
      display: flex;
      align-items: center;
    }
  }
`;
