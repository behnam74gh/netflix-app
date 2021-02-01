import React from "react";

import Header from "../components/Header";
import Logo from "../logo.svg";
import * as ROUTES from "../constants/routes";

const HeaderContainer = ({ children }) => {
  return (
    <Header>
      <Header.Frame>
        <Header.Logo to={ROUTES.HOME} src={Logo} alt="Netflix" />
        <Header.ButtonLink to={ROUTES.SIGN_IN}>Signin</Header.ButtonLink>
      </Header.Frame>
      {children}
    </Header>
  );
};

export default HeaderContainer;
