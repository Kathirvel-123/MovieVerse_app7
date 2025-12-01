const BASE_URL = "https://www.omdbapi.com/";

export const searchMovies = async (query, page = 1, type = "") => {
  const response = await fetch(
    `${BASE_URL}?s=${query}&page=${page}&type=${type}&apikey=${import.meta.env.VITE_OMDB_API_KEY}`
  );
  return response.json();
};

export const getMovieDetails = async (id) => {
  const response = await fetch(
    `${BASE_URL}?i=${id}&apikey=${import.meta.env.VITE_OMDB_API_KEY}`
  );
  return response.json();
};
