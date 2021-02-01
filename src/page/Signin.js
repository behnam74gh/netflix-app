import React, { useState, useContext } from "react";
import { useHistory } from "react-router-dom";
import { FirebaseContext } from "../context/firebase";

import HeaderContainer from "../container/Header";
import FooterContainer from "../container/Footer";
import Form from "../components/Form";
import * as ROUTES from "../constants/routes";

const Signin = () => {
  const [emailAddress, setEmailAddress] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const { firebase } = useContext(FirebaseContext);
  const history = useHistory();
  const isInvalid = password === "" || emailAddress === "";
  const handleSignin = (e) => {
    e.preventDefault();

    firebase
      .auth()
      .signInWithEmailAndPassword(emailAddress, password)
      .then(() => {
        history.push(ROUTES.BROWSE);
      })
      .catch((err) => {
        setPassword("");
        setEmailAddress("");
        setError(err.message);
      });
  };
  return (
    <>
      <HeaderContainer>
        <Form>
          <Form.Title>Sign In</Form.Title>
          {error && <Form.Err>{error}</Form.Err>}
          <Form.Base onSubmit={handleSignin}>
            <Form.Input
              type="email"
              placeholder="Email Address"
              value={emailAddress}
              onChange={(e) => setEmailAddress(e.target.value)}
            />
            <Form.Input
              type="password"
              placeholder="Password"
              autoComplete="off"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <Form.Submit disabled={isInvalid} type="submit">
              Sign In
            </Form.Submit>
          </Form.Base>
          <Form.Text>
            New to Netflix ?{" "}
            <Form.Link to={ROUTES.SIGN_UP}>Sign up now.</Form.Link>
          </Form.Text>
          <Form.SmallText>
            This page is protected by Google reCAPTCHA to ensure you're not a
            bot.Learn more.
          </Form.SmallText>
        </Form>
      </HeaderContainer>
      <FooterContainer />
    </>
  );
};

export default Signin;
