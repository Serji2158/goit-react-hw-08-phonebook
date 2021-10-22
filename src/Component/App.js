import React from "react";
// import { useSelector } from "react-redux";
import Header from "./header/Header";
import Main from "./main/Main";

const App = () => {
  // const tokenContact = useSelector((state) => state.auth.token);

  // useEffect(() => {
  //   tokenContact ? token.set(tokenContact) : token.set("");
  // }, [tokenContact]);

  return (
    <>
      <Header />
      <Main />
    </>
  );
};

export default App;
