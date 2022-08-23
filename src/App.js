import logo from "./logo.svg";
import Weather from "./Weather";
import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App">
        <h1> Weather App </h1>
        <footer>
          This project was coded by Jhaap Kaur and is{" "}
          <a
            href="https://github.com/JhaapKaur/react-weather-project"
            target="_blank"
          >
            open-sourced on GitHUb
          </a>
        </footer>
      </header>
    </div>
  );
}

export default App;
