import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import classes from "./MainNavigation.module.css";

function MainNavigation() {
  const favorites = useSelector(state => state.favoriteReducer.totalFavorites);

  return (
    <header className={classes.header}>
      <div className={classes.logo}>React Meetups</div>
      <nav>
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
      </nav>
    </header>
  );
}

export default MainNavigation;
