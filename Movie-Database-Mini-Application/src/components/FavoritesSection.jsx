function FavoritesSection({ favoriteMovies }) {

  return (
    <div className="favorites-section">

      <h2>Favorite Movies</h2>

      {favoriteMovies.length === 0 ? (
        <p>You haven't added any favorites yet.</p>
      ) : (
        favoriteMovies.map((movie) => (
          <p key={movie.id}>
            ❤️ {movie.title} ({movie.year})
          </p>
        ))
      )}

    </div>
  );
}

export default FavoritesSection;