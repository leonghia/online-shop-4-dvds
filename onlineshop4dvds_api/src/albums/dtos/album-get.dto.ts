export interface AlbumGetDto {
    id: number;
    title: string;
    released: Date;
    price: number;
    coverUrl: string;
    genres: string[];
    artist: string;
    artistAvatar: string;
    lengthInSeconds: number;
    ratings?: number | null;
    numbersOfReviews?: number;
    description: string;
}