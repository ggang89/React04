import React, { useEffect, useState } from "react";
import Movie from "../components/Movie";
import "./Home.css";

function Home() {
  const [loading, setLoading] = useState(true);
  const [movies, setMovies] = useState([]);
  const getMovies = async () => {
    const json = await (
      await fetch(
        `https://yts.mx/api/v2/list_movies.json?minimum_rating=8.8&sort_by=year`
      )
    ).json();
    setLoading(false);
    setMovies(json.data.movies);
    console.log(json);
  };
  useEffect(() => {
    getMovies();
  }, []);
  return (
    <>
      {loading ? (
        <div className="loading_text">loading...</div>
      ) : (
        <div className="content_box">
          <h2 className="title">Movie List</h2>
          <div className="movies">
            {movies.map((movie) => (
              <Movie
                key={movie.key}
                id={movie.id}
                year={movie.year}
                coverImg={movie.medium_cover_image}
                title={movie.title}
                summary={movie.summary}
                genres={movie.genres}
                rating={movie.rating}
              />
            ))}
          </div>
        </div>
      )}
    </>
  );
}
export default Home;
