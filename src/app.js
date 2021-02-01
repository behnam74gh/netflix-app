import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import * as ROUTES from "./constants/routes";
import Home from "./page/Home";
import DefaultPage from "./page/Default";
import Browse from "./page/Browse";
import Signin from "./page/Signin";
import Signup from "./page/Signup";
import { IsUserRedirect, ProtectedRoute } from "./helper/routes";
import useAuthListener from "./hooks/use-auth-listener";

const App = () => {
  const { user } = useAuthListener();
  return (
    <Router>
      <Switch>
        <IsUserRedirect
          user={user}
          loggedInPath={ROUTES.BROWSE}
          path={ROUTES.SIGN_UP}
        >
          <Signup />
        </IsUserRedirect>
        <IsUserRedirect
          user={user}
          loggedInPath={ROUTES.BROWSE}
          path={ROUTES.SIGN_IN}
        >
          <Signin />
        </IsUserRedirect>
        <ProtectedRoute user={user} path={ROUTES.BROWSE}>
          <Browse />
        </ProtectedRoute>
        <IsUserRedirect
          user={user}
          loggedInPath={ROUTES.BROWSE}
          path={ROUTES.HOME}
        >
          <Home />
        </IsUserRedirect>
        <Route component={DefaultPage} />
      </Switch>
    </Router>
  );
};

export default App;
