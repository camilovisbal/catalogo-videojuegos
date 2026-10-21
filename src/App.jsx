import { useState } from "react";
import { games } from "./data/games.js";
import { ALL_GENRES, filterGames } from "./utils/filterGames.js";
import Header from "./components/Header.jsx";
import SearchBar from "./components/SearchBar.jsx";
import GenreFilter from "./components/GenreFilter.jsx";
import GameList from "./components/GameList.jsx";
import "./App.css";

const GENRES = [ALL_GENRES, ...new Set(games.map((game) => game.genre))];

function App() {
  const [search, setSearch] = useState("");
  const [selectedGenre, setSelectedGenre] = useState(ALL_GENRES);

  const visibleGames = filterGames(games, {
    search,
    genre: selectedGenre,
  });

  return (
    <div className="app">
      <Header />

      <section className="toolbar" aria-label="Buscar y filtrar">
        <SearchBar value={search} onChange={setSearch} />
        <GenreFilter
          genres={GENRES}
          selectedGenre={selectedGenre}
          onChange={setSelectedGenre}
        />
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