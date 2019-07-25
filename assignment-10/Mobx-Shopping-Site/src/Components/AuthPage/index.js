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
import { action, computed, observable } from "mobx";

@observer
class AuthPage extends Component {
  @observable username = "";
  @observable password = "";
  @action onUsernameChange = event => {
    this.username = event.target.value;
  };
  @action onPasswordChange = event => {
    this.password = event.target.value;
  };
  onSubmit = event => {
    this.props.submit(this.username, this.password, this.props.history);
    if (this.props.type === "login") {
      console.log(this.props.loginStatus);
    }
    event.preventDefault();
  };

  componentDidMount() {
    this.props.store.msg = "";
  }

  render() {
    return (
      <AuthContainer>
        <AuthHeading>{this.props.type}</AuthHeading>
        <AuthForm onSubmit={this.onSubmit}>
          <FormMsg>{this.props.store.msg}</FormMsg>
          <div>
            <FormText>Username</FormText>
            <FormInput
              type="text"
              value={this.username}
              required
              onChange={this.onUsernameChange}
            />
          </div>
          <div>
            <FormText>Password</FormText>
            <FormInput
              type="password"
              value={this.password}
              required
              onChange={this.onPasswordChange}
            />
          </div>
          <FormSubmit> Submit</FormSubmit>
        </AuthForm>
        <SignUpText type={this.props.type}>
          {" "}
          {this.props.type === "signup" ? "login" : "sign up"}{" "}
          <Link to={this.props.type === "signup" ? "/login" : "/signup"}>
            here
          </Link>
        </SignUpText>
      </AuthContainer>
    );
  }
}

export default AuthPage;
