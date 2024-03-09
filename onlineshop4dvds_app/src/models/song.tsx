export interface Song {
    id: number;
    title: string;
    artist: string;
    released: Date;
    lengthInSeconds: number;
    genres: string[];
    album: string | null;
}

export class SongCreate {
    public title: string;
    public artistId: number;
    public released: string;
    public minutes: number;
    public seconds: number;
    public genresIds: number[];
    public albumId: number | null;

    public constructor(title: string, artistId: number, released: string, minutes: number, seconds: number, genresIds: number[], albumId: number | null) {
        this.title = title;
        this.artistId = artistId;
        this.released = released;
        this.minutes = minutes;
        this.seconds = seconds;
        this.genresIds = genresIds;
        this.albumId = albumId;
    }
}