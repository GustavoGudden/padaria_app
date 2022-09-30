import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 80%;
  margin: auto;
  color: #007acc;
  border-right: 1px solid black;
  border-left: 1px solid black;
  border-bottom: 1px solid black;

  height: 500px;

  div {
    margin-right: auto;
    margin-left: auto;
    margin-top: 7px;
    margin-bottom: 7px;
  }
`;

export const item = styled.div`
  display: flex;
  align-items: center;
  padding-left: 1rem;
  height: 60px;
  gap: 1rem;
  color: white;
  width: 90%;
  border-radius: 7px;
  background-color: #007acc;

  p {
    font-weight: 700;
  }

  div {
    display: flex;
    width: 100%;
    justify-content: flex-end;
    padding-right: 2rem;
  }
`;
