export interface Album {
    id: number;
    title: string;
    released: string;
    genres: string[];
    artist: string;
}

export class AlbumCreate {
    public title: string;
    public released: string;
    public genres: number[];
    public artistId: number;

    public constructor(title: string, released: string, genres: number[], artistId: number) {
        this.title = title;
        this.released = released;
        this.genres = genres;
        this.artistId = artistId;
    }
}