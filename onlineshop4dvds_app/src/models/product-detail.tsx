export interface ProductDetail {
    id: number;
    title: string;
    price: number;
    description: string;
    genres: string[];
    ratings: number | null;
    numbersOfReviews: number;
    images: string[];
    yearReleased: number;
    stock: number;
}