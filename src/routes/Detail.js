import React, { useState, useEffect, useCallback } from "react";
import { useParams } from "react-router-dom";
import "./Detail.css";

function Detail() {
  const { id } = useParams();
  const [loading, getLoading] = useState(true);
  const [movieInfo, getMovieInfo] = useState([]);
  const [genres, getGenres] = useState([]);
  
  const getMovie = useCallback(async () => {
    const json = await (
      await fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`)
    ).json();
    getLoading(false);
    getMovieInfo(json.data.movie);
    getGenres(json.data.movie.genres);
    console.log(json);
  }, [id]);

  useEffect(() => {
    getMovie();
  }, [getMovie]);
  return (
    <div className="detail_page">
      {loading ? (
        <h1>Loading....</h1>
      ) : (
        <div className="container">
          <img src={movieInfo.large_cover_image} alt={movieInfo.title} />
          <h1>{movieInfo.title}</h1>
          <h4> year :{movieInfo.year} </h4>
          <h5>rate : {movieInfo.rating} /10</h5>
          <h5>
            runtime : {movieInfo.runtime} <span className="style">min</span>
          </h5>

          <ul className="genres">
            genres : &nbsp;{" "}
            {genres.map((g) => (
              <li className="genre" key={g}>
                {g}
              </li>
            ))}
          </ul>
          <br />
          <div>
            <h3>Description :</h3>
            <p>{movieInfo.description_full}</p>
          </div>
        </div>
      )}
    </div>
  );
}
export default Detail;
