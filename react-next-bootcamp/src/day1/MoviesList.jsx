// Challenge 3 (React + JS Reuse):
// Make a Favorite Movies List using React props + arrays.
// Goal: Reuse JavaScript arrays + JSX rendering.
// 🧠 Hints Only (no code):
// Create a MoviesList.jsx component.
// Inside, prepare an array of your top 3–5 favorite movies (just plain JS array of strings).
// Use .map() to display them inside <li> elements.
// Pass a title (like “My Favorite Movies”) as a prop to the component.

const MoviesList = ({ movies }) => {
  return (
    <div className="movies_list">
      <ul>
        {movies.map((m) => (
          <li key={m.id}>
            Movie: {m.movieName}
            Release Date: {m.releaseDate}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MoviesList;
