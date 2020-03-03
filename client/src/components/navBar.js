import React, { useState } from "react";
import { Link } from "react-router-dom";
import API from "../utils/API";

function NavBar() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  function handleLogoutSubmit(event) {
    event.preventDefault();
    API.logout()
      .then(response => {
        if (isLoggedIn) {
          setIsLoggedIn(false);
          window.location.replace("https://localhost:3000/");
        }
      })
      .catch(err => {
        console.log(err);
      });
  }

  return (
    <nav className="navbar navbar-dark bg-dark">
      <a href="/" className="navbar-brand" id="nameTag">
        The BookUp
      </a>
      <button
        className="navbar-toggler"
        data-toggle="collapse"
        data-target="#navbarMenu"
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarMenu">
        <ul className="navbar-nav ml-auto">
          <li className="nav-item">
            <Link
              to="/post"
              className={
                window.location.pathname === "/post"
                  ? "nav-link active"
                  : "nav-link"
              }
              style={{ textDecoration: "none", color: "white" }}
            >
              Sell My Book
            </Link>
          </li>
          <li className="nav-item">
            <Link
              to="/bookSearch"
              className={
                window.location.pathname === "/bookSearch"
                  ? "nav-link active"
                  : "nav-link"
              }
              style={{ textDecoration: "none", color: "white" }}
            >
              Books For Sale
            </Link>
          </li>
          <li className="nav-item">
            <button type="submit" onClick={handleLogoutSubmit}>
              Sign Out
            </button>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default NavBar;
