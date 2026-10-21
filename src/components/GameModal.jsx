import "./GameModal.css";

function GameModal({ game, isFavorite, onToggleFavorite, onClose }) {
    const handleBackdropClick = (event) => {
        if (event.target === event.currentTarget) {
            onClose();
        }
    };

    const handleKeyDown = (event) => {
        if (event.key === "Escape") {
            onClose();
        }
    };

    return (
        <div className="modal" onClick={handleBackdropClick} onKeyDown={handleKeyDown}>
            <div
                className="modal__panel"
                role="dialog"
                aria-modal="true"
                aria-labelledby="modal-title"
                data-genre={game.genre}
                tabIndex={-1}
            >
                <button
                    type="button"
                    className="modal__close"
                    onClick={onClose}
                    aria-label="Cerrar detalle"
                    autoFocus
                >
                    ✕
                </button>

                <img className="modal__cover" src={game.image} alt={`Portada de ${game.name}`} />

                <div className="modal__body">
                    <p className="modal__genre">{game.genre}</p>
                    <h2 id="modal-title" className="modal__title">{game.name}</h2>

                    <dl className="modal__facts">
                        <div>
                            <dt>Año</dt>
                            <dd>{game.year}</dd>
                        </div>
                        <div>
                            <dt>Estudio</dt>
                            <dd>{game.developer}</dd>
                        </div>
                    </dl>

                    <p className="modal__description">{game.description}</p>

                    <button
                        type="button"
                        className="modal__fav"
                        aria-pressed={isFavorite}
                        onClick={() => onToggleFavorite(game.id)}
                    >
                        {isFavorite ? "★ Quitar de favoritos" : "☆ Agregar a favoritos"}
                    </button>
                </div>
            </div>
        </div>
    );
}

export default GameModal;