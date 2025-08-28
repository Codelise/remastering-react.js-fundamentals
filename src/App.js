import logo from "./logo.svg";
import "./App.css";
import List from "./component/List";
import TechList from "./component/TechList";
import ProductList from "./component/ProductList";
import CarList from "./component/CarList";
function App() {
  return (
    <>
      <List />
      <TechList />
      <ProductList />
      <CarList />
    </>
  );
}

export default App;
