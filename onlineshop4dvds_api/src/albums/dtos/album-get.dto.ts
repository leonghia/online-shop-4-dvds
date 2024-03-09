export class AlbumGetDto {
    public id: number;
    public title: string;
    public released: Date;
    public genres: string[];
    public artist: string;
    public lengthInSeconds: number;
}