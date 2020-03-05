import React from "react";
import LoginForm from "../components/loginForm";

function Login() {
  return (
    <div>
      <div className="jumbotron jumbotron-fluid">
        <div className="container">
          <h1 className="display-4">the BookUp</h1>
          <p className="lead">Description.</p>
        </div>
      </div>

      <div className="container">
        <div className="row justify-content-center">
          <div className="col-md-6">
            <div className="loginForm">
              <LoginForm />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
