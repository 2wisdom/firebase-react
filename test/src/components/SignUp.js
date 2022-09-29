import React from "react";
import { Link } from "react-router-dom";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";

export default function SignUp() {
  //   const auth = getAuth();
  //   createUserWithEmailAndPassword(auth, signUpEmail, signUpPassword)
  //     .then((userCredential) => {
  //       const user = userCredential.user;
  //     })
  //     .catch((error) => {
  //       const errorCode = error.code;
  //       const errorMessage = error.message;
  //     });

  return (
    <form
    // onSubmit={handleSubmit}
    >
      <h1>SignUp</h1>
      <p>email</p>
      <input type="email"></input>
      <p>password</p>
      <input type="password"></input>
      <div>
        <button type="submit">회원가입</button>
      </div>
      <button>
        <Link to="/">로그인하러 가기</Link>
      </button>
    </form>
  );
}
