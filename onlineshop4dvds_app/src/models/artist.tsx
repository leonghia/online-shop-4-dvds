export class ArtistCreate {
    public fullName: string;
    public dob: string;
    public nationality: string;
    public genres: number[];

    public constructor(fullName: string, dob: string, nationality: string, genres: number[]) {
        this.fullName = fullName;
        this.dob = dob;
        this.nationality = nationality;
        this.genres = genres;
    }
}

export interface Artist {
    id: number;
    fullName: string;
    dob: string;
    nationality: string;
    avatar: string;
    genres: string[];
}