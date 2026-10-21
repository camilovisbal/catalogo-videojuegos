import { useState } from "react";
import { games } from "./data/games.js";
import { filterGames } from "./utils/filterGames.js";
import Header from "./components/Header.jsx";
import SearchBar from "./components/SearchBar.jsx";
import GameList from "./components/GameList.jsx";
import "./App.css";

function App() {
  const [search, setSearch] = useState("");

  const visibleGames = filterGames(games, { search });

  return (
    <div className="app">
      <Header />

      <section className="toolbar" aria-label="Buscar y filtrar">
        <SearchBar value={search} onChange={setSearch} />
      </section>

      <main>
        <GameList
          games={visibleGames}
          favoriteIds={[]}
          onSelectGame={(gameId) => console.log("Abrir detalle de", gameId)}
          onToggleFavorite={(gameId) => console.log("Favorito", gameId)}
        />
      </main>
    </div>
  );
}

export default App;