import React from "react";

const MovieList = (props) => {
  const FavoriteComponent = props.favoriteComponent;

  return (
    <>
      {props.movies.map((movie) => (
        <>
          {movie.Poster !== "N/A" && (
            <div key={movie.imdbID} className="image-container">
              <img src={movie.Poster} alt="poster" />

              <div className="movie-year">
                <p className="inside">
                  {parseFloat(
                    (+movie.Year.replace(/\D/g, "") - 1900) / 15
                  ).toFixed(1)}
                </p>
              </div>

              <div
                onClick={() => props.handleFavouritesClick(movie)}
                className="overlay"
              >
                <FavoriteComponent />
              </div>
            </div>
          )}
        </>
      ))}
    </>
  );
};

export default MovieList;
