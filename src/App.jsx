import { games } from "./data/games.js";
import Header from "./components/Header.jsx";
import GameList from "./components/GameList.jsx";
import "./App.css";

function App() {
  return (
    <div className="app">
      <Header />
      <main>
        <GameList
          games={games}
          favoriteIds={[]}
          onSelectGame={(gameId) => console.log("Abrir detalle de", gameId)}
          onToggleFavorite={(gameId) => console.log("Favorito", gameId)}
        />
      </main>
    </div>
  );
}

export default App;