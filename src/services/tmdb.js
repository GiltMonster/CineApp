import axios from 'axios';

const API_KEY = process.env.REACT_APP_TMDB_API_KEY;
const BASE_URL = 'https://api.themoviedb.org/3';

export const getPopularMovies = async (page = 1) => {
  const { data } = await axios.get(`${BASE_URL}/movie/popular`, {
    params: {
      api_key: API_KEY,
      language: 'pt-BR',
      page,
    },
  });
  return data;
};

export const searchMovies = async (query, page = 1) => {
  const { data } = await axios.get(`${BASE_URL}/search/movie`, {
    params: {
      api_key: API_KEY,
      language: 'pt-BR',
      query,
      page,
    },
  });
  return data;
};

export const getMovieDetails = async (id) => {
  const { data } = await axios.get(`${BASE_URL}/movie/${id}`, {
    params: {
      api_key: API_KEY,
      language: 'pt-BR',
    },
  });
  return data;
};
