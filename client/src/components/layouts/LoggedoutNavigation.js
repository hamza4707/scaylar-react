import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { signupClicked } from "../../features/signup/signupSlice";
import { useSelector } from "react-redux/es/hooks/useSelector";

function LoggedoutNavigation() {
  const isSignupClicked = useSelector(state => state.signupReducer.signup);
  // console.log("isSignup:", isSignupClicked);

  const dispatch = useDispatch();
  return (
    <ul>
      <li>
        <Link to="#" onClick={() => dispatch(signupClicked())}>
          {isSignupClicked ? "Login" : "Signup"}
        </Link>
      </li>
    </ul>
  );
}

export default LoggedoutNavigation;
