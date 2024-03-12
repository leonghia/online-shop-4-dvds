export class AlbumGetDto {
    public id: number;
    public title: string;
    public released: Date;
    public price: number;
    public coverUrl: string;
    public genres: string[];
    public artist: string;
    public lengthInSeconds: number;
}