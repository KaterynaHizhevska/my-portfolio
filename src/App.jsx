// App.jsx
import './App.css';
import Header from "./components/Header/Header.jsx";
import Hero from "./components/Hero/Hero.jsx";


const dataOptions = [
  { id: 1, name: "Home" },
  { id: 2, name: "About" },
  { id: 3, name: "Contact" }
];

function App() {
  return (
    <section>
      <Header options={dataOptions} />
      <Hero />
    </section>
  );
}

export default App;
