import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 80%;
  margin: auto;
  gap: 1rem;
  margin-top: 3rem;
  background-color: #01295f;
  color: whitesmoke;
  height: 60px;
  border: 1px solid black;
  border-radius: 7px 7px 0px 0px;
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
      color: #849324;
      padding-left: 5px;
      padding-top: 5px;
    }
    :last-child {
      border: none;
    }
  }
`;
