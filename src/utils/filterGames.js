export const ALL_GENRES = "Todos";

export function filterGames(games, { search, genre }) {
    const normalizedSearch = search.trim().toLowerCase();

    return games.filter((game) => {
        const matchesSearch = game.name.toLowerCase().includes(normalizedSearch);
        const matchesGenre = genre === ALL_GENRES || game.genre === genre;

        return matchesSearch && matchesGenre;
    });
}