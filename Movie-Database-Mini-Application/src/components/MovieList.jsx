import MovieCard from "./MovieCard";

function MovieList({ movies, toggleFavorite }) {

  return (
    <div>

      <h2>Matching Movies</h2>

      {movies.map((movie) => (
        <MovieCard
          key={movie.id}
          movie={movie}
          toggleFavorite={toggleFavorite}
        />
      ))}

    </div>
  );
}

export default MovieList;