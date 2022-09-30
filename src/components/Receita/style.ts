import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 80%;
  margin: auto;
  gap: 1rem;
  margin-top: 3rem;
  background-color: #007acc;
  color: whitesmoke;
  height: 60px;
  border: 1px solid black;
  h1 {
    font-size: 16px;
  }
  div {
    display: flex;
    padding-left: 5px;
    width: 100%;
    height: 60px;
    justify-content: center;
    flex-direction: column;
    border-right: 1px solid black;

    p {
      padding-left: 5px;
      padding-top: 5px;
    }
    :last-child {
      border: none;
    }
  }
`;
