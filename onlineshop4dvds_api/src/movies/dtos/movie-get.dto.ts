export class MovieGetDto {
    public id: number;
    public title: string;
    public releasedYear: number;
    public lengthInMinutes: number;
    public genres: string[];
    public price: number;
    public rating: number;
    public description: string;
    public coverUrl: string;
}