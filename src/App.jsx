// App.jsx
import './App.css';
import Header from "./components/Header/Header.jsx";
import Hello from "./components/HelloYou/HelloYou.jsx";


const dataOptions = [
  { id: 1, name: "Home" },
  { id: 2, name: "About" },
  { id: 3, name: "Contact" }
];

function App() {
  return (
    <div>
      <p>My Portfolio</p>
      <Header options={dataOptions} />
      <Hello />
    </div>
  );
}

export default App;
