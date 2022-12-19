import styled from "styled-components";

export const InputContainer = styled.div`
  border-radius: 20px;
  border: none;
  background-color: #dbdbdb;

  height: 40px;
  width: 80%;
  margin: 25px 0;

  display: flex;
  flex-direction: row;
  align-items: center;

  img {
    border-radius: 20px;
    border: none;
    opacity: transparent;
    height: 30px;
    width: 10%;
  }
  input {
    border-radius: 20px;
    background-color: #dbdbdb;
    border: none;
    height: 30px;
    width: 70%;
  }

  & p {
    color: red;
    max-height: 30px;
    width: 20%;
  }
`;
