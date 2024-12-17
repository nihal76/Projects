import React, { useState } from "react";
import { movies } from "../data.js";
import './App.css';

const Movies = ()=> {
  const [movieList, setMovieList] = useState(movies);

  const filterCategory = (category) => {
    setMovieList(movies.filter((data) => data.category == category))
  }
  
  return (
    <>
      <div
        className="buttons"
        style={{
          display: "flex",
          justifyContent: "center",
        }}
      >
        <button
          onClick={() => setMovieList(movies)}
          type="button"
          className="btn btn-primary"
        >
          All
        </button>
        <button
          onClick={() => filterCategory("Action")}
          type="button"
          className="btn btn-secondary"
        >
          Action
        </button>
        <button
          onClick={() => filterCategory("Thriller")}
          type="button"
          className="btn btn-success"
        >
          Thriller
        </button>
        <button
          onClick={() => filterCategory("Animation")}
          type="button"
          className="btn btn-danger"
        >
          Animation
        </button>
        <button
          onClick={() => filterCategory("Horror")}
          type="button"
          className="btn btn-warning"
        >
          Horror'
        </button>
        <button
          onClick={() => filterCategory("Drama")}
          type="button"
          className="btn btn-info"
        >
          Drama
        </button>
        <button
          onClick={() => filterCategory('Sci-Fi"')}
          type="button"
          className="btn btn-light"
        >
          Sci-Fi
        </button>
      </div>
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          alignItems: "center",
          justifyContent: "center",
          minHeight: "100vh",
        }}
      >
        {movieList.map((movie) => (
          <div
            key={movie.id}
            style={{
              width: "15vw",
              height: "auto",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              gap: "1em",
            }}
          >
            <img src={movie.poster_path} alt="" />
            <h3>{movie.title}</h3>
            <p>{movie.release_date}</p>
          </div>
        ))}
      </div>
    </>
  );
};

export default Movies;