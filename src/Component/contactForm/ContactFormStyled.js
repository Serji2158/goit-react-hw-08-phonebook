import styled from "styled-components";

export const ContactFormContainer = styled.nav`
  .contactForm {
    padding: 0 20px;
  }

  .contactForm__btn {
    margin-top: 20px;
  }

  .btn {
    width: 100px;
    height: 25px;
    border: 1px solid;
    border-radius: 5px;
  }

  .btn:hover,
  .btn:focus {
    background: rgb(177, 122, 20);
    border: rgb(177, 122, 20);
  }

  .inputName {
    font-weight: 500;
  }

  .input {
    width: 200px;
    height: 25px;
    border: 1px solid;
    border-radius: 5px;
  }

  .input:hover,
  .input:focus {
    border: rgb(177, 122, 20);
  }
`;
