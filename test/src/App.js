import "./App.css";

function App() {
  return (
    <div className="App">
      <h1>SignIn</h1>
      <p>email</p>
      <input type="email"></input>
      <p>password</p>
      <input type="password"></input>
      <div>
        <button type="submit">회원가입</button>
      </div>

      <h1>SignUp</h1>
      <p>email</p>
      <input type="email"></input>
      <p>password</p>
      <input type="password"></input>
      <div>
        <button type="submit">로그인</button>
      </div>
    </div>
  );
}

export default App;
