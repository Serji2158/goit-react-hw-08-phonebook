import styled from "styled-components";

export const AuthFormContainer = styled.nav`
  .authForm {
    display: table-caption;
    margin: 20px 40px;
  }

  .btn {
    margin-top: 20px;
    width: 100px;
    height: 25px;
    border: 1px solid;
    border-radius: 5px;
  }

  .inputName {
    font-weight: 500;
  }

  .btn:hover,
  .btn:focus {
    background: rgb(177, 122, 20);
    border: rgb(177, 122, 20);
  }

  .input {
    width: 200px;
    height: 25px;
    border: 1px solid;
    border-radius: 5px;
  }

  .inputName:not(:first-child) {
    margin-top: 20px;
  }

  .input:hover,
  .input:focus {
    border: rgb(177, 122, 20);
  }
`;
