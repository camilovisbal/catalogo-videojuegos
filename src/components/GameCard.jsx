import "./GameCard.css";

function GameCard({ game, isFavorite, onSelect, onToggleFavorite }) {
    return (
        <article className="card" data-genre={game.genre}>
            <button
                type="button"
                className="card__open"
                onClick={() => onSelect(game.id)}
            >
                <img className="card__cover" src={game.image} alt={`Portada de ${game.name}`} />
                <span className="card__info">
                    <span className="card__name">{game.name}</span>
                    <span className="card__meta">
                        <span className="card__genre">{game.genre}</span>
                        <span className="card__year">{game.year}</span>
                    </span>
                </span>
            </button>

            <button
                type="button"
                className="card__fav"
                aria-pressed={isFavorite}
                aria-label={isFavorite ? `Quitar ${game.name} de favoritos` : `Agregar ${game.name} a favoritos`}
                onClick={() => onToggleFavorite(game.id)}
            >
                {isFavorite ? "★ Apartado" : "☆ Apartar"}
            </button>
        </article>
    );
}

export default GameCard;