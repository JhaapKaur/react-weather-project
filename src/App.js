import Weather from "./Weather";
import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App">
        <div className="container">
          <h1> Weather App </h1>
          <Weather defaultCity="New York" />
          <footer>
            This project was coded by Jhaap Kaur and is{" "}
            <a
              rel="noopener noreferrer"
              href="https://github.com/JhaapKaur/react-weather-project"
              target="_blank"
            >
              open-sourced on GitHUb
            </a>
          </footer>
        </div>
      </header>
    </div>
  );
}

export default App;
