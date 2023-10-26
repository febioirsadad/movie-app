import { useParams } from "react-router-dom";
import { getMovieDetail } from "../api";
import { useEffect, useState } from "react";

const DetailMovie = () => {
  const { movieId } = useParams();
  const [movieDetail, setMovieDetail] = useState(null);

  useEffect(() => {
    getMovieDetail(movieId)
      .then((result) => {
        setMovieDetail(result);
      })
      .catch((error) => {
        console.error("Error fetching movie detail:", error);
      });
  }, [movieId]);

  return (
    <div className="App">
      <header className="App-header">
        <h1>DETAIL FILM</h1>
        <div className="movie-title">{movieDetail?.title}</div>
        <img
          className="movie-img"
          src={`${process.env.REACT_APP_BASEIMGURL}/${movieDetail?.poster_path}`}
          alt={`Poster ${movieDetail?.title}`}
        />
        <div className="movie-date">Release: {movieDetail?.release_date}</div>
        <div className="movie-rate">{movieDetail?.vote_average}</div>
      </header>
    </div>
  );
};

export default DetailMovie;
