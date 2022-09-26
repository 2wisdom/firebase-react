import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { AuthContextProvider } from "./context/AuthContext";

import SignIn from "./components/SignIn";
import SignUp from "./components/SignUp";

function App() {
  return (
    <AuthContextProvider>
      <Router>
        <Routes>
          <Route path="/" element={<SignIn />}></Route>
          <Route path="/SignUp/" element={<SignUp />}></Route>
        </Routes>
      </Router>
    </AuthContextProvider>
  );
}

export default App;
