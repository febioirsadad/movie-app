import "../App.css";
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

  const movieGenres = movieDetail
    ? movieDetail.genres.map((genre) => genre.name)
    : [];

  return (
    <div className="App">
      <header className="App-header">
        <img
          className="detail-movie-img"
          src={`${process.env.REACT_APP_BASEIMGURL}/${movieDetail?.poster_path}`}
          alt={`Poster ${movieDetail?.title}`}
        />
        <div className="detail-movie-title">{movieDetail?.title}</div>
        <div className="detail-movie-date">
          Release: {movieDetail?.release_date}
        </div>
        <div className="detail-movie-genre">
          Genre: {movieGenres.join(", ")}
        </div>
        <div className="detail-movie-rate">
          Rating: {movieDetail?.vote_average}
        </div>
        <div className="detail-movie-overview">{movieDetail?.overview}</div>
        <div className="detail-movie-homepage">
          Homepage:{" "}
          <a
            href={movieDetail?.homepage}
            target="_blank"
            rel="noopener noreferrer"
          >
            {movieDetail?.homepage}
          </a>
        </div>
      </header>
    </div>
  );
};

export default DetailMovie;
