import "./SearchBar.css";

function SearchBar({ value, onChange }) {
    return (
        <div className="search">
            <label htmlFor="search-input" className="search__label">
                Buscar
            </label>
            <input
                id="search-input"
                className="search__input"
                type="search"
                placeholder="Nombre del juego…"
                value={value}
                onChange={(event) => onChange(event.target.value)}
            />
        </div>
    );
}

export default SearchBar;