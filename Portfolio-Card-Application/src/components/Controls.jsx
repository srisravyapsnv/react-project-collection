function Controls({
  nextProfile,
  previousProfile,
  showAlert
}) {
  return (
    <div className="controls">
      <button onClick={previousProfile}>prev</button>

      <button onClick={nextProfile}>next</button>

      <button onClick={showAlert}>
        Contact
      </button>
    </div>
  );
}

export default Controls;