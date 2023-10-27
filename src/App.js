import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import DetailMovie from "./Pages/DetailMovie";
import GenreMovies from "./Pages/GenreMovies";
import NotFound from "./Pages/NotFound";
import PopularMovies from "./Pages/PopularMovies";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/popular" element={<PopularMovies />} />
        <Route path="/detail/:movieId" element={<DetailMovie />} />
        <Route path="/genre/:genre" element={<GenreMovies />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
};

export default App;
