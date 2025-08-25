import "./App.css";
import "./day1/day1.css";
import Title from "./day1/Title";
import ProfileCard from "./day1/ProfileCard";
import CardList from "./day1/CardList";
import MoviesList from "./day1/MoviesList";

// create PEOPLE object for people props in CardList
const people = [
  {
    id: 1,
    name: "Alex Rivera",
    age: 18,
    bio: "BSIT student, loves React.",
    favoriteColor: "Black",
  },
  {
    id: 2,
    name: "Jamie Cruz",
    age: 30,
    bio: "Front-end curious, gym 4x/wk.",
    favoriteColor: "Pink",
  },
  {
    id: 3,
    name: "Kai Santos",
    age: 19,
    bio: "Enjoys biking and CSS art.",
    favoriteColor: "Purple",
  },
  {
    id: 4,
    name: "Aeryun Caluscos",
    age: 20,
    bio: "A Young Nigga",
    favoriteColor: "Blue",
  },
];

const cars = [
  {
    id: 1,
    name: "Ford Mustang",
    age: 20,
    favoriteColor: "Metal Grey",
  },
  {
    id: 2,
    name: "Dodge Challenger",
    age: 12,
    favoriteColor: "Red",
  },
  {
    id: 3,
    name: "Chevrolet Corvette ZR1",
    age: 4,
    favoriteColor: "Yellow",
  },
];

const moviesList = [
  {
    id: 1,
    movieName: "Transformers",
    releaseDate: 2007,
  },
  {
    id: 2,
    movieName: "John Wick",
    releaseDate: 2014,
  },
  {
    id: 3,
    movieName: "F1",
    releaseDate: 2025,
  },
];
export default function App() {
  return (
    <main style={{ padding: "24px", fontFamily: "system-ui, sans-serif" }}>
      <h1>React + Next.js Bootcamp</h1>
      <p>Day 1 - Functional Components & JSX</p>

      <section>
        <Title text="Mini Challenge: Title via props"></Title>
        <Title text={"Wassup Bitches!"}></Title>
      </section>

      <section>
        <Title text={"Challenge 1: Profile Card"}></Title>
        <ProfileCard
          name="Aeryun Clay Caluscos"
          age="20"
          bio="3rd Year BSIT student"
          favoriteColor={"Navy Blue"}
        ></ProfileCard>
      </section>
      <section>
        <Title text={"Challenge 2: CardList (map + keys)"}></Title>
        {/* Renders the Cardlist for each items in the PEOPLE object and people props */}
        <CardList people={people.filter((p) => p.age > 20)}></CardList>
        {/* shows people older than 20 */}
        {/* people = people object */}
      </section>
      <section>
        <Title text={"Cars"}></Title>
        <CardList people={cars}></CardList>
      </section>

      <section>
        <Title text={"My favorite Movies"}></Title>
        <MoviesList movies={moviesList}></MoviesList>
      </section>
    </main>
  );
}
