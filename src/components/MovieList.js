import React from "react";

const MovieList = (props) => {
  const FavoriteComponent = props.favoriteComponent;
  return (
    <>
      {props.movies.map((movie, index) => (
        <div
          style={{ width: "auto" }}
          className="image-container d-flex justify-content-start mx-3"
        >
          <img src={movie.Poster} alt="poster" />
          <div
            onClick={() => props.handleFavouritesClick(movie)}
            className="overlay d-flex align-items-center justify-content-center"
          >
            <FavoriteComponent />
          </div>
        </div>
      ))}
    </>
  );
};

export default MovieList;
