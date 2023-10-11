import { Routes, Route } from "react-router-dom";
import { useSelector } from "react-redux/es/hooks/useSelector";
import Layout from "./components/layouts/Layout";
import AllMeetupsPage from "./pages/AllMeetups";
import FavoritesPage from "./pages/Favorites";
import NewMeetupPage from "./pages/NewMeetup";
import Login from "./pages/Login";

function App() {
  const login = useSelector(state => state.loginReducer.login);
  let content;

  if (login) {
    content = (
      <Layout>
        <Routes>
          <Route path="/" element={<AllMeetupsPage />} />
          <Route path="/favorites" element={<FavoritesPage />} />
          <Route path="/new-meetup" element={<NewMeetupPage />} />
        </Routes>
      </Layout>
    );
  } else {
    content = <Login />;
  }

  return <>{content}</>;
}

export default App;
