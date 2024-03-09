export interface Album {
    id: number;
    title: string;
    released: string;
    genres: string[];
    artist: string;
    lengthInSeconds: number;
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