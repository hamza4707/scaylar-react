import { useSelector } from "react-redux";
import MeetupList from "../components/meetups/MeetupList";

function FavoritesPage() {
  const favorites = useSelector(state => state.favoriteReducer.favorites);
  let content;
  if (!favorites.length) {
    content = <p>"You got no favorites yet. Start adding some?"</p>;
  } else {
    content = <MeetupList meetups={favorites} />;
  }

  return (
    <>
      <h1>Favorites Page</h1>
      {content}
    </>
  );
}

export default FavoritesPage;
