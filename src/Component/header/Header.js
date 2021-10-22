import React from "react";
// import { useSelector } from "react-redux";
import Navigation from "../navigation/Navigation";
import { HeaderContainer } from "./HeaderStyled";
const Header = () => {
  // const userName = useSelector((state) => state.authorization.user.displayName);
  return (
    <HeaderContainer>
      {/* <h3 className="wellcomeTitle">Wellcome,{userName}!</h3> */}
      <h2 className="title">Memo-Contacts</h2>
      <Navigation />
    </HeaderContainer>
  );
};

export default Header;
