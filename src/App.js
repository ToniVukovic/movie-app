import { useEffect, useState } from "react";
import MovieList from "./components/MovieList";
import "./App.css";
import MovieListHeading from "./components/MovieListHeading";
import SearchBox from "./components/SearchBox";
import AddFavourites from "./components/AddFavourites";
import RemoveFavourites from "./components/RemoveFavourites";

function App() {
  const [movies, setMovies] = useState([]);
  const [searchValue, setSearchValue] = useState("");
  const [favourites, setFavourites] = useState([]);

  const getMovieRequest = async (searchValue) => {
    const url = `http://www.omdbapi.com/?s=${searchValue}&apikey=e01f711`;

    const response = await fetch(url);
    const responseJson = await response.json();
    if (responseJson.Search) {
      setMovies(responseJson.Search);
    }
  };

  useEffect(() => {
    getMovieRequest(searchValue);
  }, [searchValue]);

  const AddFavouriteMovie = (movie) => {
    const newFavouriteList = [...favourites, movie];
    setFavourites(newFavouriteList);
    ////////////////////
    const newMovieList = movies.filter(
      (favourite) => favourite.imdbID !== movie.imdbID
    );
    setMovies(newMovieList);
  };

  const RemoveFavouriteMovie = (movie) => {
    const newFavouriteList = favourites.filter(
      (favourite) => favourite.imdbID !== movie.imdbID
    );
    setFavourites(newFavouriteList);
    ////////
    const newMovieList = [...movies, movie];
    setMovies(newMovieList);
  };

  var prevScrollpos = window.pageYOffset;
  window.onscroll = function () {
    var currentScrollPos = window.pageYOffset;
    if (prevScrollpos > currentScrollPos) {
      document.getElementById("navbar").style.top = "0";
    } else {
      document.getElementById("navbar").style.top = "-200px";
    }
    prevScrollpos = currentScrollPos;
  };

  return (
    <div className="movie-app">
      <div className="head" id="navbar">
        <MovieListHeading heading="Find your favourite movie" />
        <SearchBox searchValue={searchValue} setSearchValue={setSearchValue} />
      </div>

      <div className="smaller-box back-off clear-top">
        {searchValue && <MovieListHeading heading="Results" />}
      </div>
      {searchValue && (
        <div className="box">
          <MovieList
            movies={movies}
            handleFavouritesClick={AddFavouriteMovie}
            favoriteComponent={AddFavourites}
          />
        </div>
      )}
      <div className="">
        <MovieListHeading heading="Favourites" />
      </div>
      <div className="box fav-box" style={{ background: "#404040" }}>
        <MovieList
          movies={favourites}
          handleFavouritesClick={RemoveFavouriteMovie}
          favoriteComponent={RemoveFavourites}
        />
      </div>
    </div>
  );
}

export default App;
