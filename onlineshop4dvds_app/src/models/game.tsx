export class GameCreate {
    public title: string;
    public releasedYear: number;
    public publisher: string;
    public genresIds: number[];

    public constructor(title: string, releasedYear: number, publisher: string, genresIds: number[]) {
        this.title = title;
        this.releasedYear = releasedYear;
        this.publisher = publisher;
        this.genresIds = genresIds;
    }
}

export interface Game {
    id: number;
    title: string;
    releasedYear: number;
    publisher: string;
    genres: string[];
    price: number;
    description: string;
    coverUrl: string;
    consoleType: string;
}