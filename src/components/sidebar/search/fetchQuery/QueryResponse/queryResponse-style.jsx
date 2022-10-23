import styled from "styled-components";

export const QueryResponseStyle = styled.div`
  width: 100%;
  height: 50px;
  padding: 0 0.5rem;
  &:hover {
    border: 1px solid #616475;
  }
  h3 {
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: space-between;
    font-size: 16px;
    line-height: 19px;
    color: #e7e7eb;
    & {
      height: 100%;
      display: flex;
      align-items: center;
      justify-content: space-between;
    }

    & span {
      color: #616475;
      display: none;
    }
    &:hover span {
      display: block;
    }
  }
`;
