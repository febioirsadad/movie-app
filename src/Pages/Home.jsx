import "../App.css";
import { useEffect, useState } from "react";
import { getMovieList, searchMovie } from "../api";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const [popularMovies, setPopularMovies] = useState([]);

  useEffect(() => {
    getMovieList().then((result) => {
      setPopularMovies(result);
    });
  }, []);

  const PopularMovieList = () => {
    return popularMovies.map((movie, i) => {
      return (
        <div className="movie-wrapper" key={i}>
          <div className="movie-title">{movie.title}</div>
          <img
            className="movie-img"
            src={`${process.env.REACT_APP_BASEIMGURL}/${movie.poster_path}`}
            alt={`Poster ${movie.title}`}
          />
          <div className="movie-date">release: {movie.release_date}</div>
          <div className="movie-rate">{movie.vote_average}</div>
          <button
            className="detail-button"
            onClick={() => navigate(`/detail/${movie.id}`)}
          >
            Detail
          </button>
        </div>
      );
    });
  };

  const search = async (q) => {
    if (q.length > 3) {
      const query = await searchMovie(q);
      setPopularMovies(query.results);
    }
  };

  const navigate = useNavigate();

  return (
    <div className="App">
      <header className="App-header">
        <h1>playbio-flix</h1>
        <input
          placeholder="cari film yang anda sukai..."
          className="movie-search"
          onChange={({ target }) => search(target.value)}
        />
        <div className="movie-container">
          <PopularMovieList />
        </div>
      </header>
    </div>
  );
};

export default Home;
