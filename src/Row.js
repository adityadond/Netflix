import React, { useState, useEffect } from "react";
import axios from "./axios";
import './Row.css'

const base_url = "https://image.tmdb.org/t/p/original";

function Row({ title, fetchUrl,isLargeRow }) {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    //runOnce when row loads and dont run again
    async function fetchData() {
      const request = await axios.get(fetchUrl);
      setMovies(request.data.results);
      return request;
    }
    fetchData();
  }, [fetchUrl]);

//Aditya dond

  return (
    <div className="row">
      {/*title*/}
      <h2>{title}</h2>
      <div className="row__posters">
        {/* row posters*/}
        {movies.map((movie) => movie.backdrop_path !== null &&(
          <img
          key={movie.id}
            className={`row__poster ${isLargeRow && "row__posterLarge"}`}
            src={`${base_url}${isLargeRow ?movie.poster_path:movie.backdrop_path}`}
            alt={movie.name}
          />
        ))}
      </div>
      {/*containers*/}
    </div>
  );
}

export default Row;
