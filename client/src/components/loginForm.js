import React from "react";
import { Link } from "react-router-dom";

function LoginForm() {
    return (
        <div className="container">
            <div className="row">
                <div className="col-md-6 col-md-offset-3">
                    <h2>Login Form</h2>
                    <form className="login">
                        <div className="form-group">
                            <label htmlFor="exampleInputEmail1">Email address</label>
                            <input type="email" className="form-control" id="email-input" placeholder="Email" />
                        </div>
                        <div className="form-group">
                            <label htmlFor="exampleInputPassword1">Password</label>
                            <input type="password" className="form-control" id="password-input" placeholder="Password" />
                        </div>
                        <button type="submit" className="btn btn-default">Login</button>
                    </form>
                    <br />
                    <p>Or sign up <Link to="/signup" className="/signup">here</Link></p>
                </div>
            </div>
        </div>
    )
}

export default LoginForm