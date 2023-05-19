import { styled } from "styled-components";

export const StyledForm = styled.form`
  display: flex;

  flex-direction: row;
  gap: 10px;
  width: 600px;
  text-align: center;
  align-items: center;
  justify-content: center;
  height: 500px;

  .loginForm {
    border-radius: 10px;
    background-color: white;
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 50%;
    height: 100%;

    h1 {
      margin-bottom: 53px;
    }
    ;

    
  }

  .createAccountForm {
    border-radius: 10px;
    background-color: white;
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 50%;
    height: 100%;
    // gap: 20px
  }

  input {
    border-radius: 10px;
    height: 20px;
    margin-bottom: 20px;
    padding: 5px;
    border: 1px solid #ccc;
  }
`;
