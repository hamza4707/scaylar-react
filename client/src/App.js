import { Routes, Route } from "react-router-dom";
import { useSelector } from "react-redux/es/hooks/useSelector";
import Layout from "./components/layouts/Layout";
import AllMeetupsPage from "./pages/AllMeetups";
import FavoritesPage from "./pages/Favorites";
import NewMeetupPage from "./pages/NewMeetup";
import Login from "./pages/Login";

function App() {
  const loggedIn = useSelector(state => state.loginReducer.login);
  let content;

  if (loggedIn) {
    content = (
      <Routes>
        <Route path="/" element={<AllMeetupsPage />} />
        <Route path="/favorites" element={<FavoritesPage />} />
        <Route path="/new-meetup" element={<NewMeetupPage />} />
      </Routes>
    );
  } else {
    content = <Login />;
  }

  return <Layout>{content}</Layout>;
}

export default App;
