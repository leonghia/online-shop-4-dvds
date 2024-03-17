export enum GenreType {
    Music = 0,
    Movie = 1,
    Game = 2
}

export const toString = (genreType: GenreType) => {
    switch (genreType) {
        case GenreType.Game:
            return "Game";
        case GenreType.Movie:
            return "Movie";
        case GenreType.Music:
            return "Album";
        default:
            throw new Error("Invalid genre type");
    }
}