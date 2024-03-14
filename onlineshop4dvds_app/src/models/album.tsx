export interface Album {
    id: number;
    title: string;
    price: number;
    coverUrl: string;
    artist: string;
    artistAvatar: string;
}

export interface AlbumInfo {
    id: number;
    title: string;
    released: Date;
    price: number;
    coverUrl: string;
    genres: string[];
    artist: string;
    artistAvatar: string;
    lengthInSeconds: number;
    ratings?: number | null;
    numbersOfReviews?: number;
    description: string;
}

export class AlbumCreate {
    public title: string;
    public released: string;
    public genres: number[];
    public artistId: number;
    public minutes: number;
    public seconds: number;

    public constructor(title: string, released: string, genres: number[], artistId: number, minutes: number, seconds: number) {
        this.title = title;
        this.released = released;
        this.genres = genres;
        this.artistId = artistId;
        this.minutes = minutes;
        this.seconds = seconds;
    }
}