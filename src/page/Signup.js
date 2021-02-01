import React, { useState, useContext } from "react";
import { useHistory } from "react-router-dom";
import { FirebaseContext } from "../context/firebase";

import HeaderContainer from "../container/Header";
import FooterContainer from "../container/Footer";
import Form from "../components/Form";
import * as ROUTES from "../constants/routes";

const SignUp = () => {
  const [firstName, setFirstName] = useState("");
  const [emailAddress, setEmailAddress] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const { firebase } = useContext(FirebaseContext);
  const history = useHistory();
  const isInvalid = firstName === "" || password === "" || emailAddress === "";
  const handleSignin = (e) => {
    e.preventDefault();

    firebase
      .auth()
      .createUserWithEmailAndPassword(emailAddress, password)
      .then((result) => {
        result.user
          .updateProfile({
            displayName: firstName,
            photoURL: Math.floor(Math.random() * 5) + 1,
          })
          .then(() => {
            history.push(ROUTES.BROWSE);
          });
      })
      .catch((err) => {
        setFirstName("");
        setPassword("");
        setEmailAddress("");
        setError(err.message);
      });
  };
  return (
    <>
      <HeaderContainer>
        <Form>
          <Form.Title>Sign Up</Form.Title>
          {error && <Form.Err>{error}</Form.Err>}
          <Form.Base onSubmit={handleSignin}>
            <Form.Input
              type="text"
              placeholder="First Name"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
            />
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
              Sign Up
            </Form.Submit>
          </Form.Base>
          <Form.Text>
            Already a user ?{" "}
            <Form.Link to={ROUTES.SIGN_IN}>Sign In now.</Form.Link>
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

export default SignUp;
