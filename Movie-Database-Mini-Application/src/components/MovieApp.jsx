import { useState } from "react";
import moviesData from "./moviesData";
import SearchBar from "./SearchBar";
import MovieList from "./MovieList";
import FavoritesSection from "./FavoritesSection";

function MovieApp() {

  const [movies, setMovies] = useState(moviesData);

  const [search, setSearch] = useState("");

  const filteredMovies = movies.filter((movie) =>
    movie.title.toLowerCase().includes(search.toLowerCase())
  );

  const toggleFavorite = (id) => {

    const updatedMovies = movies.map((movie) =>
      movie.id === id
        ? { ...movie, favorite: !movie.favorite }
        : movie
    );

    setMovies(updatedMovies);
  };

  const favoriteMovies = movies.filter(
    (movie) => movie.favorite
  );

  const resetSearch = () => {
    setSearch("");
  };

  return (
    <div className="movie-container">
      <h1>Movie Explorer</h1>
      <SearchBar
        search={search}
        setSearch={setSearch}
        resetSearch={resetSearch}
      />

      {search === "" ? (
        <p>Start typing to search movies...</p>
      ) : filteredMovies.length === 0 ? (
        <p>No movies found.</p>
      ) : (
        <MovieList
          movies={filteredMovies}
          toggleFavorite={toggleFavorite}
        />
      )}

      <FavoritesSection favoriteMovies={favoriteMovies} />

    </div>
  );
}

export default MovieApp;