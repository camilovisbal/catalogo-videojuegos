export function filterGames(games, { search }) {
    const normalizedSearch = search.trim().toLowerCase();

    return games.filter((game) => {
        const matchesSearch = game.name.toLowerCase().includes(normalizedSearch);

        return matchesSearch;
    });
}