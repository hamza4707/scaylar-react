import { Routes, Route } from "react-router-dom";
import Layout from "./components/layouts/Layout";
import AllMeetupsPage from "./pages/AllMeetups";
import FavoritesPage from "./pages/Favorites";
import NewMeetupPage from "./pages/NewMeetup";
import Login from "./pages/Login";

function App() {
  let login = false;
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
