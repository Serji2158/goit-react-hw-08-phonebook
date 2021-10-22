import styled from "styled-components";

export const NavigationContainer = styled.nav`
  .navList {
    list-style: none;
    display: flex;
    align-items: center;
  }
  .navItem:not(:last-child) {
    margin-right: 20px;
  }
  .navLink {
    font-weight: 700;
    text-decoration: none;
    text-transform: uppercase;
    color: orange;
  }
  .activeNavLink {
    color: #1b9dc5;
  }
`;
