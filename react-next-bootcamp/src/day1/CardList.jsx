// Challenge 2: <CardList /> with .map() + keys (25–30 min)
// Objective: Render a list of people as profile cards.
// Acceptance Criteria
// Maps an array of objects to <ProfileCard />.
// Uses a stable unique key (e.g., id).
// Renders in a responsive grid.

// imports the ProfileCard for reuse
import ProfileCard from "./ProfileCard";

// use {people} as propts
const CardList = ({ people }) => {
  return (
    <div className="grid">
      {/* // creates a .map (new array) of people inside the PEOPLE object from App.jsx */}
      {/* ProfileCard fetches the data from people object in App.jsx from id, name, age, bio and favoriteColor */}
      {people.map((p) => (
        <ProfileCard
          key={p.id}
          name={p.name}
          age={p.age}
          bio={p.bio}
          favoriteColor={p.favoriteColor}
        />
      ))}
    </div>
  );
};

export default CardList;
