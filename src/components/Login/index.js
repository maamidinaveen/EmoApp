import { Component } from "react";
import { Redirect } from "react-router-dom";
import Cookies from "js-cookie";

import ProtectedRoute from "../ProtectedRoute";

import "./index.css";

class Login extends Component {
  state = { username: "", password: "", showError: false, error: "" };

  onEnterUsername = (event) => {
    this.setState({ username: event.target.value });
  };

  onEnterPassword = (event) => {
    this.setState({ password: event.target.value });
  };

  onSuccess = (jwtToken) => {
    Cookies.set("jwtToken", jwtToken, { expires: 100 });
    const { history } = this.props;
    history.replace("/logout");
  };

  onSignup = async (event) => {
    event.preventDefault();
    const { username, password } = this.state;
    const userDetails = { username, password };
    const url = `url is required for the signup`;
    const options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(userDetails),
    };
    const response = await fetch(url, options);
    const data = await response.json();
    if (response.ok === true) {
      this.onSuccess(data.jwt_token);
    } else if (!response.ok) {
      this.setState({ showError: true, error: data.errorMsg });
    }
  };

  render() {
    const { username, password, showError, error } = this.state;
    const token = Cookies.get("jwtToken");
    if (token !== undefined) {
      return <Redirect to="/logout" />;
    }
    return (
      <form className="form-container" onSubmit={this.onSignup}>
        <div className="input-field">
          <label className="input-label" htmlFor="username">
            username
          </label>
          <input
            type="text"
            id="username"
            className="username-input-field"
            value={username}
            onChange={this.onEnterUsername}
          />
        </div>
        <div className="input-field">
          <label className="input-label" htmlFor="password">
            password
          </label>
          <input
            type="password"
            id="password"
            className="password-input-field"
            value={password}
            onChange={this.onEnterPassword}
          />
        </div>
        <button type="submit" className="login-button">
          Login
        </button>
        {showError && <p className="error-message">{error}</p>}
      </form>
    );
  }
}

export default Login;
