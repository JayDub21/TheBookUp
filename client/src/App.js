import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import Login from "./pages/Login";
import SignUp from "./pages/Signup";
import './App.css';

function App() {
  return (
    <Router>
      <Route exact path="/">
        <Login />
      </Route>
      <Route exact path="/signup">
        <SignUp />
      </Route>
    </Router>
 
  );
}

export default App;
