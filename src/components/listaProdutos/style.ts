import styled from "styled-components";

export const Container = styled.div`
  display: grid;
  grid-template-columns: 60% 40%;
  width: 80%;
  margin: auto;
  color: #437f97;
  border-right: 1px solid black;
  border-left: 1px solid black;
  border-bottom: 1px solid black;
  background-color: white;
  border-radius: 0px 0px 7px 7px;

  height: 500px;

  div {
    margin-left: 1rem;
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
  background-color: #437f97;

  h1 {
    color: #ffb30f;
  }

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

