import "./App.css";
import Dictionary from "./Dictionary";

function App() {
  return (
    <div className="App">
      <div className="container">
        <header className="App-header"> My Dictionary App</header>
        <main>
          <Dictionary />
        </main>
        <footer className="App-footer">
          This project was coded by Lila Oliver
        </footer>
      </div>
    </div>
  );
}

export default App;
