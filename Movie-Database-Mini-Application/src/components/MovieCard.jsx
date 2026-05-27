function MovieCard({ movie, toggleFavorite }) {

  return (
    <div className="movie-card">

      <div>
        <h3>
          {movie.title} ({movie.year})
        </h3>

        <p>{movie.genre}</p>

        <p>⭐ {movie.rating}</p>

        <div className="tags">
          {movie.tags.map((tag, index) => (
            <span key={index} className="tag">
              {tag}
            </span>
          ))}
        </div>
      </div>

      <button
        onClick={() => toggleFavorite(movie.id)}
      >
        {movie.favorite
          ? "❤️ Favorite"
          : "🤍 Favorite"}
      </button>

    </div>
  );
}

export default MovieCard;