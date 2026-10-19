import GameCard from "./GameCard.jsx";
import "./GameList.css";

function GameList({ games, favoriteIds, onSelectGame, onToggleFavorite }) {
    return (
        <ul className="shelf">
            {games.map((game) => (
                <li key={game.id} className="shelf__slot">
                    <GameCard
                        game={game}
                        isFavorite={favoriteIds.includes(game.id)}
                        onSelect={onSelectGame}
                        onToggleFavorite={onToggleFavorite}
                    />
                </li>
            ))}
        </ul>
    );
}

export default GameList;