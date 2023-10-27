import axios from "axios";

const apiKey = process.env.REACT_APP_APIKEY;
const baseUrl = process.env.REACT_APP_BASEURL;

export const getMovieList = async () => {
  try {
    const movies = await axios.get(
      `${baseUrl}/movie/now_playing?&api_key=${apiKey}`
    );
    // console.log({ movieList: movies });
    const movieList = movies.data.results;
    return movieList;
  } catch (error) {
    console.error("Error fetching movie:", error);
    throw error;
  }
};

export const getPopularMovieList = async () => {
  const popularMovie = await axios.get(
    `${baseUrl}/movie/popular?page=1&api_key=${apiKey}`
  );
  // console.log({ popularMovieList: popularMovie });
  return popularMovie.data.results;
};

export const searchMovie = async (q) => {
  const search = await axios.get(
    `${baseUrl}/search/movie?query=${q}&page=1&api_key=${apiKey}`
  );
  return search.data;
};

export const getMovieDetail = async (movieId) => {
  try {
    const detail = await axios.get(
      `${baseUrl}/movie/${movieId}?page=1&api_key=${apiKey}`
    );
    // console.log({ movieDetail: detail });
    const movieDetail = detail.data;
    return movieDetail;
  } catch (error) {
    console.error("Error fetching movie detail:", error);
    throw error;
  }
};

export const getGenreMovie = async () => {
  try {
    const genre = await axios.get(
      `${baseUrl}/genre/movie/list?page=1&api_key=${apiKey}`
    );
    // console.log({ genreMovie: genre });
    const genreMovie = genre.data.genres;
    return genreMovie;
  } catch (error) {
    console.error("Error fetching movie genre:", error);
    throw error;
  }
};
