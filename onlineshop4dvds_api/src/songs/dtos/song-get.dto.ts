export class SongGetDto {
    public id: number;
    public title: string;
    public artist: string;
    public released: Date;
    public lengthInSeconds: number;
    public genres: string[];
    public album: string | null;
}