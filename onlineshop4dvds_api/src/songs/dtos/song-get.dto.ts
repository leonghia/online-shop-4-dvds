export class SongGetDto {
    id: number;
    title: string;
    artist: string;
    released: Date;
    lengthInSeconds: number;
    genres: string[];
    album: string | null;
}