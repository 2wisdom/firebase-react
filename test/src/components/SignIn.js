import React from "react";
import { Link } from "react-router-dom";

export default function SignIn() {
  return (
    <form
    // onSubmit={handleSubmit}
    >
      <h1>SignIn</h1>
      <p>email</p>
      <input type="email"></input>
      <p>password</p>
      <input type="password"></input>
      <div>
        <button type="submit">로그인</button>
      </div>
      <button>
        <Link to="/SignUp">회원가입하러 가기</Link>
      </button>
    </form>
  );
}
