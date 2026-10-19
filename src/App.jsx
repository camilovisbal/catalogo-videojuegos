import { games } from "./data/games.js";
import Header from "./components/Header.jsx";
import GameCard from "./components/GameCard.jsx";

function App() {
  return (
    <div>
      <Header />
      <div style={{ width: "200px" }}>
        <GameCard
          game={games[0]}
          isFavorite={false}
          onSelect={(gameId) => console.log("Abrir detalle de", gameId)}
          onToggleFavorite={(gameId) => console.log("Favorito", gameId)}
        />
      </div>
    </div>
  );
}

export default App;