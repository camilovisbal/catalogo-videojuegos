import "./FavoritesToggle.css";

function FavoritesToggle({ count, isActive, onToggle }) {
    return (
        <button
            type="button"
            className="fav-toggle"
            aria-pressed={isActive}
            onClick={onToggle}
        >
            <span>{isActive ? "Ver todo el catálogo" : "Ver solo favoritos"}</span>
            <span className="fav-toggle__count" aria-label={`${count} favoritos`}>
                ★ {count}
            </span>
        </button>
    );
}

export default FavoritesToggle;