// import "./App.css";
// import { Counter } from "./features/counter/Counter";

// function App() {
//   return <Counter />;
// }

// export default App;

import { Routes, Route } from "react-router-dom";
import Layout from "./components/layouts/Layout";
import AllMeetupsPage from "./pages/AllMeetups";
import FavoritesPage from "./pages/Favorites";
import NewMeetupPage from "./pages/NewMeetup";

function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<AllMeetupsPage />} />
        <Route path="/favorites" element={<FavoritesPage />} />
        <Route path="/new-meetup" element={<NewMeetupPage />} />
      </Routes>
    </Layout>
  );
}

export default App;
