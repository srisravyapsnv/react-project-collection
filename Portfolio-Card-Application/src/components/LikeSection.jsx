function LikeSection({ likes, handleLike }) {
  return (
    <div className="likes-section">

      <button onClick={handleLike}>
        ❤️ Like
      </button>

      <p>{likes} Likes</p>

    </div>
  );
}

export default LikeSection;