import React from "react";
import PropTypes from "prop-types";
import "./Movie.css";

function Movie({ id, year, coverImg, title, summary, genres, rating }) {
  return (
    <div className="movie_box">
      <img className="movie_img" src={coverImg} alt={title} />
      <div className="movie_info">
      <h2 className="movie_title">{title}</h2>
      <h3>{year}</h3>
      <h3 className="movie_rating">rating: {rating}/10</h3>
      </div>
      <ul className="genres">
        {genres.map((g) => (
          <li className="genres_list" key={g}>{g}</li>
        ))}
      </ul>
      <p>{summary.length > 235 ? `${summary.slice(0, 235)}.....` : summary}</p>
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
