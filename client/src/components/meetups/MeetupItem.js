import { useDispatch, useSelector } from "react-redux";
import {
  addFavorite,
  removeFavorite,
} from "../../features/favorite/favoriteSlice";
import Card from "../ui/Card";
import classes from "./MeetupItem.module.css";

function MeetupItem(props) {
  const dispatch = useDispatch();
  const favorites = useSelector(state => state.favoriteReducer.favorites);
  // console.log("favorites :", favorites);

  return (
    <Card>
      <li className={classes.item}>
        <div className={classes.image}>
          <img src={props.image} alt={props.title} />
        </div>
        <div className={classes.content}>
          <h3>{props.title}</h3>
          <address>{props.address}</address>
          <p>{props.description}</p>
        </div>
        <div className={classes.actions}>
          {favorites.some(fav => fav.id === props.id) ? (
            <button onClick={() => dispatch(removeFavorite(props))}>
              Remove From Favorite
            </button>
          ) : (
            <button onClick={() => dispatch(addFavorite(props))}>
              Add to Favorites
            </button>
          )}
        </div>
      </li>
    </Card>
  );
}

export default MeetupItem;
