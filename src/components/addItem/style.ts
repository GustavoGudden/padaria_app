import styled from "styled-components";

export const CreatItemArea = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 2rem;
  padding-top: 4rem;

  input {
    width: 70%;
    height: 2rem;
    ::placeholder {
      color: #437f97;
      font-size: 18px;
      padding-left: 7px;
    }
  }

  button {
    align-self: flex-end;
    color: white;
    background-color: #849324;
    border: none;
    margin-right: 3rem;
    width: 25%;
    height: 2rem;
    border-radius: 7px;
    font-size: 20px;
  }
`;
