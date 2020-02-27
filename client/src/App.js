import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import Login from "./pages/Login";
import SignUp from "./pages/Signup";

import './App.css';

function App() {
  return (
    <Router>
      <Route exact path="/" component={Login} />
      <Route exact path="/signup" component={SignUp} />
    </Router>
 
  );
}

export default App;
