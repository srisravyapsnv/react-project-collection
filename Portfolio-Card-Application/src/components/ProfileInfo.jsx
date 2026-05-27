function ProfileInfo({ image, name, role, bio }) {
  return (
    <div className="profile-info">
      <img src={image} alt={name} className="profile-img" />

      <h1>{name}</h1>

      <h3>{role}</h3>

      <p>{bio}</p>
    </div>
  );
}

export default ProfileInfo;