import React from "react";

import Header from "../components/Header";
import Profiles from "../components/Profiles";
import * as ROUTES from "../constants/routes";
import Logo from "../logo.svg";

const SelectProfileContainer = ({ user, setProfile }) => {
  return (
    <>
      <Header src={false}>
        <Header.Frame>
          <Header.Logo to={ROUTES.HOME} src={Logo} alt="Netflix" />
        </Header.Frame>
      </Header>
      <Profiles>
        <Profiles.Title>Who's watching?</Profiles.Title>
        <Profiles.List>
          <Profiles.User
            onClick={() =>
              setProfile({
                displayName: user.displayName,
                photoURL: user.photoURL,
              })
            }
          >
            <Profiles.Picture src={user.photoURL} />
            <Profiles.Name>{user.displayName}</Profiles.Name>
          </Profiles.User>
        </Profiles.List>
      </Profiles>
    </>
  );
};

export default SelectProfileContainer;
