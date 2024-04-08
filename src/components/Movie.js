import React from "react";
import PropTypes from "prop-types";
import "./Movie.css";
import { Link } from "react-router-dom";

function Movie({ id, year, coverImg, title, summary, genres, rating }) {
  return (
    <div className="movie_box">
      <div className="movie_title">
        <img className="movie_img" src={coverImg} alt={title} />
        <div className="movie_info">
          <h2>
            <Link to={`/movie/${id}`}>{title}</Link>
          </h2>
          <h3>{year}</h3>
          <h3 className="movie_rating">rating: {rating}/10</h3>
          <ul className="genres">
            {genres.map((g) => (
              <li className="genres_list" key={g}>
                {g}
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="summary">
        <h4>summary:</h4>{" "}
        {summary.length > 200 ? `${summary.slice(0, 200)}.....` : summary}
      </div>
    </div>
  );
}

Movie.propTypes = {
  year: PropTypes.number.isRequired,
  coverImg: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  summary: PropTypes.string.isRequired,
  genres: PropTypes.arrayOf(PropTypes.string).isRequired,
  id: PropTypes.number.isRequired,
};
export default Movie;
