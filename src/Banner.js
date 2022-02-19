import React from "react";
import { useEffect, useState } from "react";
import axios from "./axios";
import requests from "./requests";

function Banner() {
  const [movie, setMovie] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(requests.fetchNetflixOriginals);
      setMovie(
        request.data.results[
          Math.floor(Math.random() * request.data.results.length - 1)
        ]
      );
      return request;
    }
    fetchData();
  }, []);

  return (
    <header className="banner">
      <div className="banner__contents">
        {/*Backgrounfd image*/}

        {/*title*/}
        {/*div*/}
        {/*description*/}
      </div>
    </header>
  );
}

export default Banner;
