import { useState } from "react";
import { games } from "./data/games.js";
import { ALL_GENRES, filterGames } from "./utils/filterGames.js";
import Header from "./components/Header.jsx";
import SearchBar from "./components/SearchBar.jsx";
import GenreFilter from "./components/GenreFilter.jsx";
import FavoritesToggle from "./components/FavoritesToggle.jsx";
import GameList from "./components/GameList.jsx";
import "./App.css";

const GENRES = [ALL_GENRES, ...new Set(games.map((game) => game.genre))];

function App() {
  const [search, setSearch] = useState("");
  const [selectedGenre, setSelectedGenre] = useState(ALL_GENRES);
  const [favoriteIds, setFavoriteIds] = useState([]);
  const [showOnlyFavorites, setShowOnlyFavorites] = useState(false);

  const visibleGames = filterGames(games, {
    search,
    genre: selectedGenre,
    onlyFavorites: showOnlyFavorites,
    favoriteIds,
  });

  const handleToggleFavorite = (gameId) => {
    setFavoriteIds((currentIds) =>
      currentIds.includes(gameId)
        ? currentIds.filter((id) => id !== gameId)
        : [...currentIds, gameId]
    );
  };

  const handleClearFilters = () => {
    setSearch("");
    setSelectedGenre(ALL_GENRES);
    setShowOnlyFavorites(false);
  };

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
        <FavoritesToggle
          count={favoriteIds.length}
          isActive={showOnlyFavorites}
          onToggle={() => setShowOnlyFavorites((current) => !current)}
        />
      </section>

      <main>
        <GameList
          games={visibleGames}
          favoriteIds={favoriteIds}
          onSelectGame={(gameId) => console.log("Abrir detalle de", gameId)}
          onToggleFavorite={handleToggleFavorite}
          onClearFilters={handleClearFilters}
        />
      </main>
    </div>
  );
}

export default App;