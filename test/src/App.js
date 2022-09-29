import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import SignIn from "./components/SignIn";
import SignUp from "./components/SignUp";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<SignIn />}></Route>
          <Route path="/SignUp/" element={<SignUp />}></Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;
