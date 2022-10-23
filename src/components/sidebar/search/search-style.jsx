import styled from "styled-components";

export const SearchStyle = styled.section`
  color: #e7e7eb;
  font-size: 20px;
  padding: 1.5rem 2rem;
  display: flex;
  flex-direction: column;
  gap: 10px;
  .close {
    text-align: right;

    button {
      background-color: transparent;
      color: white;
      width: fit-content;
      height: 100%;
      cursor: pointer;
    }
  }

  form {
    margin-block: 2rem;
    display: flex;
    align-items: center;
    gap: 0.5rem;
    label {
      width: 75%;
      border: 1px solid #e7e7eb;
      display: flex;
      align-items: center;
      color: #616475;
      font-size: 16px;
      line-height: 19px;
      span {
        padding: 0 0.2rem;
        font-size: 20px;
      }
      input {
        width: 90%;
        height: 35px;
      }

      input:focus {
        color: #e7e7eb;
      }
    }

    button {
      cursor: pointer;
      height: 35px;
      padding: 1rem;
      display: flex;
      align-items: center;
      background: #3c47e9;
      font-weight: 600;
      font-size: 16px;
      line-height: 19px;
      color: #e7e7eb;
    }
  }
`;
