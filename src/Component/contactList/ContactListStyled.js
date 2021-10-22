import styled from "styled-components";

export const ContactListContainer = styled.nav`
  .list {
    padding: 30px 60px;
    display: flex;
    flex-direction: column;
  }

  .data {
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 375px;
  }

  .btn {
    margin-left: 20px;
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
`;
