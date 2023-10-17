import { useSelector } from "react-redux";
import classes from "./MainNavigation.module.css";
import LoggedinNavigation from "./LoggedinNavigation";
import LoggedoutNavigation from "./LoggedoutNavigation";

function MainNavigation() {
  const login = useSelector(state => state.loginReducer.login);

  return (
    <header className={classes.header}>
      <div className={classes.logo}>Meetups</div>
      <nav>{login ? <LoggedinNavigation /> : <LoggedoutNavigation />}</nav>
    </header>
  );
}

export default MainNavigation;
