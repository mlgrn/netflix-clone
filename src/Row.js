import React, { useState, useEffect } from "react";
import axios from "./axios";
import "./Row.css";
import YouTube from "react-youtube"
import movieTrailer from 'movie-trailer'

const BASE_IMG_URL = "https://image.tmdb.org/t/p/original";

function Row({ title, fetchUrl, isLargeRow }) {
  const [movies, setMovies] = useState([]);
  const [trailerUrl, setTrailerUrl] = useState("")

  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(fetchUrl);
      setMovies(request.data.results);
      //   return request;
    }
    fetchData();
    //notice how an async function is called inside useEffect
  }, [fetchUrl]);


// const opts = {
//   height: '390',
//   width:"690",
//   host: "https://www.youtube-nocookie.com",
//   playerVars: {
//     autoplay: 1
//   }
// }


// const handleClick = (movie) => {
// if (trailerUrl) {
//   setTrailerUrl('')
// } else {
//   movieTrailer(movie.name || "")
//   .then((url) => {
//     console.log(url)
//     const urlParams = new URLSearchParams(new URL(url).search)
//     setTrailerUrl(urlParams.get('v'))
//   }) 
//   .catch(error => console.log(error))
// }
// }

  return (
    <div className="row">
      <h2>{title}</h2>
      <div className="row__posters">
        {/* container of movie posters */}
        {movies.map((movie) => {
          // console.log(movie.name)
          return (
            <img
              key={movie.id}
              // onClick={() => handleClick(movie)}
              className={`row__poster ${isLargeRow && "row__posterLarge"}`}
              src={`${BASE_IMG_URL}${
                isLargeRow ? movie.poster_path : movie.backdrop_path
              }`}
              alt={movie.title}
            />
          );
        })}
      </div>
     {/* <YouTube videoId="ymc9a9zpF28" opts={opts} /> */}
    </div>
  );
}

export default Row;
