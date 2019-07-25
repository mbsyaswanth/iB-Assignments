import React, { Component } from "react";
import {
  AuthContainer,
  AuthForm,
  AuthHeading,
  FormMsg,
  FormText,
  FormInput,
  FormSubmit,
  SignUpText
} from "./styledComponents";
import {
  BrowserRouter as Router,
  Route,
  Link,
  Redirect,
  withRouter
} from "react-router-dom";

import { observer } from "mobx-react";

export class AuthPage extends Component {
  render() {
    return (
      <AuthContainer>
        <AuthHeading>Login</AuthHeading>
        <AuthForm>
          <FormMsg>this is error message</FormMsg>
          <div>
            <FormText>Username</FormText>
            <FormInput type="text" required />
          </div>
          <div>
            <FormText>Password</FormText>
            <FormInput type="password" required />
          </div>
          <FormSubmit> Submit</FormSubmit>
        </AuthForm>
        <SignUpText>
          {" "}
          sign up{" "}
          <Link to="signup" render={AuthPage}>
            here
          </Link>
        </SignUpText>
      </AuthContainer>
    );
  }
}

export default AuthPage;
