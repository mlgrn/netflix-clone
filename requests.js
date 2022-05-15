const APIKEY = "b07fb94319ef829079358b3b145ef1fd";

const requests = {
  fetchTrending: `/trending/all/week?api_key=${APIKEY}`,
  fetchNetflixOriginals: `/discover/tv?api_key=${APIKEY}&with_networks=213`,
  fetchTopRated: `/movie/top_rated?api_key=<<api_key>>&language=en-US`,
  fetchActionMovies: `/discover/movie?api_key=<<api_key>>&with_genres=28`,
  fetchComedyMovies: `/discover/movie?api_key=<<api_key>>&with_genres=35`,
  fetchHorrorMovies: `/discover/movie?api_key=<<api_key>>&with_genres=27`,
  fetchRomanceMovies: `/discover/movie?api_key=<<api_key>>&with_genres=10749`,
  fetchDocumentaries: `/discover/movie?api_key=<<api_key>>&with_genres=99`,
};
