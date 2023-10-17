import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setLogin } from "../features/login/loginSlice";
import { setToken } from "../features/token/tokenSlice";
import { signupClicked } from "../features/signup/signupSlice";
import LoginForm from "../components/forms/LoginForm";

function LoginPage() {
  const [enteredEmail, setEnteredEmail] = useState("");
  const [enteredPassword, setEnteredPassword] = useState("");
  const [enteredUsername, setEnteredUsername] = useState("");
  const [enteredConfirmPassword, setEnteredConfirmPassword] = useState("");

  const isSignup = useSelector(state => state.signupReducer.signup);

  const dispatch = useDispatch();

  async function submitHandler(event) {
    event.preventDefault();
    if (!isSignup) {
      const response = await fetch("http://localhost:8000/login", {
        method: "POST",
        body: JSON.stringify({
          email: enteredEmail,
          password: enteredPassword,
        }),
        headers: { "Content-type": "application/json" },
      });
      const data = await response.json();

      if (data.body.token) {
        dispatch(setToken(data.body.token));
      }
      if (data.body.login) {
        dispatch(setLogin());
      }
    } else {
      if (enteredPassword === enteredConfirmPassword) {
        const response = await fetch("http://localhost:8000/signup", {
          method: "POST",
          body: JSON.stringify({
            username: enteredUsername,
            email: enteredEmail,
            password: enteredPassword,
          }),
          headers: { "Content-type": "application/json" },
        });
        const data = await response.json();
        if (data.status === "success") {
          dispatch(signupClicked());
        }
      } else console.log("Password didn`t match!");
    }
  }

  return (
    <LoginForm
      onSubmit={submitHandler}
      username={setEnteredUsername}
      email={setEnteredEmail}
      password={setEnteredPassword}
      confirmPassword={setEnteredConfirmPassword}
    />
  );
}

export default LoginPage;
