import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { loggedIn } from "../features/login/loginSlice";
import LoginForm from "../components/forms/LoginForm";

function LoginPage() {
  const [loginCredentialsData, setLoginCredentialsData] = useState({});
  const [enteredUsername, setEnteredUsername] = useState("");
  const [enterdPassword, setEnteredPassword] = useState("");

  const dispatch = useDispatch();

  function submitHandler(event) {
    event.preventDefault();
    if (
      loginCredentialsData.username === enteredUsername &&
      loginCredentialsData.password === enterdPassword
    ) {
      console.log("compared");
      dispatch(loggedIn());
    } else {
      console.log("wrong password");
    }
  }

  useEffect(() => {
    fetch(
      "https://first-react-app-3eb72-default-rtdb.firebaseio.com/login.json"
    )
      .then(response => {
        return response.json();
      })
      .then(data => {
        const loginCredentials = {
          username: data.username,
          password: data.password,
        };

        setLoginCredentialsData(loginCredentials);
      });
  }, []);
  // console.log("LOGIN CREDENTIALS DATA:", loginCredentialsData);

  return (
    <LoginForm
      onSubmit={submitHandler}
      username={setEnteredUsername}
      password={setEnteredPassword}
    />
  );
}

export default LoginPage;
