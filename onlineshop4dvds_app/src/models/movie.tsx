export interface Movie {
    id: number;
    title: string;
    releasedYear: number;
    lengthInMinutes: number;
    genres: string[];
}

export class MovieCreate {
    public title: string;
    public releasedYear: number;
    public hours: number;
    public minutes: number;
    public genresIds: number[];

    public constructor(title: string, releasedYear: number, hours: number, minutes: number, genresIds: number[]) {
        this.title = title;
        this.releasedYear = releasedYear;
        this.hours = hours;
        this.minutes = minutes;
        this.genresIds = genresIds;
    }
}