import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import classes from "./LoggedinNavigation.module.css";

function LoggedinNavigation() {
  const favorites = useSelector(state => state.favoriteReducer.totalFavorites);

  return (
    <ul>
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to="/new-meetup">New Meetup</Link>
      </li>
      <li>
        <Link to="/favorites">Favorites</Link>
        <span className={classes.badge}>{favorites}</span>
      </li>
    </ul>
  );
}

export default LoggedinNavigation;

// className={classes.badge}
