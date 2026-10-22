import GameCard from "./GameCard.jsx";
import "./GameList.css";

function GameList({ games, favoriteIds, onSelectGame, onToggleFavorite, onClearFilters }) {
    if (games.length === 0) {
        return (
            <div className="empty">
                <p className="empty__title">Este estante está vacío</p>
                <p>Ningún juego coincide con la búsqueda o los filtros actuales.</p>
                <button type="button" className="empty__button" onClick={onClearFilters}>
                    Limpiar filtros
                </button>
            </div>
        );
    } 

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