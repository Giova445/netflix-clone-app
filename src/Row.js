import React, { useState, useEffect } from 'react';
import axios from './axios';
import "./Row.css"

//base url for the images
const base_url = "https://image.tmdb.org/t/p/original/"
//component
function Row({ title, fetchUrl, isLargeRow }) {
  const [movies, setMovies] = useState([]);

  // a snippet of code which runs based on a specific condition
  useEffect(() => {
    // if [] is "blank", run once  when the row loads, only on page load
    async function fetchData () {
        const request = await axios.get(fetchUrl);
        setMovies(request.data.results);
        return request;
    }
    fetchData();
  }, [fetchUrl]);
  console.log(movies)
  return (
    <div className="row">
        <h2>{title}</h2>

        {/* container -> posters */}
        <div className="row__posters">
            {/*several {row posters} */}

            {movies.map(movie => (
                <img 
                key={movie.id}
                className={`row__poster ${isLargeRow && "row_posterLarge"}`} //if its only poster will add a new class row_posterLarge
                src={`${base_url}${
                    isLargeRow ? movie.poster_path : movie.backdrop_path}`} alt= {movie.name} />
            ))}

        </div>
    </div>
  )
}

export default Row