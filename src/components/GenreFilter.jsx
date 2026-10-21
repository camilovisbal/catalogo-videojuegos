import "./GenreFilter.css";

function GenreFilter({ genres, selectedGenre, onChange }) {
    return (
        <div className="genres" role="group" aria-label="Filtrar por género">
            {genres.map((genre) => (
                <button
                    key={genre}
                    type="button"
                    className="genres__chip"
                    aria-pressed={genre === selectedGenre}
                    onClick={() => onChange(genre)}
                >
                    {genre}
                </button>
            ))}
        </div>
    );
}

export default GenreFilter;