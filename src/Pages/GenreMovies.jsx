import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { getMovieList, getPopularMovieList, getGenreMovie } from "../api";
import Navbar from "../Components/Navbar";

const GenreMovies = () => {
  const { genre } = useParams();
  const [moviesByGenre, setMoviesByGenre] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchMoviesByGenre = async () => {
      try {
        // Ambil daftar genre dari API
        const genres = await getGenreMovie();
        const genreId = genres.find((g) => g.name === genre)?.id;

        if (genreId) {
          // Ambil daftar film dari API getMovieList
          const movieList = await getMovieList();

          // Ambil daftar film populer dari API getPopularMovieList
          const popularMovieList = await getPopularMovieList();

          // Gabungkan kedua daftar film
          const combinedMovieList = [...movieList, ...popularMovieList];

          // Hilangkan duplikasi berdasarkan ID
          const uniqueMovies = Array.from(
            new Set(combinedMovieList.map((movie) => movie.id))
          ).map((id) => {
            return combinedMovieList.find((movie) => movie.id === id);
          });

          // Filter film-film yang memiliki genre yang sesuai
          const moviesFilteredByGenre = uniqueMovies.filter((movie) =>
            movie.genre_ids.includes(genreId)
          );

          setMoviesByGenre(moviesFilteredByGenre);
        }
      } catch (error) {
        console.error("Error fetching genre or movies:", error);
      }
    };

    fetchMoviesByGenre();
  }, [genre]);

  const MovieList = () => {
    return moviesByGenre.map((movie, i) => {
      return (
        <div className="movie-wrapper" key={i}>
          <div className="movie-title">{movie.title}</div>
          <img
            className="movie-img"
            src={`${process.env.REACT_APP_BASEIMGURL}/${movie.poster_path}`}
            alt={`Poster ${movie.title}`}
          />
          <div className="movie-date">Release: {movie.release_date}</div>
          <div className="movie-rate">Rating: {movie.vote_average}</div>
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

  return (
    <div className="App">
      <header className="App-header">
        <h1>{genre} Movies</h1>
        <Navbar />
        <div className="movie-container">
          <MovieList />
        </div>
      </header>
    </div>
  );
};

export default GenreMovies;
